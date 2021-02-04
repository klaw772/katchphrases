import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SoundboardButtonsContainer } from "../../components/SoundboardButtonsContainer/SoundboardButtonsContainer";

describe("SoundboardButtonsContainer", () => {
  it("renders", () => {
    const { getByText } = render(<SoundboardButtonsContainer />);
    expect(
      getByText("placeholder container to hold soundboard buttons")
    ).toBeInTheDocument();
  });
});
