import React from "react";
import "./TechCards.css";

const TechCards = ({ Tech, size }) => {
  return (
    <div className="tech-card-container">
      <Tech size={size}></Tech>
    </div>
  );
};

export default TechCards;
