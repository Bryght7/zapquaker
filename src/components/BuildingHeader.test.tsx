import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Building } from "../gameData";
import { BuildingHeader } from "./BuildingHeader";

let container: HTMLDivElement;

let building: Building = {
  id: "1",
  name: "Test building",
  hp: [100, 200, 300, 400, 500],
};

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it("should have correct src value", () => {
  act(() => {
    render(
      <BuildingHeader building={building} level={building.hp.length} />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/1_5\.png/);
});

it("should have correct alt value", () => {
  act(() => {
    render(
      <BuildingHeader building={building} level={building.hp.length} />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.alt).toBe("Test building");
});

it("should display correct text", () => {
  act(() => {
    render(
      <BuildingHeader building={building} level={building.hp.length} />,
      container
    );
  });
  const span = container.querySelector("span");
  expect(span?.textContent).toBe("Test building (level 5)");
});
