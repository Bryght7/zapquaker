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
    <div className="flex justify-evenly space-x-2 px-6 lg:px-24 border-b">
      <div className="text-center mb-4">
        <SpellDisplay
          name="lightning"
          level={props.zapLevel}
          maxLevel={DATA_SPELLS[1].damage.length}
        />
        <LevelRange
          value={props.zapLevel}
          max={DATA_SPELLS[1].damage.length}
          onChange={(value) => props.setZapLevel(value)}
        />
      </div>
      <div className="text-center mb-4">
        <SpellDisplay
          name="quake"
          level={props.quakeLevel}
          maxLevel={DATA_SPELLS[0].damage.length}
        />
        <LevelRange
          value={props.quakeLevel}
          max={DATA_SPELLS[0].damage.length}
          onChange={(value) => props.setQuakeLevel(value)}
        />
      </div>
    </div>
  );
}
