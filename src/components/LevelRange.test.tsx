import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { LevelRange } from './LevelRange';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it("should have correct default min value", () => {
  act(() => {
    render(
      <LevelRange value={1} max={9} onChange={(value) => {}} />,
      container
    );
  });
  const a = container.querySelector("input[type='range']");
  expect(a?.getAttribute("min")).toBe("1");
});

it('should have correct max value', () => {
  act(() => {
    render(
      <LevelRange value={1} max={9} onChange={(value) => {}} />,
      container
    );
  });
  const a = container.querySelector("input[type='range']");
  expect(a?.getAttribute('max')).toBe('9');
});

it('should have correct current value', () => {
  act(() => {
    render(
      <LevelRange value={1} max={9} onChange={(value) => {}} />,
      container
    );
  });
  const a = container.querySelector("input[type='range']");
  expect(a?.getAttribute('value')).toBe('1');
});

it('should handle change event', () => {
  const onChangeMock = jest.fn();
  act(() => {
    render(<LevelRange value={1} max={9} onChange={onChangeMock} />, container);
  });
  const input = container.querySelector("input[type='range']");
  expect(input).toBeTruthy();
  if (input) {
    fireEvent.change(input, { target: { value: 5 } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  }
});
