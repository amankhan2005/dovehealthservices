 import { createContext, useContext, useEffect, useState } from "react";
import { fetchSettings } from "../api/publicSettings";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ ONLY env-based base URL (NO localhost)
  const API_BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_BASE) {
      console.error("VITE_API_URL is not defined");
      setLoading(false);
      return;
    }

    fetchSettings()
      .then((data) => {
        const g = data?.global || data;

        // ✅ Fix logo URL (absolute)
        const fixedLogo = g?.logo
          ? g.logo.startsWith("http")
            ? g.logo
            : `${API_BASE}${g.logo.startsWith("/") ? "" : "/"}${g.logo}`
          : "";

        setSettings({
          ...g,
          logo: fixedLogo,
        });
      })
      .catch((err) => {
        console.error("Settings fetch failed:", err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_BASE]);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return ctx;
}
