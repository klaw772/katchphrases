import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SoundboardButtonsContainer } from "../../components/SoundboardButtonsContainer/SoundboardButtonsContainer";

describe("SoundboardButtonsContainer", () => {
  it("renders", () => {
    const { getByTestId } = render(<SoundboardButtonsContainer />);
    expect(getByTestId("soundboard-buttons-container")).toBeInTheDocument();
  });
});
