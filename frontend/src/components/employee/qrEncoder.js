// src/components/employee/qrEncoder.js
//
// Minimal, dependency-free QR Code encoder (byte mode, error-correction level M,
// versions 1-10). Used by EmployeeQRCode so the project does not need an extra
// npm package. Returns a 2D array of 0/1 modules.

// Total/EC codeword layout per version for error-correction level M.
const EC_M = {
  1: { ecc: 10, blocks: [[1, 16]] },
  2: { ecc: 16, blocks: [[1, 28]] },
  3: { ecc: 26, blocks: [[1, 44]] },
  4: { ecc: 18, blocks: [[2, 32]] },
  5: { ecc: 24, blocks: [[2, 43]] },
  6: { ecc: 16, blocks: [[4, 27]] },
  7: { ecc: 18, blocks: [[4, 31]] },
  8: { ecc: 22, blocks: [[2, 38], [2, 39]] },
  9: { ecc: 22, blocks: [[3, 36], [2, 37]] },
  10: { ecc: 26, blocks: [[4, 43], [1, 44]] },
};

// Alignment-pattern centre coordinates per version.
const ALIGN = {
  1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
  6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50],
};

/* ---------- GF(256) arithmetic for Reed-Solomon ---------- */

const EXP = new Array(512);
const LOG = new Array(256);
(function initGf() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();

const mul = (a, b) => (a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]]);

function rsPoly(n) {
  let p = [1];
  for (let i = 0; i < n; i++) {
    const q = [1, EXP[i]];
    const r = new Array(p.length + 1).fill(0);
    for (let j = 0; j < p.length; j++) {
      for (let k = 0; k < q.length; k++) r[j + k] ^= mul(p[j], q[k]);
    }
    p = r;
  }
  return p;
}

function rsEncode(data, n) {
  const gen = rsPoly(n);
  const res = new Array(n).fill(0);
  for (const d of data) {
    const factor = d ^ res[0];
    res.shift();
    res.push(0);
    if (factor !== 0) for (let i = 0; i < n; i++) res[i] ^= mul(gen[i + 1], factor);
  }
  return res;
}

/* ---------- Data encoding ---------- */

function pickVersion(len) {
  for (let v = 1; v <= 10; v++) {
    const dataCw = EC_M[v].blocks.reduce((s, [n, k]) => s + n * k, 0);
    if (4 + (v < 10 ? 8 : 16) + len * 8 <= dataCw * 8) return v;
  }
  throw new Error("QR: content too long");
}

function encodeData(bytes, version) {
  const cfg = EC_M[version];
  const dataCw = cfg.blocks.reduce((s, [n, k]) => s + n * k, 0);
  const bits = [];
  const push = (val, len) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
  };

  push(4, 4); // byte mode
  push(bytes.length, version < 10 ? 8 : 16);
  for (const b of bytes) push(b, 8);

  const cap = dataCw * 8;
  for (let i = 0; i < 4 && bits.length < cap; i++) bits.push(0); // terminator
  while (bits.length % 8 !== 0) bits.push(0);
  const pads = [0xec, 0x11];
  let pi = 0;
  while (bits.length < cap) push(pads[pi++ % 2], 8);

  const cw = [];
  for (let i = 0; i < bits.length; i += 8) {
    let v = 0;
    for (let j = 0; j < 8; j++) v = (v << 1) | bits[i + j];
    cw.push(v);
  }

  // Split into blocks, compute EC, then interleave.
  const dBlocks = [];
  const eBlocks = [];
  let off = 0;
  for (const [n, k] of cfg.blocks) {
    for (let i = 0; i < n; i++) {
      const d = cw.slice(off, off + k);
      off += k;
      dBlocks.push(d);
      eBlocks.push(rsEncode(d, cfg.ecc));
    }
  }

  const out = [];
  const maxD = Math.max(...dBlocks.map((b) => b.length));
  for (let i = 0; i < maxD; i++) for (const b of dBlocks) if (i < b.length) out.push(b[i]);
  for (let i = 0; i < cfg.ecc; i++) for (const b of eBlocks) out.push(b[i]);
  return out;
}

/* ---------- Matrix construction ---------- */

