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
            <iframe
              src="https://open.spotify.com/embed/show/0lMK7zHBBc31MsZMFRPjra?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
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
