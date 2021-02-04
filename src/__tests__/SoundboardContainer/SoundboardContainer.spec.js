import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SoundboardContainer } from "../../components/SoundboardContainer/SoundboardContainer";

describe("SoundboardContainer", () => {
  it("renders", () => {
    const { getByTestId } = render(<SoundboardContainer />);
    expect(getByTestId("soundboard-container")).toBeInTheDocument();
  });
});
