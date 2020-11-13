import React from "react";

type Props = {
  level: number;
  maxLevel: number;
  size?: "sm";
};

export function SpellLevel(props: Props) {
  function isMaxLevel(): boolean {
    return props.level === props.maxLevel;
  }

  return (
    <div
      className={`level-container shadow-md absolute bottom-0 rounded-md ml-1 mb-1 flex items-center justify-center font-bold border
    ${
      isMaxLevel()
        ? "text-black border-yellow-300 bg-yellow-500"
        : "text-white border-gray-900 bg-gray-700"
    }
    ${
      props.size === "sm" ? "w-4 h-4 text-sm" : "w-6 h-6"
    }`}
    >
      {props.level}
    </div>
  );
}
