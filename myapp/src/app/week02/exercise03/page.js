"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";

import Counter from "Components/Counter/Counter";
import { CounterProvider } from "@/context/CounterContext";
import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();
  const { text } = useLanguageContext();

  return (
    <CounterProvider>
      <main className={styles.container}>
        <h1 className={styles.heading}>
          {text.exercise03Title ||
            "Exercise 03: Counter with Context and Reducer"}
        </h1>
        <Counter />
        <button
          className={styles.backButton}
          onClick={() => router.push("/week02")}
          style={{ marginTop: "2rem" }}
        >
          {text.back || "Back"}
        </button>
      </main>
    </CounterProvider>
  );
}
