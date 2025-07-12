"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();

  const title =
    typeof slug === "string" && slug.length > 0
      ? slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "Untitled Post";

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        This is a blog post page for: <strong>{slug}</strong>
      </p>

      <button
        onClick={() => router.push("/week01/exercise03")}
        className={styles.backButton}
      >
        Back to Exercise03
      </button>
    </main>
  );
}
