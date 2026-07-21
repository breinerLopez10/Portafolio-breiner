import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-language";

const getInitialLanguage = () => {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (stored === "en" || stored === "es") return stored;
  const browserLang = typeof navigator !== "undefined" ? navigator.language : "en";
  return browserLang && browserLang.startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "es" : "en"));

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
