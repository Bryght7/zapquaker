import React from "react";
import { DATA_SPELLS } from "../gameData";
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
          name="lightning"
          level={props.zapLevel}
          maxLevel={DATA_SPELLS[1].damage.length}
        />
        <LevelRange
          value={props.zapLevel}
          max={9}
          onChange={(value) => props.setZapLevel(value)}
        />
      </div>
      <div className="text-center bg-red-300">
        <SpellDisplay
          name="quake"
          level={props.quakeLevel}
          maxLevel={DATA_SPELLS[0].damage.length}
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
