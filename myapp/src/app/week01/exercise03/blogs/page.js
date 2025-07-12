"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogs } from "../../../../../data/my-blogs";
import styles from "./page.module.css";

export default function Blogs() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs</h1>
      <ul className={styles.list}>
        {blogs.map((blog) => (
          <li key={blog.slug} className={styles.listItem}>
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogExcerpt}>
              {blog.content.length > 150
                ? blog.content.substring(0, 150) + "..."
                : blog.content}
            </p>
            <Link
              href={`/week01/exercise03/blogs/${blog.slug}`}
              className={styles.readMoreLink}
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => router.push("/week01/exercise03")}
        className={styles.backButton}
      >
        Back to Exercise03
      </button>
    </div>
  );
}
