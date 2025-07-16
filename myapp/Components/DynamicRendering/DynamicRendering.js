"use client";

import React, { useEffect, useState } from "react";
import styles from "./DynamicRendering.module.css";

const NASA_API_KEY = "DEMO_KEY"; // Replace with your NASA API key
const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;

export default function DynamicRendering() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPhotos() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch photos");
        const data = await response.json();

        if (isMounted) {
          setPhotos(data.photos.slice(0, 10)); // Limit to 10 photos
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return <p className={styles.statusMessage}>Loading Mars Rover Photos...</p>;
  if (error)
    return (
      <p className={`${styles.statusMessage} ${styles.error}`}>
        Error: {error}
      </p>
    );
  if (!photos.length)
    return <p className={styles.statusMessage}>No photos found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mars Rover Photos - Curiosity (Sol 1000)</h1>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <img
              src={photo.img_src}
              alt={`Mars rover - ${photo.camera.full_name}`}
              className={styles.photo}
            />
            <div className={styles.caption}>
              <p className={styles.cameraName}>{photo.camera.full_name}</p>
              <p className={styles.sol}>Taken on sol {photo.sol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
