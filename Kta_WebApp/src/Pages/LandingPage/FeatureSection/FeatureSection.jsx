import GradientButton from "@/Components/GradientButton/GradientButton";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import { featureData } from "@/Data/LandingPage";
import "./FeatureSection.scss";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="featureSection">
      <div className="leftSection">
        <div className="headings">
          <p className="heading">Why Choose Us</p>
          <p className="subHeading">Why KTA Solutions?</p>
        </div>
        <p className="text">Here's why :) </p>
        <GradientButton text={"About Us"} />
      </div>
      <div className="rightSection">
        {featureData.map((feature, index) => {
          return (
            <div key={index} className="featureCard">
              <img src={feature.img} alt="" className="icon" />
              <div className="title">{feature.title}</div>
              <div className="description">{feature.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
