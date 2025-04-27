import Link from "next/link";
import { brands } from "./consts";
import styles from "./styles.module.css";
import * as motion from "motion/react-client";
import { Slide } from "react-awesome-reveal";

export const Brands = () => {
  return (
    <Slide triggerOnce>
      <div className={`${styles.cardsContainer} flexContainer`}>
        {brands.map((image, i) => (
          <Card
            background={{ background: image.background }}
            pathBackground={image.pathBackground}
            i={i}
            image={image.image}
            key={i}
          />
        ))}
      </div>
    </Slide>
  );
};

function Card({ image, background, pathBackground, i }) {
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background: pathBackground }} />
      <Link href="/">
        <motion.div
          style={{ ...card, ...background }}
          href="/"
          variants={cardVariants}
          className={`card`}
        >
          <figure className={styles.cardImage}>
            <img src={image} />
          </figure>
        </motion.div>
      </Link>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// 🎯 Cambiamos container para usar grid/flex responsivo
const container = {
  margin: "0 auto",
  maxWidth: "1000px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
};

// 🎯 Card container igual, pero quitamos centrar individualmente
const cardContainer = {
  borderRadius: "9px",
  boxShadow: "-5px 7px 56px -11px rgba(0, 0, 0, 0.161)",
  height: "400px",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  justifyContent: "center",
};

const splash = {
  position: "absolute",
  top: "0",
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 164,
  width: "70%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "9px",
  margin: "0 auto",
};
