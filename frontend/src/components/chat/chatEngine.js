// Rule-based intent matcher for the Dove Health chatbot.
// No AI / network calls: plain keyword + phrase scoring over the knowledge base.

import {
  INTENTS,
  FALLBACK_ANSWER,
  FALLBACK_SUGGESTIONS,
} from "../../data/chatbotKnowledge.js";

// Common misspellings / variants, mapped to the vocabulary used in INTENTS.
const SPELLING = {
  adress: "address", addres: "address", adres: "address", adddress: "address",
  locaton: "location", loaction: "location", locatoin: "location", lokation: "location",
  appoinment: "appointment", apointment: "appointment", appointmnet: "appointment",
  appointement: "appointment", appt: "appointment", appts: "appointment",
  servise: "service", servises: "services", sevices: "services", serivces: "services", servics: "services",
  emial: "email", emal: "email", gmail: "email",
  contct: "contact", conatct: "contact", contac: "contact",
  phn: "phone", phne: "phone", fone: "phone", mobile: "phone", cell: "phone",
  numbr: "number", nubmer: "number",
  shedule: "schedule", schedual: "schedule", scedule: "schedule",
  insurence: "insurance", insurace: "insurance", insuranse: "insurance",
  counselling: "counseling", councelling: "counseling", counciling: "counseling", councilling: "counseling",
  conselling: "counseling", counsling: "counseling", counselor: "counselor", counsellor: "counselor",
  therapy: "therapy", theraphy: "therapy", therepy: "therapy",
  rehabilitaion: "rehabilitation", rehabilation: "rehabilitation",
  psychatric: "psychiatric", psychiatic: "psychiatric", phsychiatric: "psychiatric",
  timings: "timing", hrs: "hour",
  thnx: "thanks", thanx: "thanks", ty: "thanks",
  helo: "hello", hii: "hi", hai: "hi",
  u: "you", ur: "your", r: "are", pls: "please", plz: "please",
};

// Everyday words that are never "fuzzy-corrected" into keywords.
const STOPWORDS = new Set(
  ("a an the and or but if of to in on at by for from with about into over under " +
    "is are was were be been being am do does did have has had can could will would shall should may might must " +
    "i me my mine you your yours we us our ours they them their he she it its this that these those there here " +
    "what where when which who whom whose why how please hey yes yeah okay ok sure just also very really " +
    "want need know like tell give show get got make let say see look find some any all more most other " +
    "much many few lot lots thing things something anything nothing way ways time day today now still " +
    "write right while white where there three their whats wheres hows")
    .split(" ")
);

export function normalize(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/e-mail/g, "email")
    .replace(/[’‘`]/g, "'")
    .replace(/&/g, " and ")
    // join phone-number style digit groups ("410-988-2335" -> "4109882335")
    .replace(/(\d)[\s().-]+(?=\d)/g, "$1")
    .replace(/'/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function singular(word) {
  if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

// Damerau-Levenshtein distance (with an early exit above `max`).
function distance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
      rowMin = Math.min(rowMin, d[i][j]);
    }
    if (rowMin > max) return max + 1;
  }
  return d[a.length][b.length];
}

// Pre-normalise the knowledge base once.
const COMPILED = INTENTS.map((intent) => ({
  ...intent,
  kw: Object.entries(intent.keywords || {}).map(([w, weight]) => [normalize(w), weight]),
  ph: Object.entries(intent.phrases || {}).map(([p, weight]) => [normalize(p), weight]),
}));

const VOCAB = [...new Set(COMPILED.flatMap((i) => i.kw.map(([w]) => w)).filter((w) => /^[a-z]{5,}$/.test(w)))];

function correct(token) {
  if (SPELLING[token]) return SPELLING[token];
  if (token.length < 5 || STOPWORDS.has(token) || /\d/.test(token)) return token;
  const known = COMPILED.some((i) => i.kw.some(([w]) => w === token || w === singular(token)));
  if (known) return token;
  const max = token.length >= 8 ? 2 : 1;
  let best = token;
  let bestD = max + 1;
  for (const word of VOCAB) {
    const dd = distance(token, word, max);
    if (dd < bestD) {
      bestD = dd;
      best = word;
    }
  }
  return bestD <= max ? best : token;
}

/** Score every intent for a message. Exported for tests. */
export function scoreMessage(message) {
  const base = normalize(message);
  const tokens = base ? base.split(" ").map(correct) : [];
  const text = ` ${tokens.join(" ")} `;
  const forms = new Set(tokens.flatMap((t) => [t, singular(t)]));

  return COMPILED.map((intent) => {
    let score = 0;
    for (const [word, weight] of intent.kw) if (forms.has(word)) score += weight;
    for (const [phrase, weight] of intent.ph) if (phrase && text.includes(` ${phrase} `)) score += weight;
    return { intent, score };
  });
}

/**
 * Returns { id, answer, suggestions } for a visitor message.
 * Intents marked `override` (crisis) win whenever they match.
 */
export function getResponse(message) {
  const scored = scoreMessage(message);
  const override = scored.find((s) => s.intent.override && s.score > 0);
  if (override) return pick(override.intent);

  let best = null;
  for (const s of scored) if (s.score > 0 && (!best || s.score > best.score)) best = s;
  if (!best) {
    return { id: "fallback", answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }
  return pick(best.intent);
}

function pick(intent) {
  return { id: intent.id, answer: intent.answer, suggestions: intent.suggestions || [] };
}
