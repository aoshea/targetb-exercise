import * as React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import { GET_MESSAGE } from "../queries";

import { TextInputContainer } from "./TextInputContainer";

const mocks = [
  {
    request: {
      query: GET_MESSAGE,
    },
    result: {
      data: {
        message: { id: 0, text: "test" },
      },
    },
  },
];

describe("<TextInputContainer />", () => {
  test("should render a text input", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TextInputContainer />
      </MockedProvider>
    );
    const element = await screen.findByTestId("loading");
    expect(element).toBeInTheDocument();
  });
});
