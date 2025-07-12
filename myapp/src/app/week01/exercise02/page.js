"use client";

import { useRouter } from "next/navigation";
import DynamicRendering from "../../../../Components/DynamicRendering/DynamicRendering";
import styles from "./page.module.css";

export default function Exercise02() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <DynamicRendering />

      <button
        onClick={() => router.push("/week01")}
        className={styles.backButton}
      >
        Back
      </button>
    </main>
  );
}
