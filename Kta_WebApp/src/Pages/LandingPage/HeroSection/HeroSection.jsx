import GradientButton from "@/Components/GradientButton/GradientButton";
import React from "react";

const HeroSection = () => {
  return (
    <div className="LandingPage">
      <div className="LandingLines">
        <p className="LandingLineHeadding">
          Innovative Solutions in
          <p>Ceramics, Stone & Surface Care</p>
        </p>
        <p className="LandingLineSubHeadding">
          High-quality materials and expert solutions for durability,
          aesthetics, and protection.
          <br />
          Trusted by professionals worldwide.
        </p>
      </div>
      <GradientButton text={"Explore Our Products"} />

      <div className="landingEnding">
        <div className="redGradient"></div>
        <img
          src="public/KTABanner.png"
          className="landingBanner"
          width={"45%"}
          alt=""
        />
        <div className="bannerPodium"></div>
      </div>
    </div>
  );
};

export default HeroSection;
