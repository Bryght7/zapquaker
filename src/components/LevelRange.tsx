import React from "react";

type Props = {
  value: number;
  max: number;
  onChange: (value: number) => void;
};

export function LevelRange(props: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.valueAsNumber);
  }

  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <input
        type="range"
        min="0"
        max={props.max}
        onChange={handleChange}
        value={props.value}
        className="w-full"
      ></input>
    </div>
  );
}
