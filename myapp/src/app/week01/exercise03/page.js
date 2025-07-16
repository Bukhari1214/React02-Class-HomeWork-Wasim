"use client";

import { useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./page.module.css";

export default function Exercise03Home() {
  const router = useRouter();
  const { text } = useLanguageContext();

  return (
    <main className={styles.main}>
      <h1 className={styles.title} style={{ marginBottom: "2rem" }}>
        {/* You can add a new key like exercise03Title in languages if you want */}
        {text.exercise03Title || "Exercise 3 - Navigation"}
      </h1>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01/exercise03/blogs")}
      >
        {text.blogsTitle || "Blogs List"}
      </button>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01/exercise03/blogs/my-new-post")}
      >
        {/* If you want to translate "Sample Blog Post" add a key for that */}
        {text.sampleBlogPost || "Sample Blog Post"}
      </button>

      <button
        className={styles.backButton}
        onClick={() =>
          router.push("/week01/exercise03/select-date?date=2022-06-01")
        }
      >
        {text.nasaEpicTitle || "NASA EPIC Image by Date"}
      </button>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01")}
      >
        {text.back || "BACK"}
      </button>
    </main>
  );
}
