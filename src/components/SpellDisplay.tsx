import React from "react";
import { SpellLevel } from "./SpellLevel";
import { SpellQuantity } from "./SpellQuantity";

type Props = {
  name: string;
  level: number;
  maxLevel: number;
  quantity?: number;
};

export function SpellDisplay(props: Props) {
  let spellQuantityComponent;
  if (props.quantity) {
    spellQuantityComponent = <SpellQuantity value={props.quantity} />;
  }

  return (
    <div className="relative inline-block border border-indigo-700 rounded-lg bg-purple-700">
      {spellQuantityComponent}
      <SpellLevel level={props.level} maxLevel={props.maxLevel} />
      <img
        className="w-24 rounded-lg"
        src={`/img/${props.name}.png`}
        alt={`Icon ${props.name}`}
      />
    </div>
  );
}
