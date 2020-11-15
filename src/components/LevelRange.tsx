import React from 'react';

type Props = {
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
};

export function LevelRange(props: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.valueAsNumber);
  }

  return (
    <input
      type="range"
      min={props.min ? props.min : 1}
      max={props.max}
      onChange={handleChange}
      value={props.value}
      className="w-full"
    ></input>
  );
}
