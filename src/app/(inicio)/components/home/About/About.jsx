import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";

export const About = () => {
  return (
    <div className={`${styles.aboutWrapper} flexContainer`}>
      <Slide triggerOnce>
        <p>
          Somos la unidad especializada de Grupo Multimedios, llevamos a cabo la
          planeación, ejecución y monitoreo de campañas dentro del ecosistema
          digital.
        </p>
        <p>
          Realizamos estrategias integrales utilizando un abanico robusto de
          soluciones creativas e innovadoras con objetivo de awareness y
          consideración.
        </p>
        <hr />
      </Slide>
    </div>
  );
};
