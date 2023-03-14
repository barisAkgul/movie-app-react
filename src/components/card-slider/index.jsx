import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const CardSlictSlider = ({ header, children }) => {
  const sliderRef = useRef(null);

  const responsiveStyle = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-container">
      <div className="slider-top-items">
        <div className="slider-header">{header}</div>
        <div className="moving-arrow-container">
          <div
            className="moving-arrow"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="rgb(105,112,128)"
                strokeWidth="2"
                points="9 6 15 12 9 18"
                transform="matrix(-1 0 0 1 24 0)"
              ></polyline>
            </svg>
          </div>
          <div
            className="moving-arrow"
            onClick={() => sliderRef.current.slickNext()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="rgb(105,112,128)"
                strokeWidth="2"
                points="9 6 15 12 9 18"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
      <Slider {...responsiveStyle} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
};

export default CardSlictSlider;
