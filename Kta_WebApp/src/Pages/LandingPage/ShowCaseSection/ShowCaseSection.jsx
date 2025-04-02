import React from "react";
import { ProductList } from "../../../Data/LandingPage";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./ShowCaseSection.scss";
const ShowCaseSection = () => {
  return (
    <div className="container">
      <div className="headings"></div>

      <div className="productsContainer">
        {ProductList.map((productItem, index) => (
          <ProductCard data={productItem} />
        ))}
      </div>
      <div className="button">
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default ShowCaseSection;
