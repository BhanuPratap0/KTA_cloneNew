import React from "react";
import "./ProductCard.scss";
const ProductCard = ({ data }) => {
  return (
    <div className="productContainer">
      <img src={data.img} alt="ProductImg" className="productImg" />
      <div className="title">{data.title}</div>
      <div className="description">{data.description}</div>
    </div>
  );
};

export default ProductCard;
