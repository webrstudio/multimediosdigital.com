"use client";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import { Slide } from "react-awesome-reveal";
import "react-multi-carousel/lib/styles.css";
import { Container, Title } from "@/components";

export const Podcast = () => {
  return (
    <Container>
      <Title title="podcast" />
      <div className="flexContainer">
        <Slide triggerOnce>
          <Carousel
            responsive={responsive}
            infinite={false}
            arrows={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <h3>En portada</h3>
              <iframe
                src="https://open.spotify.com/embed/show/0lMK7zHBBc31MsZMFRPjra?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              <div>
                <div>
                  <span>Audiencia</span>
                  <ul>
                    <li>Sitio</li>
                    <li>Anónimos 60%</li>
                    <li>Registrados 40%</li>
                  </ul>
                  <ul>
                    <li>Youtube</li>
                    <li>25 y 34 años: 17.1%</li>
                    <li>55 y 64 años: 19.1%</li>
                    <li>35 y 44 años: 22.1%</li>
                    <li>45 y 54 años: 20.9%</li>
                  </ul>
                  <ul>
                    <li>Spotify</li>
                    <li>28 y 34 años: 31.3%</li>
                    <li>35 y 44 años: 34.1%</li>
                  </ul>
                </div>
              </div>
              <div>
                <span>Opciones de comercialización</span>
                <ul>
                  <li>Menciones de 15 a 30 segundos después de los titulares</li>
                  <li>Imágen en spotify</li>
                  <li>Patrocinio en <a href='/podcast'>HOME</a></li>
                  <li>Patrocinio en <a href='/podcast'>Portada Milenio</a></li>
                </ul>
              </div>
            </div>
          </Carousel>
        </Slide>
      </div>
    </Container>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // cambia de 3 en 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
