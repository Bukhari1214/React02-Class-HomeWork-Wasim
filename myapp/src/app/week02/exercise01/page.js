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
      <h1 className={styles.heading}>Exercise 01: Theme Context Setup</h1>

      <p className={styles.paragraph}>
        For Exercise 01, I did not used Material UI. I used Manuall Approach. I
        will use Material UI in the Exercise02.
      </p>

      <p className={styles.paragraph}>
        I created a <code>ThemeContext.js</code> file inside{" "}
        <code>myapp/src/context/</code> to manage theme state.
      </p>

      <p className={styles.paragraph}>
        Then, I created a <code>ThemeToggleButton</code> component inside{" "}
        <code>myapp/components/</code> to toggle between light and dark modes
        using this context.
      </p>

      <p className={styles.paragraph}>
        Finally, I used this toggle button inside my <code>Header</code>{" "}
        component so the user can switch themes globally.
      </p>

      <p className={styles.paragraph}>
        This approach keeps the theme logic centralized, and allows easy theme
        toggling from anywhere in the app via React Context.
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
