import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { KatButton } from "../../components/KatButton/KatButton";

describe("KatButton", () => {
  it("renders", () => {
    const { getByText, getByTestId } = render(<KatButton />);
    expect(getByTestId("kat-button")).toBeInTheDocument();
    expect(getByText("Random Katchphrase!")).toBeInTheDocument();
  });
});
