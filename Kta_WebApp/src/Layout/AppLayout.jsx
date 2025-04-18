import ContactNav from "@/Components/ContactNav/ContactNav";
import NavBar from "@/Components/NavBar/NavBar";
import SecondFadeSlider from "@/Components/Slider/SecondFadeSlider";
import FooterSection from "@/Pages/LandingPage/FooterSection/FooterSection";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <ContactNav />
      <NavBar />
      <Outlet />
      <SecondFadeSlider />
      <FooterSection />
    </div>
  );
};

export default AppLayout;
