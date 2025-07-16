"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./page.module.css";
import { TodoProvider } from "@/context/ToDoContext";
import Todo from "Components/ToDo/ToDo";

export default function Exercise04Page() {
  const router = useRouter();
  const { text } = useLanguageContext();

  return (
    <TodoProvider>
      <main className={styles.container}>
        <h1 className={styles.heading}>
          {text.exercise04Title ||
            "Exercise 04: Todo List with Context and Reducer"}
        </h1>

        <Todo />

        <button
          className={styles.backButton}
          onClick={() => router.push("/week02")}
          style={{ marginTop: "2rem" }}
          aria-label={text.back || "Go back"}
        >
          {text.back || "Back"}
        </button>
      </main>
    </TodoProvider>
  );
}
