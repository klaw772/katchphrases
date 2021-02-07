import React from "react";
import { SoundboardButton } from "../SoundboardButton/SoundboardButton";
import buttonsData from "./buttons.json";
import "./SoundboardButtonsContainer.css";

export const SoundboardButtonsContainer = () => {
  const buttons = buttonsData.buttons.map((button) => {
    return (
      <SoundboardButton
        key={button.katchphrase}
        anecdote={button.katchphrase}
      />
    );
  });
  return (
    <div
      data-testid="soundboard-buttons-container"
      className="soundboard-buttons-container"
    >
      {buttons}
    </div>
  );
};
