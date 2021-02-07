import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SoundboardButton } from "../../components/SoundboardButton/SoundboardButton";

describe("SoundboardButton", () => {
  it("renders", () => {
    const { getByTestId, getByText } = render(
      <SoundboardButton anecdote="test button" />
    );

    expect(getByTestId("soundboard-button")).toBeInTheDocument();
    expect(getByText("test button")).toBeInTheDocument();
  });
});
