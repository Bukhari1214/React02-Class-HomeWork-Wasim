"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const NASA_API_KEY = "RhQgzhbwo5XE06irRtdzLoqrB71MEH63zeSyo6lu";
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

export default function Week01() {
  const router = useRouter();

  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAPOD() {
      try {
        const response = await fetch(APOD_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAPOD();
  }, []);

  if (loading)
    return (
      <p className={styles.loading}>Loading Astronomy Picture of the Day...</p>
    );
  if (error) return <p className={styles.error}>Error: {error}</p>;
  if (!apodData) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{apodData.title}</h1>
      {apodData.media_type === "image" ? (
        <img
          src={apodData.url}
          alt={apodData.title}
          className={styles.apodImage}
        />
      ) : (
        <iframe
          title="NASA APOD video"
          src={apodData.url}
          className={styles.apodVideo}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      )}
      <p className={styles.explanation}>{apodData.explanation}</p>
      <br />
      <button
        onClick={() => router.push("/week01")}
        className={styles.backButton}
      >
        Back
      </button>
      ;
    </div>
  );
}
