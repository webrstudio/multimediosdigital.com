import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
export const Title = ({ title, whiteColor, blackColor }) => {
  return (
    <h2
      className={
        `
        ${styles.titleWrapper}
        ${!whiteColor ? '' : styles.whiteColor}
        ${!blackColor ? '' : styles.blackColor}
        `
      }
    >
      <Slide triggerOnce>
        {title}
      </Slide>
    </h2>
  )
};
