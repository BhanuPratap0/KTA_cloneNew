import React from "react";
import "./GradientButton.scss";
const GradientButton = ({text}) => {
  return (
    <div className="GradientButton">
      <p>{text}</p>
    </div>
  );
};

export default GradientButton;
