 // src/api/publicSettings.js

// ✅ Safe API base with fallback
const API_BASE =
  import.meta.env.VITE_API_URL || "https://hearthomeagency.onrender.com";

// Normalize (remove trailing slash)
const NORMALIZED_BASE = API_BASE.replace(/\/$/, "");

// Optional export
export const SERVER_BASE = NORMALIZED_BASE;

async function fetchJson(path, opts = {}) {
  const res = await fetch(`${NORMALIZED_BASE}/api${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text || "Request failed");
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// ✅ Correct endpoint
export async function fetchSettings() {
  return fetchJson("/settings");
}
