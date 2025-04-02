import React from "react";
import "./TestiCards.scss";

const TestiCards = ({ data }) => {
  return (
    <div className="testiCard">
      <img className="quotationPic" src="./quotation.svg" alt="" />

      <div className="cardDiv">
        <div className="firstSection">
          <img className="stars" src="./stars.svg" alt="" />
          <p className="comment">{data.comment}</p>
        </div>
        <div className="testiInfo">
          <img src={data.profilePic} alt="Testimonial Profile Picture" />
          <div className="testiName">
            <p>{data.name}</p>
            <p>{data.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiCards;
