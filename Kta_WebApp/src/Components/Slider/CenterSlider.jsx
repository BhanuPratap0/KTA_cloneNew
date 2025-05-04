import React, { Component } from "react";
import Slider from "react-slick";
import materialThreeImg from "@/Assets/AboutPage/MaterialThree.png";
import materialTwoImg from "@/Assets/AboutPage/MaterialTwo.png";
import materialOneImg from "@/Assets/AboutPage/materialOne.png";
import './CenterSlider.css';
function CenterSlider() {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 9000,


    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //       autoplay: true,
    //       autoplaySpeed: 9000,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: window.innerWidth > 427 ? "15%" : "13%",
    //       slidesToShow: 1,
    //       autoplay: true,
    //       autoplaySpeed: 9000,
    //     },
    //   },
    // ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={materialOneImg} alt="" />
        </div>
        <div>
          <img src={materialOneImg} alt="" />
        </div>
        <div>
          <img src={materialOneImg} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterSlider;
