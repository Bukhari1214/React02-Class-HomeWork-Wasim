"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Week01() {
  const router = useRouter();

  const exercises = ["exercise01", "exercise02", "exercise03"];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Week 01 Exercises</h1>
      <div className={styles.buttonContainer}>
        {exercises.map((exercise) => (
          <button
            key={exercise}
            className={styles.navButton}
            onClick={() => router.push(`/week01/${exercise}`)}
          >
            {exercise.charAt(0).toUpperCase() + exercise.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
