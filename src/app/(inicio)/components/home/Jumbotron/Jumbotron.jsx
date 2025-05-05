'use client'
import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
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
              "",               // Deletes 'One' and types 'Two'
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
