import React from "react";
import { render, fireEvent } from "@testing-library/react";
import wait from "waait";
import "@testing-library/jest-dom";

import { SoundboardContainer } from "../../components/SoundboardContainer/SoundboardContainer";

describe("SoundboardContainer", () => {
  it("renders", () => {
    const { getByTestId } = render(<SoundboardContainer />);
    expect(getByTestId("soundboard-container")).toBeInTheDocument();
  });
  it("closes modal when dismissed", async () => {
    const { getByTestId, getByText, queryByText } = render(
      <SoundboardContainer />
    );
    expect(getByText("Welcome to Katchphrases!")).toBeInTheDocument();
    await fireEvent.click(getByTestId("modal-close-button"));
    await wait(0);
    expect(queryByText("Welcome to Katchphrases!")).not.toBeInTheDocument();
  });
});
