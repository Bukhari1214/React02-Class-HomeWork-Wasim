"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();
  const { text } = useLanguageContext();

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Localization Implementation Summary</h1>

      <p className={styles.paragraph}>
        I implemented localization in my project using Material UI along with a
        custom <code>LanguageToggleButton</code> component. The toggle button
        allows users to switch between supported languages, and the selected
        language is stored using <code>localStorage</code> to ensure persistence
        across sessions.
      </p>

      <p className={styles.paragraph}>
        Instead of using external libraries like <code>react-intl</code>,{" "}
        <code>i18next</code>, or <code>next-intl</code>, I chose a simpler
        approach by defining translation text directly in a{" "}
        <code>LanguageContext.js</code> file. This context holds all
        language-specific content and provides it to the rest of the app via a
        custom hook, <code>useLanguageContext</code>.
      </p>

      <p className={styles.paragraph}>
        Components like the Home page and navigation buttons dynamically access
        and display the translated text. Although this method is basic, it
        effectively demonstrates how to manage multilingual content using React
        Context without adding extra dependencies.
      </p>

      <p className={styles.paragraph}>
        This solution is lightweight and ideal for small to medium-sized apps
        that need straightforward translation support.
      </p>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week02")}
        style={{ marginTop: "2rem" }}
      >
        {text.back || "Back"}
      </button>
    </main>
  );
}
