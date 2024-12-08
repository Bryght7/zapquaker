import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Building, DATA_BUILDINGS } from "../gameData";
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
  expect(img?.src).toMatch(/.*\/img\/1_5\.webp/);
});

it("should ignore level in src value if building is archer queen", () => {
  act(() => {
    render(
      <BuildingHeader
        building={DATA_BUILDINGS[12]}
        level={DATA_BUILDINGS[12].hp.length}
      />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/62\.webp/);
});

it("should ignore level in src value if building is royal champion", () => {
  act(() => {
    render(
      <BuildingHeader
        building={DATA_BUILDINGS[13]}
        level={DATA_BUILDINGS[13].hp.length}
      />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/122\.webp/);
});

it("should ignore level in src value if building is grand warden", () => {
  act(() => {
    render(
      <BuildingHeader
        building={DATA_BUILDINGS[14]}
        level={DATA_BUILDINGS[14].hp.length}
      />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/63\.webp/);
});

it("should ignore level in src value if building is minion prince", () => {
  act(() => {
    render(
      <BuildingHeader
        building={DATA_BUILDINGS[21]}
        level={DATA_BUILDINGS[21].hp.length}
      />,
      container
    );
  });
  const img = container.querySelector("img");
  expect(img?.src).toMatch(/.*\/img\/140\.webp/);
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
