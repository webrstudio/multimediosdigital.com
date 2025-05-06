import { Title } from "@/components";
import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <>
      <div className={`${styles.aboutWrapper} flexContainer`}>
        <Fade delay={500}>
          <h2>Nacimos para contar lo que importa</h2>
        </Fade>
      </div>
      <div className={`${styles.aboutWrapper} flexContainer`}>
        <Fade delay={500}>
          <h2>
            Somos palabra, imagen, emoción
          </h2>
        </Fade>
      </div>
      <div className={`${styles.aboutWrapper} flexContainer`}>
        <Fade delay={500}>
          <h2>
            Somos el eco de lo que tú vives
          </h2>
        </Fade>
      </div>
    </>
  );
};
