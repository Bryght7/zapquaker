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
    nbQuakes: 2,
    nbZaps: 8,
    useGA: false,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay
        zapLevel={5}
        quakeLevel={4}
        zapQuake={zapQuake}
        spellCapacity={11}
        gaLevel={11}
        useGA={false}
      />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(2);
});

it("should display 1/2 spell if one has 0 quantity", () => {
  let zapQuake: ZapQuake = {
    nbQuakes: 0,
    nbZaps: 8,
    useGA: false,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay
        zapLevel={5}
        quakeLevel={4}
        zapQuake={zapQuake}
        spellCapacity={11}
        gaLevel={11}
        useGA={false}
      />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(1);
});

it("should display no spell if none has quantity", () => {
  let zapQuake: ZapQuake = {
    nbQuakes: 0,
    nbZaps: 0,
    useGA: false,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay
        zapLevel={5}
        quakeLevel={4}
        zapQuake={zapQuake}
        spellCapacity={11}
        gaLevel={11}
        useGA={false}
      />,
      container
    );
  });
  const displayedSpells = container.querySelectorAll(".spell-quantity");
  expect(displayedSpells?.length).toBe(0);
});

it("should display correct spell capacity usage", () => {
  let zapQuake: ZapQuake = {
    nbQuakes: 2,
    nbZaps: 3,
    useGA: false,
  };

  act(() => {
    ReactDOM.render(
      <ZapQuakeDisplay
        zapLevel={5}
        quakeLevel={4}
        zapQuake={zapQuake}
        spellCapacity={11}
        gaLevel={11}
        useGA={false}
      />,
      container
    );
  });
  const span = container.querySelector(".spell-capacity-usage");
  expect(span?.textContent).toBe("(5/11)");
});
