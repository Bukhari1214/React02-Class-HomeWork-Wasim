"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguageContext } from "./LanguageContext";

function HtmlAttributesUpdater() {
  const { language } = useLanguageContext();

  useEffect(() => {
    if (typeof document !== "undefined" && language) {
      document.documentElement.lang = language;
      document.body.dir = ["ur", "ar", "fa", "he"].includes(language)
        ? "rtl"
        : "ltr";
    }
  }, [language]);

  return null;
}

export default function LanguageWrapper({ children }) {
  return (
    <LanguageProvider>
      <Inner>{children}</Inner>
    </LanguageProvider>
  );
}

function Inner({ children }) {
  const { isLoading } = useLanguageContext();
  if (isLoading) return null;
  return (
    <>
      <HtmlAttributesUpdater />
      {children}
    </>
  );
}
