import React from "react";
import { LevelRange } from "./LevelRange";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  setZapLevel: (value: React.SetStateAction<number>) => void;
  setQuakeLevel: (value: React.SetStateAction<number>) => void;
};

export function InputSection(props: Props) {
  return (
    <div className="bg-red-100 flex justify-evenly">
      <div className="text-center bg-red-300">
        <SpellDisplay
          name="spell_lightning"
          level={props.zapLevel}
          maxLevel={9}
        />
        <LevelRange
          value={props.zapLevel}
          max={9}
          onChange={(value) => props.setZapLevel(value)}
        />
      </div>
      <div className="text-center bg-red-300">
        <SpellDisplay
          name="spell_quake"
          level={props.quakeLevel}
          maxLevel={5}
        />
        <LevelRange
          value={props.quakeLevel}
          max={5}
          onChange={(value) => props.setQuakeLevel(value)}
        />
      </div>
    </div>
  );
}
