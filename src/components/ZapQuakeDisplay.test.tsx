import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { ZapQuake } from "../gameData";
import { ZapQuakeDisplay } from "./ZapQuakeDisplay";

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

it("should display spells", () => {
  let zapQuake: ZapQuake = {
    nbQuake: 2,
    nbZap: 8,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay zapLevel={5} quakeLevel={4} zapQuake={zapQuake} />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(2);
});

it("should display 1/2 spell if one has 0 quantity", () => {
  let zapQuake: ZapQuake = {
    nbQuake: 0,
    nbZap: 8,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay zapLevel={5} quakeLevel={4} zapQuake={zapQuake} />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(1);
});

it("should display no spell if none has quantity", () => {
  let zapQuake: ZapQuake = {
    nbQuake: 0,
    nbZap: 0,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay zapLevel={5} quakeLevel={4} zapQuake={zapQuake} />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(0);
});
