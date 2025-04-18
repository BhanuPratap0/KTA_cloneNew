import ContactNav from "@/Components/ContactNav/ContactNav";
import NavBar from "@/Components/NavBar/NavBar";
import React from "react";
import styles from "./AboutPage.module.scss";
import CenterSlider from "@/Components/Slider/CenterSlider";
import SecondFadeSlider from "@/Components/Slider/SecondFadeSlider";
import FooterSection from "../LandingPage/FooterSection/FooterSection";
import { fixingSolutionCardsData } from "@/Data/AboutPage";

function AboutPage() {
  return (
    <div>
      <div id={styles.HeroBanner}>
        <img src="./src/Assets/AboutPage/heroBanner.png" alt="" />
      </div>

      <div id={styles.OurStorySection} className={styles.Container}>
        <div>
          <p className={styles.OurStoryHeading}>Our Story</p>
          <p className={styles.OurStoryDesc}>
            At KTA Solutions, we provide high-performance adhesives, grouts, and
            tools for seamless tile installation. Designed for professionals and
            homeowners, our durable, easy-to-use products ensure flawless
            results with reliability and efficiency.
          </p>
        </div>
        <div>
          <img src="./src/Assets/AboutPage/ourStoryProp.png" alt="" />
        </div>
      </div>

      <div id={styles.Mission}>
        <div className={styles.MissionBlock}>
          <div className={styles.MissionHeading}>
            <img src="./src/Assets/AboutPage/missionSVG.svg" alt="" />
            <p>Mission</p>
          </div>
          <p className={styles.MissionDesc}>
            To provide premium, sustainable, and innovative solutions in
            ceramics, stone care, and surface protection that enhance
            durability, aesthetics, and functionality.
          </p>
        </div>

        <div className={styles.MissionBlock}>
          <div className={styles.MissionHeading}>
            <img src="./src/Assets/AboutPage/visionSVG.svg" alt="" />
            <p>Vision</p>
          </div>
          <p className={styles.MissionDesc}>
            To be a global leader in advanced material solutions, setting
            industry benchmarks for quality, sustainability, and customer
            satisfaction.
          </p>
        </div>
      </div>

      <div id={styles.FixingSolution} className={styles.Container}>
        <p className={styles.FixingSolHeading}>
          A Complete<span> Fixing</span> Solution.
        </p>
        <div className={styles.FixingSolCards}>
          {fixingSolutionCardsData.map((card, index) => (
            <div className={styles.FixingSolCard} key={index}>
              <img src={card.img} alt="Solution card Icon" />
              <p className={styles.FixingSolCardHeading}>{card.title}</p>
              <p className={styles.FixingSolCardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id={styles.Movement} className={styles.Container}>
        <div className={styles.MovementHeader}>
          <p className={styles.MovementTopHeading}>HEY!</p>
          <p className={styles.MovementHeading}>Join the Movement</p>
          <p className={styles.MovementDesc}>
            Surfaces are more than just materials—they tell a story. Let’s make
            yours one of resilience, beauty, and innovation.
          </p>
        </div>

        <CenterSlider />

        <div className={styles.ButtonContainer}>
          <div className={styles.OutlineButton}>Explore our World</div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
