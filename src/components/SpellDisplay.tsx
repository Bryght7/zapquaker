import React from "react";
import { SpellLevel } from "./SpellLevel";
import { SpellQuantity } from "./SpellQuantity";

type Props = {
  name: string;
  level: number;
  maxLevel: number;
  quantity?: number;
  size?: "sm";
};

export function SpellDisplay(props: Props) {
  let spellQuantityComponent;
  if (props.quantity) {
    spellQuantityComponent = (
      <SpellQuantity value={props.quantity} size={props.size} />
    );
  }

  return (
    <div className="relative inline-block border border-blue-700 dark:border-blue-500 rounded-lg bg-blue-500 dark:bg-blue-700">
      {spellQuantityComponent}
      <SpellLevel
        level={props.level}
        maxLevel={props.maxLevel}
        size={props.size}
      />
      <img
        className={`rounded-lg ${props.size === "sm" ? "w-12" : "w-20"}`}
        src={`/img/spell_${props.name}.png`}
        alt={`Icon ${props.name}`}
        draggable="false"
      />
    </div>
  );
}
