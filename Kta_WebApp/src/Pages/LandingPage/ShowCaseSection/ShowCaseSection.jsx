import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import "./ShowCaseSection.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
const ShowCaseSection = () => {
  return (
    <div className="showCaseContainer">
      <div className="headings">
        <HeadingComp heading={"SHOWCASE"} subHeading={"Our Products"} />
        <div className="subHeading">
          Discover our range of industry-leading products.
        </div>
      </div>
      <div className="productsContainer">
        {ProductList.map((productItem, index) => (
          <ProductCard data={productItem} />
        ))}
      </div>
      <GradientButton text={"View All Products"} />
    </div>
  );
};

export default ShowCaseSection;
