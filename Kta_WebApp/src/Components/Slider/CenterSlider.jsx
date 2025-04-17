import React, { Component } from "react";
import Slider from "react-slick";

function CenterSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div >
                    <img src="./src/Assets/AboutPage/MaterialThree.png" alt="" />
                </div>
                <div>
                    <img src="./src/Assets/AboutPage/MaterialTwo.png" alt="" />
                </div>
                <div>
                    <img src="../src/Assets/AboutPage/MaterialThree.png" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default CenterSlider;
