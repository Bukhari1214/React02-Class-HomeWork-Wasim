"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Exercise03Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1 className={styles.title} style={{ marginBottom: "2rem" }}>
        Exercise 3 - Navigation
      </h1>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01/exercise03/blogs")}
      >
        Blogs List
      </button>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01/exercise03/blogs/my-new-post")}
      >
        Sample Blog Post
      </button>

      <button
        className={styles.backButton}
        onClick={() =>
          router.push("/week01/exercise03/select-date?date=2022-06-01")
        }
      >
        NASA EPIC Image by Date
      </button>

      <button
        className={styles.backButton}
        onClick={() => router.push("/week01")}
      >
        Home
      </button>
    </main>
  );
}
