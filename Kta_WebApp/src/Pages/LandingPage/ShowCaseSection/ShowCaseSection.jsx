import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import styles from "./ShowCaseSection.module.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
import Slider from "react-slick";
import './ShowCaseSectionSlider.css'

const ShowCaseSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };



  return (
    <div id="show" className={styles.ShowCaseContainer}>
      <div className={styles.Headings}>
        <HeadingComp heading={"SHOWCASE"} subHeading={"Our Products"} />
        <div className={styles.SubHeading}>
          Discover our range of industry-leading products.
        </div>
      </div>
    

      <div className="slider-container">
        <Slider {...settings}>
          {ProductList.map((productItem, index) => (
            <ProductCard data={productItem} />
          ))}

        </Slider>
      </div>
       <div className={styles.fitButton}>
      <GradientButton  text={"View All Products"} />
        </div>   
    </div>
  );
};

export default ShowCaseSection;

