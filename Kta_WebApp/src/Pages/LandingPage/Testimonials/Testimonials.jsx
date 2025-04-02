/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import HeadingComp from "../../../Components/HeadingComp/HeadingComp";
import "./Testimonials.scss";
import TestiCards from "../../../Components/TestiCards/TestiCards";

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

  // Scroll left handler
  const scrollLeft = () => {
    if (testiCardsRef.current) {
      testiCardsRef.current.scrollBy({
        left: -500, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 100);
    } // Check after a small delay    }
  };

  // Scroll right handler
  const scrollRight = () => {
    if (testiCardsRef.current) {
      testiCardsRef.current.scrollBy({
        left: 500, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 100); // Re-check the button state after scrolling
    }
  };

  // Check scroll buttons when component mounts and when scrolling
  useEffect(() => {
    checkScrollButtons(); // Initial check on mount
  }, []); // Empty dependency array ensures it runs once

  const dataTest = [
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    },
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    },
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    },
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    },
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    },
    {
      comment:
        "KTA Solutions' ceramic materials transformed our project. Exceptional quality and support!",
      profilePic: "./FirstSliderFirstPic.png",
      name: "Serhiy Hipskyy",
      designation: "CEO Universal",
    }, 
  ];
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
          {dataTest.map((item, index) => (
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
