import React from "react";
import styles from "./TestiCards.module.scss";

const TestiCards = ({ data }) => {
  return (
    <div className={styles.TestiCard}>
      <img className={styles.QuotationPic} src="./quotation.svg" alt="" />

      <div className={styles.CardDiv}>
        <div className={styles.FirstSection}>
          <img className={styles.Stars} src="./stars.svg" alt="" />
          <p className={styles.Comment}>{data.comment}</p>
        </div>
        <div className={styles.TestiInfo}>
          <img src={data.ProfilePic} alt="Testimonial Profile Picture" />
          <div className={styles.TestiName}>
            <p>{data.name}</p>
            <p>{data.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiCards;
