import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="container">
      <img src={data.img} alt="ProductImg" className="productImg" />
      <div className="title">{data.title}</div>
      <div className="description">{data.description}</div>
    </div>
  );
};

export default ProductCard;
