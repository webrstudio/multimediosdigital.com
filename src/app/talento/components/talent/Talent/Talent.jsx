import { talent } from "./const";
import styles from "./styles.module.css";
import { Container, Title, GridContainer } from "@/components";
export const Talent = () => {
  return (
    <Container>
      <Title title="Talentos" />
      <GridContainer>
        {talent.map((talent, i) => (
          <div
            className={`${styles.talentCard} boxShadow borderRadius`}
            key={i}
          >
            <figure className={styles.talentImage}>
              <img src={talent.image} />
            </figure>
            <div className={styles.talentDescription}>
              <ul className={styles.talentIcons}>
                {talent.icons.map((icon, i) => (
                  <li key={i}>
                    <a href={icon.link} target='_blank'>{icon.icon}</a>
                  </li>
                ))}
              </ul>
              <span className={styles.talentName}>{talent.name}</span>
            </div>
          </div>
        ))}
      </GridContainer>
    </Container>
  );
};
