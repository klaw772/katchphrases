import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const SoundboardButtonsContainer = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>{theme}</p>
      <p>placeholder container to hold soundboard buttons</p>
    </div>
  );
};
