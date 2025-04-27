import React, { Component } from "react";
import Slider from "react-slick";
import materialThreeImg from "@/Assets/AboutPage/MaterialThree.png";
import materialTwoImg from "@/Assets/AboutPage/MaterialTwo.png";

function CenterSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={materialThreeImg} alt="" />
        </div>
        <div>
          <img src={materialTwoImg} alt="" />
        </div>
        <div>
          <img src={materialThreeImg} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterSlider;
