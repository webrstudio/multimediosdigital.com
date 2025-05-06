import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";
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
      <Fade>
        {title}
      </Fade>
    </h2>
  )
};
