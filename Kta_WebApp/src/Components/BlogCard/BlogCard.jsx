import React from "react";
import styles from "./BlogCard.module.scss";
const BlogCard = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Img}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.Content}>
        <div className={styles.Title}>{data.title}</div>
        <button className={styles.Button}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
