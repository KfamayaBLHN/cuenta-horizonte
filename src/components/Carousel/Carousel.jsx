import { useEffect, useState } from "react";
import CarouselComponent from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";

let counter = -1;

const Carousel = (props) => {
  counter++;
  cargarCarousel(counter);

  function cargarCarousel(contador) {
    setTimeout(() => {
      if (!document.querySelector(".react-multiple-carousel__arrow--right"))
        return;

      const rightArrows = document.querySelectorAll(
        ".react-multiple-carousel__arrow--right"
      );
      const leftArrows = document.querySelectorAll(
        ".react-multiple-carousel__arrow--left"
      );
      const reactMultiCarouselDotLists = document.querySelectorAll(
        ".react-multi-carousel-dot-list"
      );

      Object.values(reactMultiCarouselDotLists).forEach((element, i) => {
        if (Object.values(leftArrows)[i]) {
          Object.values(leftArrows)[i].classList.add(
            styles["react-multiple-carousel__arrow"],
            styles["react-multiple-carousel__arrow--left"]
          );

          element.insertAdjacentElement(
            "beforebegin",
            Object.values(leftArrows)[i]
          );

          Object.values(rightArrows)[i].classList.add(
            styles["react-multiple-carousel__arrow"],
            styles["react-multiple-carousel__arrow--right"]
          );

          element.insertAdjacentElement(
            "afterend",
            Object.values(rightArrows)[i]
          );
        }
      });

      if (!props.isDesktopCarousel) return;

      const customDotListStyle = document.querySelectorAll(
        `.${styles["custom-dot-list-style"]}`
      );

      // Object.values(customDotListStyle).forEach((element, i) => {
      if (!Object.values(leftArrows)[contador]) return;

      Object.values(customDotListStyle)[contador].classList.add(
        styles["desktopDotList"]
      );

      Object.values(leftArrows)[contador].classList.add(
        styles["desktopLeftArrow"]
      );

      Object.values(rightArrows)[contador].classList.add(
        styles["desktopRightArrow"]
      );
      // });
    }, 100);
  }

  return (
    <>
      <CarouselComponent
        swipeable={true}
        draggable={false}
        infinite={true}
        showDots={true}
        arrows={props.hasArrows}
        autoPlay={props.autoPlay}
        autoPlaySpeed={3000}
        customTransition="transform 1000ms"
        transitionDuration={1200}
        renderDotsOutside={true}
        containerClass={styles["carousel-container"]}
        dotListClass={styles["custom-dot-list-style"]}
        itemClass={styles["carousel-item"]}
        responsive={props.responsive}
      >
        {props.children}
      </CarouselComponent>
    </>
  );
};

export default Carousel;
