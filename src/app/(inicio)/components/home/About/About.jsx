import { Title } from "@/components";
import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <>
      <div className={`${styles.aboutWrapper} bgBlackPrimary`}>
        <Fade delay={500}>
          <h2>Nacimos para contar lo que importa</h2>
        </Fade>
      </div>
      <div className={`${styles.aboutWrapper} bgBlackSecondary`}>
        <Fade delay={500}>
          <h2>
            Desde la noticia que mueve el país, hasta la pasión de un gol que se grita con el alma
          </h2>
        </Fade>
      </div>
      <div className={`${styles.aboutWrapper} bgBlackPrimary`}>
        <Fade delay={500}>
          <h2>
            Somos palabra, imagen, emoción
          </h2>
        </Fade>
      </div>
      <div className={`${styles.aboutWrapper} bgBlackSecondary`}>
        <Fade delay={500}>
          <h2>
            Somos el eco de lo que tú vives
          </h2>
        </Fade>
      </div>
    </>
  );
};
