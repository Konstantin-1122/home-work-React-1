import React from "react";
import PropTypes from "prop-types";
import starFilled from "../img//RatingStar/rating.svg";
import starEmpty from "../img//RatingStar/raiting_2.svg";

function Raiteng({ stars }) {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < stars ? starFilled : starEmpty}
          alt="star"
          style={{ width: "32px", height: "32px" }}
        />
      ))}
    </div>
  );
}

Raiteng.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Raiteng;
