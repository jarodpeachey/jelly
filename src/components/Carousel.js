import React from "react";
import CarouselSlide from "./CarouselSlide";
import "../styles/partials/_carousel.scss";

const Carousel = props => {
  return (
    <>
      <div className="carousel__buttons">
        <button aria-label="Previous Slide" className="carousel__control--prev carousel__control">
          <img src="/media/img/icons/icon--chevron-left.svg" alt=""/>
        </button>
        <div className="carousel__indicator">Dark</div>
        <button aria-label="Next Slide" className="carousel__control--next carousel__control">
          <img src="/media/img/icons/icon--chevron-right.svg" alt=""/>
        </button>
      </div>
      {/* <a className="btn carousel__link" href={props.link} target="_blank" rel="noopener noreferrer">View Site</a> */}
      <div className="carousel">
        <div className="carousel__mask" id="carousel__mask">
          <div className="carousel__track" id="carousel__track">
            {props.slides.map((slide, index) => {
              return <CarouselSlide className={index === 3 ? "middle" : index === 2 || index === "4" ? "edge" : ""} image={slide.image} name={slide.name} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;