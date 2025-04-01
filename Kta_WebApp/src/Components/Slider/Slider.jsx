import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FirstSliderData.js'
function FadeSlider() {
  const settings = {
    fade:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div>
        <img src="./FirstSliderFirstPic.png" width={'100%'} alt="" />        
      </div>
      <div>
        <img src="./FirstSliderFirstPic.png" width={'100%'} alt="" />        
      </div>
      <div>
        <img src="./FirstSliderFirstPic.png" width={'100%'} alt="" />        
      </div>
      <div>
        <img src="./FirstSliderFirstPic.png" width={'100%'} alt="" />        
      </div>
      </Slider>
    </div>
  );
}

export default FadeSlider;
