"use client";
import styles from "./styles.module.css";
import { Flip, Fade } from "react-awesome-reveal";

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
            backgroundSize: "contain",
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a href="https://www.milenio.com/" target="_blank">
                  <img src="/assets/images/logos/milenio.png" />
                </a>
              </figure>
            </Flip>
          </h2>
        </Fade>
      </div>
      <div style={aboutWrapper}>
        <Fade
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a href="https://www.mediotiempo.com/" target="_blank">
                  <img src="/assets/images/logos/mediotiempo.png" />
                </a>
              </figure>
            </Flip>
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a
                  href="https://www.multimediostv.com/en-vivo/cdmx"
                  target="_blank"
                >
                  <img
                    src="/assets/images/logos/canal-6.png"
                    style={{ width: "80px" }}
                  />
                </a>
              </figure>
            </Flip>
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a
                  href="https://www.mmradio.com/estaciones/rg-la-deportiva"
                  target="_blank"
                >
                  <img src="/assets/images/logos/rg-la-deportiva.png" />
                </a>
              </figure>
            </Flip>
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a href="https://www.revistafama.com/" target="_blank">
                  <img src="/assets/images/logos/fama.png" />
                </a>
              </figure>
            </Flip>
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
            <Flip>
              <figure className={styles.aboutImage}>
                <a href="https://www.chicmagazine.com.mx/" target="_blank">
                  <img src="/assets/images/logos/chic.png" />
                </a>
              </figure>
            </Flip>
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
