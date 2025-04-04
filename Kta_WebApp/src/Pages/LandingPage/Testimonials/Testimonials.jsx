/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import HeadingComp from "../../../Components/HeadingComp/HeadingComp";
import "./Testimonials.scss";
import TestiCards from "../../../Components/TestiCards/TestiCards";
import { testimonialData } from "@/Data/LandingPage";

const Testimonials = () => {
  const testiCardsRef = useRef(null); // Reference for the testiCards div
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Start with the ability to scroll right

  // Function to check if we can scroll further left or right
  const checkScrollButtons = () => {
    if (testiCardsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = testiCardsRef.current;
      setCanScrollLeft(scrollLeft > 0); // Disable left button when at the start
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth); // Disable right button when at the end
    }
  };

  const scrollLeft = () => {
    if (testiCardsRef.current) {
      testiCardsRef.current.scrollBy({
        left: -500, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 100);
    } // Check after a small delay    }
  };

  const scrollRight = () => {
    if (testiCardsRef.current) {
      testiCardsRef.current.scrollBy({
        left: 500, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 100); // Re-check the button state after scrolling
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <div className="testimonials">
      <div className="headingSection">
        <HeadingComp
          subHeading={"Testimonials"}
          heading={"What Our Happy User Says"}
        />
      </div>
      <div className="testiCardsWrapper">
        <button className="scrollButton left" onClick={scrollLeft}>
          {canScrollLeft && <img src="./left-arrow.svg" alt="" />}
        </button>
        <div className="testiCards" ref={testiCardsRef}>
          {testimonialData.map((item, index) => (
            <TestiCards key={index} data={item} />
          ))}
        </div>
        <button className="scrollButton right" onClick={scrollRight}>
          {canScrollRight && <img src="./right-arrow.svg" alt="" />}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
