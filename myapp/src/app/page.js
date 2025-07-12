"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const goToWeek01 = () => {
    router.push("/week01");
  };

  const goToWeek02 = () => {
    router.push("/week02");
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to My Next.js Assignment</h1>
      <p className={styles.text}>
        This assignment demonstrates my understanding of Server-Side Rendering
        (SSR) and Static Site Generation (SSG) using Next.js...
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.navButton} onClick={goToWeek01}>
          Week 01
        </button>
        <button className={styles.navButton} onClick={goToWeek02}>
          Week 02
        </button>
      </div>
    </main>
  );
}
