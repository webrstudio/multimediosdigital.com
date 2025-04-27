import styles from "./styles.module.css";
import { Bounce } from "react-awesome-reveal";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
      <div className={styles.jumbotronTitles}>
        <div className={styles.jumbotronMaskTitles}>
          <Bounce direction='right' triggerOnce>
            <img
              src="/assets/images/logo/logo.png"
              className={styles.jumbotronImage}
            />
            <h1 className={styles.jumbotronTitle}>MULTIMEDIOS DIGITAL</h1>
          </Bounce>
        </div>
      </div>
    </section>
  );
};
