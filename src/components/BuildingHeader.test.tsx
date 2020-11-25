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

let archerQueen: Building = {
  id: "62",
  name: "Archer Queen",
  hp: [100, 200, 300, 400, 500],
};

let royalChampion: Building = {
  id: "122",
  name: "Royal Champion",
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

it("should ignore level in src value if building is archer queen", () => {
  act(() => {
    render(
      <BuildingHeader building={archerQueen} level={archerQueen.hp.length} />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/62\.png/);
});

it("should ignore level in src value if building is royal champion", () => {
  act(() => {
    render(
      <BuildingHeader
        building={royalChampion}
        level={royalChampion.hp.length}
      />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/122\.png/);
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

it("should display correct building name", () => {
  act(() => {
    render(
      <BuildingHeader building={building} level={building.hp.length} />,
      container
    );
  });
  const span = container.querySelectorAll("span")[0];
  expect(span?.textContent).toBe("Test building");
});

it("should display correct building level", () => {
  act(() => {
    render(
      <BuildingHeader building={building} level={building.hp.length} />,
      container
    );
  });
  const span = container.querySelectorAll("span")[1];
  expect(span?.textContent).toContain("(level 5)");
});
