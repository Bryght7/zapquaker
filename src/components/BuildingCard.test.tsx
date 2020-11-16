import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Building } from "../gameData";
import { BuildingCard } from "./BuildingCard";

let container: HTMLDivElement;

let building: Building = {
  id: "1",
  name: "Test building",
  hp: [5000],
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

it("should show message if building cannot be destroyed", () => {
  act(() => {
    render(
      <BuildingCard
        zapLevel={1}
        quakeLevel={1}
        spellCapacity={1}
        building={building}
      />,
      container
    );
  });
  const span = container.querySelector(".no-combination");
  expect(span?.textContent).toBeDefined();
});
