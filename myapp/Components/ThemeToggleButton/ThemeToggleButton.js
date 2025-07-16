"use client";

import { useThemeContext } from "../../src/context/ThemeContext";
import styles from "./ThemeToggleButton.module.css";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
