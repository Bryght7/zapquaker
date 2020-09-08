import React from "react";

type Props = {
  value: number;
};

export function SpellQuantity(props: Props) {
  return (
    <p className="spell-quantity font-bold text-white text-center">
      x{props.value}
    </p>
  );
}
