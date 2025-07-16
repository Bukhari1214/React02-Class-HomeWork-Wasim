"use client";

import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./page.module.css";

export default function Week02() {
  const router = useRouter();
  const { text } = useLanguageContext();

  const exercises = ["exercise01", "exercise02", "exercise03", "exercise04"];

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {text.week02Title || "Week 02 Exercises"}
      </h1>

      <div className={styles.buttonRow}>
        {exercises.map((exercise) => (
          <button
            key={exercise}
            className={styles.navButton}
            onClick={() => router.push(`/week02/${exercise}`)}
          >
            {text[exercise] ||
              exercise.charAt(0).toUpperCase() + exercise.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.homeButtonContainer}>
        <button className={styles.navButton} onClick={goHome}>
          {text.home || "Home"}
        </button>
      </div>
    </div>
  );
}
