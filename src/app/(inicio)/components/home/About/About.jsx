"use client";
import styles from "./styles.module.css";
import { Slide, Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-1.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Nacimos para contar lo que importa
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
          }}
        >
          <h2 className={styles.aboutTitle}>
            Desde la noticia que mueve el país, hasta la pasión de un gol que se
            grita con el alma
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-2.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}></h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-3.png")',
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Somos palabra y el eco de lo que tú vives
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-5.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Donde la verdad se respira
            <figure className={styles.aboutImage}>
              <img src="/assets/images/logos/milenio.png" />
            </figure>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-4.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}>
            No solo te lo contamos, lo vivimos contigo
            <figure className={styles.aboutImage}>
              <img src="/assets/images/logos/mediotiempo.png" />
            </figure>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-7.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Contigo desde casa
            <figure className={styles.aboutImage}>
              <img
                src="/assets/images/logos/canal-6.png"
                style={{ width: "80px" }}
              />
            </figure>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-6.jpeg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.aboutTitle}>
            La radio que se siente como tribuna
            <figure className={styles.aboutImage}>
              <img src="/assets/images/logos/rg-la-deportiva.png" />
            </figure>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-8.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Celebramos el brillo de la vida
            <figure className={styles.aboutImage}>
              <img src="/assets/images/logos/fama.png" />
            </figure>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
          delay={500}
          style={{
            ...aboutImageBackground,
            background: 'url("/assets/images/gallery/about-9.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <h2 className={styles.aboutTitle}>
            Donde el estilo se encuentra con la cultura
            <figure className={styles.aboutImage}>
              <img src="/assets/images/logos/chic.png" />
            </figure>
          </h2>
        </Fade>
      </div>
    </>
  );
};

const aboutWrapper = {
  alignItems: "center",
  background: "var(--black-primary)",
  color: "var(--gray-primary)",
  display: "flex",
  gap: "1.5rem",
  height: "100vh",
  justifyContent: "center",
  textAlign: "center",
};

const aboutImageBackground = {
  alignItems: "center",
  display: "flex",
  width: "100%",
  height: "100%",
};
