import React from "react";
import { fireEvent } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import pretty from "pretty";
import Button from "./Button";

let container = null;
beforeEach(() => {
  // setup
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Button Tests", () => {
  test("Snapshot Test", () => {
    act(() => {
      render(<Button />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<button class=\\"sc-AxjAm bUUZuQ\\">Get Verse</button>"`
    );
  });

  test("Receives Props", () => {
    const props = {
      fetch: jest.fn(),
    };

    act(() => {
      render(<Button {...props} />, container);
    });

    const button = document.querySelector("button");
    fireEvent.click(button);
    expect(props.fetch).toHaveBeenCalled();
  });
});
