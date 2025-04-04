import React from "react";
import "./LandingPage.scss";
import ContactNav from "../../Components/ContactNav/ContactNav";
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import FadeSlider from "../../Components/Slider/Slider";
import Container from "react-bootstrap/esm/Container";
import Testimonials from "./Testimonials/Testimonials";
import ShowCaseSection from "./ShowCaseSection/ShowCaseSection";
function LandingPage() {
  return (
    <Container className="container">
      <ContactNav />
      <NavBar />
      <HeroSection />
      <FadeSlider />
      <ShowCaseSection />
      <Testimonials />
    </Container>
  );
}

export default LandingPage;
