"use client";
import { talent } from "./const";
import { useState } from "react";
import styles from "./styles.module.css";
import "@szhsin/react-menu/dist/index.css";
import { IoIosArrowDown } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { Container, Title, GridContainer } from "@/components";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

export const Talent = () => {
  const [location, setLocation] = useState("Monterrey");

  return (
    <Container>
      <Title title={`Talentos - ${location}`} />
      <div className={`flexContainer`}>
        <Menu
          menuButton={
            <MenuButton
              className={`${styles.buttonMenu} boxShadow borderRadius`}
            >
              <span>Plazas</span> <IoIosArrowDown />
            </MenuButton>
          }
          transition
        >
          <MenuItem onClick={() => setLocation("Monterrey")}>
            Talentos - Monterrey
          </MenuItem>
          <MenuItem onClick={() => setLocation("Ciudad de México")}>
            Talentos - Ciudad de México
          </MenuItem>
          <MenuItem onClick={() => setLocation("Guadalajara")}>
            Talentos - Guadalajara
          </MenuItem>
        </Menu>
      </div>
      <GridContainer>
        {talent
          .filter((talent) => talent.location === location)
          .map((talent, i) => (
            <Slide triggerOnce key={i}>
              <div className={`${styles.talentCard} boxShadow borderRadius`}>
                <figure className={styles.talentImage}>
                  <img src={talent.image} />
                </figure>
                <div className={styles.talentDescription}>
                  <ul className={styles.talentIcons}>
                    {talent.icons.map((icon, i) => (
                      <li key={i}>
                        <a href={icon.link} target="_blank">
                          {icon.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <span className={styles.talentName}>{talent.name}</span>
                </div>
              </div>
            </Slide>
          ))}
      </GridContainer>
    </Container>
  );
};
