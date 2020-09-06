import React from "react";
import ReactDOM from "react-dom";
import { SpellLevel } from "./SpellLevel";
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

it("displays correct level", () => {
  act(() => {
    ReactDOM.render(<SpellLevel level={5} maxLevel={6}/>, container);
  });
  const a = container.querySelector(".level-container");
  expect(a?.textContent).toBe("5");
});

it("displays dark background if max level not reached", () => {
  act(() => {
    ReactDOM.render(<SpellLevel level={5} maxLevel={6}/>, container);
  });
  const a = container.querySelector(".level-container");
  expect(a?.classList).toContain('bg-gray-700');
});

it("displays special background if max level", () => {
  act(() => {
    ReactDOM.render(<SpellLevel level={6} maxLevel={6}/>, container);
  });
  const a = container.querySelector(".level-container");
  expect(a?.classList).toContain('bg-yellow-500');
});