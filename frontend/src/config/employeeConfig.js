// src/config/employeeConfig.js
//
// Central configuration for the Employee section.
// Change the password here (or via the VITE_EMPLOYEE_PASSWORD env var) —
// no other file needs to be touched.

// ✅ Safe password with fallback (same pattern as src/api/publicSettings.js)
export const EMPLOYEE_PASSWORD =
  import.meta.env.VITE_EMPLOYEE_PASSWORD || "doveHealthCare@2026";

// Key used to remember an unlocked session (cleared when the tab closes).
export const EMPLOYEE_SESSION_KEY = "dove_employee_unlocked";

// Employee-facing forms. Add or reorder entries here; the page renders whatever is listed.
 export const EMPLOYEE_FORMS = [
  {
    id: "sep",
    title: "SEP Form",
    description: "Supported Employment Program referral form.",
    url: "https://pdf.ac/X95pgLaU",
  },
  {
    id: "dla-20",
    title: "DLA-20 Form",
    description: "Daily Living Activities functional assessment.",
    url: "https://pdf.ac/g_U1axCZ",
  },
  {
    id: "consent",
    title: "Consent Form",
    description: "General authorization and consent to treatment.",
    url: "https://pdf.ac/Uziw3Oltxq",
  },
  {
    id: "prp-consent",
    title: "PRP Consent Form",
    description: "Psychiatric Rehabilitation Program consent.",
    url: "https://pdf.ac/MhJMWzQID",
  },
  {
    id: "carelon-discharge",
    title: "Carelon Discharge Form",
    description: "Carelon discharge summary and closure documentation.",
    url: "https://pdf.ac/SxxbNrskle",
  },
  {
    id: "supervision-contract-prp",
    title: "Supervision Contract PRP",
    description: "Supervision agreement for Psychiatric Rehabilitation Program staff.",
    url: "https://pdf.ac/bn9FqjbbV",
  },
];
