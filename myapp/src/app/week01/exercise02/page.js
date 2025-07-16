"use client";

import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import DynamicRendering from "../../../../Components/DynamicRendering/DynamicRendering";
import styles from "./page.module.css";

export default function Exercise02() {
  const router = useRouter();
  const { text } = useLanguageContext();

  return (
    <main className={styles.main}>
      <DynamicRendering />

      <button
        onClick={() => router.push("/week01")}
        className={styles.backButton}
      >
        {text.back || "BACK"}
      </button>
    </main>
  );
}
