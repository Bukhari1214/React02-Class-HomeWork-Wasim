"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./LanguageToggleButton.module.css";

export default function LanguageToggleButton() {
  const { language, toggleLanguage, text } = useLanguageContext();

  return (
    <Button
      className={styles.toggleButton}
      variant="outlined"
      color="primary"
      onClick={toggleLanguage}
      disableElevation
      disableRipple
    >
      {text?.toggle || "Switch Language"} ({language?.toUpperCase() || "EN"})
    </Button>
  );
}
