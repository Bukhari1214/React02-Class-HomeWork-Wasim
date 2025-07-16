"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import styles from "./page.module.css";

const NASA_API_KEY = "DEMO_KEY"; // Replace with your actual NASA API key

export default function SelectDate() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { text } = useLanguageContext();

  const date = searchParams.get("date");

  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!date) return;

    async function fetchEpicImage() {
      setLoading(true);
      setError(null);
      setImageData(null);

      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${NASA_API_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch EPIC data");

        const data = await response.json();
        if (data.length === 0) {
          setError(text.errorPrefix + " No EPIC images found for this date");
        } else {
          setImageData(data[0]);
        }
      } catch (err) {
        setError(text.errorPrefix + " " + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEpicImage();
  }, [date, text.errorPrefix]);

  if (!date)
    return (
      <div className={styles.container}>
        <p className={styles.message}>{text.pleaseProvideDate}</p>
        <button
          onClick={() => router.push("/week01/exercise03")}
          className={styles.backButton}
        >
          {text.backToExercise03}
        </button>
      </div>
    );

  if (loading)
    return (
      <div className={styles.container}>
        <p className={styles.message}>
          {text.loadingEpic} {date}...
        </p>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <button
          onClick={() => router.push("/week01/exercise03")}
          className={styles.backButton}
        >
          {text.backToExercise03}
        </button>
      </div>
    );

  if (!imageData) return null;

  const [year, month, day] = date.split("-");
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageData.image}.png`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {text.nasaEpicTitle} {date}
      </h1>
      <img
        src={imageUrl}
        alt={`NASA EPIC image taken on ${date}`}
        className={styles.image}
      />
      <p className={styles.caption}>{imageData.caption}</p>
      <button
        onClick={() => router.push("/week01/exercise03")}
        className={styles.backButton}
      >
        {text.backToExercise03}
      </button>
    </div>
  );
}
