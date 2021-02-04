import React from "react";
import { DisclaimerModal } from "../DisclaimerModal/DisclaimerModal";
import { KatButton } from "../KatButton/KatButton";
import { SoundboardButtonsContainer } from "../SoundboardButtonsContainer/SoundboardButtonsContainer";
export const SoundboardContainer = () => {
  return (
    <div data-testid="soundboard-container">
      <DisclaimerModal />
      <KatButton />
      <SoundboardButtonsContainer />
    </div>
  );
};
