"use client";

import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./Header.module.css";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import LanguageToggleButton from "../LanguageToggleButton/LanguageToggleButton";

export default function Header() {
  const { text, language } = useLanguageContext();

  return (
    <header className={styles.header} role="banner">
      <h1 className={styles.siteTitle} lang={language}>
        {text?.welcome || "Welcome"}
      </h1>
      <div className={styles.actions}>
        <ThemeToggleButton />
        <LanguageToggleButton />
      </div>
    </header>
  );
}
