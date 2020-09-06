import React from "react";
import ReactDOM from "react-dom";
import { SpellQuantity } from "./SpellQuantity";
import { act } from "react-dom/test-utils";

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

it("displays correct value", () => {
  act(() => {
    ReactDOM.render(<SpellQuantity value={5} />, container);
  });
  const qty = container.querySelector(".spell-quantity");
  expect(qty?.textContent).toBe("x5");
});