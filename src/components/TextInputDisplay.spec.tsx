import * as React from "react";

import { render } from "@testing-library/react";

import { TextInputDisplay } from "./TextInputDisplay";

describe("<TextInputDisplay />", () => {
  test("should sort on click table header button", () => {
    const { getByText } = render(<TextInputDisplay messageText="Hello" />);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
