import { brands } from "./consts";
import styles from "./styles.module.css";
import * as motion from "motion/react-client";

export const Brands = () => {
  return (
    <div style={container}>
      {brands.map((image, i) => (
        <Card
          background={{ background: image.background }}
          i={i}
          image={image.image}
          key={i}
        />
      ))}
    </div>
  );
};

function Card({ image, background, i }) {
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash }} />
      <motion.div
        style={{ ...card, ...background }}
        variants={cardVariants}
        className={`card`}
      >
        <figure className={styles.cardImage}>
          <img src={image} />
        </figure>
      </motion.div>
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

const container = {
  margin: "0 auto",
  maxWidth: "500px",
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const splash = {
  background: 'var(--black-primary)',
  position: "absolute",
  top: "3rem",
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 164,
  width: "300px",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
};
