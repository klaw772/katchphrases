import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { DisclaimerModal } from "../../components/DisclaimerModal/DisclaimerModal";

describe("DisclaimerModal", () => {
  it("renders", () => {
    const { getByText } = render(<DisclaimerModal />);
    expect(getByText("Welcome to Katchphrases!")).toBeInTheDocument();
  });
});
