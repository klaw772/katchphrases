import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SoundboardContainer } from "../../components/SoundboardContainer/SoundboardContainer";

describe("SoundboardContainer", () => {
  it("renders", () => {
    const { getByText } = render(<SoundboardContainer />);
    expect(getByText("Welcome to Katchphrases!")).toBeInTheDocument();
  });
});