function buildMatrix(version, codewords) {
  const size = version * 4 + 17;
  const m = Array.from({ length: size }, () => new Array(size).fill(null));
  const set = (r, c, v) => { m[r][c] = v; };

  const finder = (r, c) => {
    for (let i = -1; i <= 7; i++) {
      for (let j = -1; j <= 7; j++) {
        const rr = r + i;
        const cc = c + j;
        if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
        const on =
          (i >= 0 && i <= 6 && (j === 0 || j === 6)) ||
          (j >= 0 && j <= 6 && (i === 0 || i === 6)) ||
          (i >= 2 && i <= 4 && j >= 2 && j <= 4);
        set(rr, cc, on ? 1 : 0);
      }
    }
  };
  finder(0, 0);
  finder(0, size - 7);
  finder(size - 7, 0);

  for (let i = 8; i < size - 8; i++) {
    set(6, i, i % 2 === 0 ? 1 : 0);
    set(i, 6, i % 2 === 0 ? 1 : 0);
  }

  const ac = ALIGN[version];
  for (const r of ac) {
    for (const c of ac) {
      if ((r === 6 && c === 6) || (r === 6 && c === size - 7) || (r === size - 7 && c === 6)) continue;
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          set(r + i, c + j, Math.max(Math.abs(i), Math.abs(j)) !== 1 ? 1 : 0);
        }
      }
    }
  }

  set(size - 8, 8, 1); // dark module

  // Reserve format / version areas so data placement skips them.
  for (let i = 0; i < 9; i++) {
    if (m[8][i] === null) set(8, i, 0);
    if (m[i][8] === null) set(i, 8, 0);
  }
  for (let i = 0; i < 8; i++) {
    if (m[8][size - 1 - i] === null) set(8, size - 1 - i, 0);
    if (m[size - 1 - i][8] === null) set(size - 1 - i, 8, 0);
  }
  if (version >= 7) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        set(size - 11 + j, i, 0);
        set(i, size - 11 + j, 0);
      }
    }
  }

  const reserved = m.map((row) => row.map((v) => v !== null));

  // Zig-zag data placement, bottom-right upward.
  let bitIdx = 0;
  const totalBits = codewords.length * 8;
  const getBit = () =>
    bitIdx < totalBits ? (codewords[bitIdx >> 3] >> (7 - (bitIdx & 7))) & 1 : 0;

  let up = true;
  for (let c = size - 1; c > 0; c -= 2) {
    if (c === 6) c--; // skip the vertical timing column
    for (let n = 0; n < size; n++) {
      const r = up ? size - 1 - n : n;
      for (let k = 0; k < 2; k++) {
        const cc = c - k;
        if (reserved[r][cc]) continue;
        m[r][cc] = getBit();
        bitIdx++;
      }
    }
    up = !up;
  }

  return { m, size, reserved };
}

/* ---------- Masking & format information ---------- */

const MASKS = [
  (r, c) => (r + c) % 2 === 0,
  (r) => r % 2 === 0,
  (r, c) => c % 3 === 0,
  (r, c) => (r + c) % 3 === 0,
  (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
];

function bch15(fmt) {
  let v = fmt << 10;
  for (let i = 14; i >= 10; i--) if ((v >> i) & 1) v ^= 0x537 << (i - 10);
  return ((fmt << 10) | v) ^ 0x5412;
}

function bch18(ver) {
  let v = ver << 12;
  for (let i = 17; i >= 12; i--) if ((v >> i) & 1) v ^= 0x1f25 << (i - 12);
  return (ver << 12) | v;
}

function applyFormat(m, size, mask) {
  const bits = bch15((0 << 3) | mask); // 00 = EC level M
  // Format bits are written most-significant-bit first (j = 0 -> bit 14).
  const copy1 = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8],
  ];
  for (let j = 0; j < 15; j++) {
    const b = (bits >> (14 - j)) & 1;
    const [r, c] = copy1[j];
    m[r][c] = b;
    // Second copy: bottom-left column then top-right row, skipping the dark module.
    if (j < 7) m[size - 1 - j][8] = b;
    else m[8][size - 15 + j] = b;
  }
}

function applyVersion(m, size, version) {
  if (version < 7) return;
  const bits = bch18(version);
  for (let i = 0; i < 18; i++) {
    const b = (bits >> i) & 1;
    const r = Math.floor(i / 3);
    const c = i % 3;
    m[size - 11 + c][r] = b;
    m[r][size - 11 + c] = b;
  }
}

function penalty(m, size) {
  let p = 0;

  const run = (get) => {
    for (let a = 0; a < size; a++) {
      let last = null;
      let cnt = 0;
      for (let b = 0; b < size; b++) {
        const v = get(a, b);
        if (v === last) cnt++;
        else {
          if (cnt >= 5) p += 3 + (cnt - 5);
          last = v;
          cnt = 1;
        }
      }
      if (cnt >= 5) p += 3 + (cnt - 5);
    }
  };
  run((a, b) => m[a][b]);
  run((a, b) => m[b][a]);

  for (let r = 0; r < size - 1; r++) {
    for (let c = 0; c < size - 1; c++) {
      const v = m[r][c];
      if (v === m[r][c + 1] && v === m[r + 1][c] && v === m[r + 1][c + 1]) p += 3;
    }
  }

  const pat = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
  const pat2 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
  const chk = (get) => {
    for (let a = 0; a < size; a++) {
      for (let b = 0; b <= size - 11; b++) {
        let ok1 = true;
        let ok2 = true;
        for (let i = 0; i < 11; i++) {
          const v = get(a, b + i);
          if (v !== pat[i]) ok1 = false;
          if (v !== pat2[i]) ok2 = false;
        }
        if (ok1) p += 40;
        if (ok2) p += 40;
      }
    }
  };
  chk((a, b) => m[a][b]);
  chk((a, b) => m[b][a]);

  let dark = 0;
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) dark += m[r][c];
  p += Math.floor(Math.abs((dark * 100) / (size * size) - 50) / 5) * 10;
  return p;
}

/**
 * Encode `text` and return a 2D array of 0/1 modules (row-major).
 */
export function generateQrMatrix(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const version = pickVersion(bytes.length);
  const cw = encodeData(bytes, version);
  const { m, size, reserved } = buildMatrix(version, cw);

  let best = null;
  let bestPenalty = Infinity;
  for (let mask = 0; mask < 8; mask++) {
    const t = m.map((r) => r.slice());
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) if (!reserved[r][c] && MASKS[mask](r, c)) t[r][c] ^= 1;
    }
    applyFormat(t, size, mask);
    applyVersion(t, size, version);
    const p = penalty(t, size);
    if (p < bestPenalty) {
      bestPenalty = p;
      best = t;
    }
  }
  return best;
}
