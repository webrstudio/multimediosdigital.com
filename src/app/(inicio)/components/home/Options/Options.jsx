"use client";
import Link from "next/link";
import { options } from "./consts";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Bounce } from "react-awesome-reveal";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // cambia de 3 en 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Options = () => {
  return (
    <div className="flexContainer">
      <Bounce direction="left" triggerOnce>
        <figure className={styles.logoWrapper}>
          <img src="/assets/images/logo/logo.png" />
        </figure>
        <Carousel
          responsive={responsive}
          infinite={false}
          arrows={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {options.map((option, index) => (
            <Link href="/" key={index} className={styles.optionCard}>
              <img src={option.image} />
              <span>{option.option}</span>
            </Link>
          ))}
        </Carousel>
      </Bounce>
    </div>
  );
};
