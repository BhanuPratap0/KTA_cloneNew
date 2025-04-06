import React from "react";
import styles from "./GradientButton.module.scss";
const GradientButton = ({ text }) => {
  return (
    <div className={styles.GradientButton}>
      <p>{text}</p>
    </div>
  );
};

export default GradientButton;
