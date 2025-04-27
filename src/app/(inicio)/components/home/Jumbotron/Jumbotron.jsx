import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
      <div className={styles.jumbotronTitles}>
        <div className={styles.jumbotronMaskTitles}>
          <Slide triggerOnce>
            <h1 className={styles.jumbotronTitle}>MULTIMEDIOS DIGITAL</h1>
          </Slide>
        </div>
      </div>
    </section>
  );
};
