import React from "react";

type Props = {
  value: number;
  size?: "sm";
};

export function SpellQuantity(props: Props) {
  return (
    <p
      className={`spell-quantity font-semibold text-white text-center ${
        props.size === "sm" && "text-sm"
      }`}
    >
      x{props.value}
    </p>
  );
}
