import React from "react";
import ReactDOM from "react-dom";
import { SpellDisplay } from "./SpellDisplay";
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

it("has correct src attribute", () => {
  act(() => {
    ReactDOM.render(<SpellDisplay name="test" maxLevel={9} />, container);
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/test\.png/);
});

it("has correct alt attribute", () => {
  act(() => {
    ReactDOM.render(<SpellDisplay name="test" maxLevel={9} />, container);
  });
  const img = container.querySelector("img");
  expect(img?.alt).toEqual("Icon test");
});

it("displays default level", () => {
    act(() => {
      ReactDOM.render(<SpellDisplay name="test" maxLevel={9} />, container);
    });
    const levelContainer = container.querySelector(".level-container");
    expect(levelContainer?.textContent).toBe("9");
});

it("displays quantity if specified", () => {
  act(() => {
    ReactDOM.render(<SpellDisplay name="test" maxLevel={9} quantity={2}/>, container);
  });
  const spellQuantity = container.querySelector(".spell-quantity");
  expect(spellQuantity?.textContent).toBe("x2");
});

it("does not display quantity if undefined", () => {
  act(() => {
    ReactDOM.render(<SpellDisplay name="test" maxLevel={9}/>, container);
  });
  const spellQuantity = container.querySelector(".spell-quantity");
  expect(spellQuantity).toBeNull();
});