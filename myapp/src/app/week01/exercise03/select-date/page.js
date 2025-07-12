"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

const NASA_API_KEY = "DEMO_KEY"; // Replace with your actual NASA API key

export default function SelectDate() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
          setError("No EPIC images found for this date");
        } else {
          setImageData(data[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEpicImage();
  }, [date]);

  if (!date)
    return (
      <div className={styles.container}>
        <p className={styles.message}>
          Please provide a date query parameter, e.g. ?date=2023-07-01
        </p>
        <button
          onClick={() => router.push("/week01/exercise03")}
          className={styles.backButton}
        >
          Back to Exercise03
        </button>
      </div>
    );

  if (loading)
    return (
      <div className={styles.container}>
        <p className={styles.message}>Loading EPIC image for {date}...</p>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.error}>Error: {error}</p>
        <button
          onClick={() => router.push("/week01/exercise03")}
          className={styles.backButton}
        >
          Back to Exercise03
        </button>
      </div>
    );

  if (!imageData) return null;

  const [year, month, day] = date.split("-");
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageData.image}.png`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NASA EPIC Image for {date}</h1>
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
        Back to Exercise03
      </button>
    </div>
  );
}
