import React from "react";
import kat from "../../assets/kat.png";
import "./KatButton.css";

export const KatButton = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="kat-button-container">
      <img src={kat} className="kat-button" onClick={handleClick} alt="kat" />
    </div>
  );
};
