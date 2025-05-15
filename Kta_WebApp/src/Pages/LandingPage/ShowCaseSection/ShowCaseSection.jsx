import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import styles from "./ShowCaseSection.module.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
import Slider from "react-slick";
import "./ShowCaseSectionSlider.css";

const ShowCaseSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div id="show" className={styles.ShowCaseContainer}>
      <div className={styles.Headings}>
        <HeadingComp heading={"Our Products"} subHeading={"showcase"} />
        <div className={styles.SubHeading}>
          Discover our range of industry-leading products.
        </div>

      <div className={styles.ProductsContainerDesktop}>
        <div className="slider-container">
          <Slider {...settings}>
            {ProductList.map((productItem, index) => (
              <ProductCard data={productItem} />
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.ProductsContainerMobile}>
        {ProductList.map((productItem, index) => (
          <ProductCard data={productItem} />
        ))}
      </div>
      <div className={styles.fitButton}>
        <GradientButton text={"View All Products"} />
      </div>
    </div>
    </div>
  );
};

export default ShowCaseSection;
