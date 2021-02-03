import React from "react";
import { DisclaimerModal } from "../DisclaimerModal/DisclaimerModal";
import { KatButton } from "../KatButton/KatButton";
export const SoundboardContainer = () => {
  return (
    <div data-testid="soundboard-container">
      <DisclaimerModal />
      <KatButton />
    </div>
  );
};
