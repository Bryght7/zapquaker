import React from "react";

type Props = {
  capacity: number;
};

export function SpellCapacity(props: Props) {
  return (
    <div className="inline-block rounded-lg border-2 border-gray-500 mb-2 pt-2 bg-white w-20 h-20">
      <span className="text-4xl text-gray-900 font-black leading-none">
        {props.capacity}
      </span>
      <p className="text-md text-gray-900 font-bold">SPELLS</p>
    </div>
  );
}
