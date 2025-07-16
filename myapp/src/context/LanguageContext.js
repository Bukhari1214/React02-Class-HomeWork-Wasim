"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { languages } from "./Languages";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved && Object.keys(languages).includes(saved)) {
        setLanguage(saved);
      } else {
        const navLang = navigator.language.slice(0, 2);
        setLanguage(Object.keys(languages).includes(navLang) ? navLang : "en");
      }
      setIsLoading(false);
    }
  }, []);

  const toggleLanguage = () => {
    if (!language) return;
    const keys = Object.keys(languages);
    const currentIndex = keys.indexOf(language);
    const nextIndex = (currentIndex + 1) % keys.length;
    const nextLang = keys[nextIndex];
    setLanguage(nextLang);
    localStorage.setItem("language", nextLang);
  };

  if (isLoading) return null;

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, text: languages[language], isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
