import React from "react";
import styles from "./TopBanner.module.scss";
function TopBanner({ head, highlight, details }) {
  return (
    <div id={styles.TopBanner}>
      <div className={styles.TopBannerHead}>
        <img src={head} alt="" />
      </div>
      <div className={styles.TopBannerDetails}>
        <div className={styles.TopBannerHighlight}>{highlight} </div>
        {details}
      </div>
    </div>
  );
}

export default TopBanner;
