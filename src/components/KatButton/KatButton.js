import React from "react";
import kat from "../../assets/kat.png";
import "./KatButton.css";

export const KatButton = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="kat-button-container">
      <h1>Random Katchphrase!</h1>
      <img
        src={kat}
        className="kat-button"
        onClick={handleClick}
        alt="kat"
        data-testid="kat-button"
      />
    </div>
  );
};
