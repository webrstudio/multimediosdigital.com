"use client";
import { images } from "./consts";
import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";

export const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.jumbotronWrapper}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.carouselImage} ${index === currentIndex ? `${styles.active}` : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/assets/videos/video-promo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className={styles.jumbotronMaskTitles}>
        <Fade>
          <TypeAnimation
            wrapper="h1"
            sequence={[
              "No solo informamos", // Types 'One'
              500,
              "",
              1000, // Waits 1s
              "Acompañamos",
              500,
              "", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "Inspiramos",
              500,
              "",
              1000,
              "Nos volvimos parte de tu historia", // Types 'Three' without deleting 'Two'
            ]}
            className={styles.jumbotronTitle}
            cursor={false}
          />
        </Fade>
        <Fade delay={1000}>
          <img
            src="/assets/images/logo/logo.png"
            className={styles.jumbotronImage}
          />
        </Fade>
        <Fade delay={1500}>
          <a href="#" className={`${styles.jumbotronButton} borderRadius`}>
            Descubre quiénes somos
          </a>
        </Fade>
      </div>
    </section>
  );
};
