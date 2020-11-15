import React from "react";
import { DATA_SPELLS } from "../gameData";
import { LevelRange } from "./LevelRange";
import { SpellCapacity } from "./SpellCapacity";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  spellCapacity: number;
  setZapLevel: (value: React.SetStateAction<number>) => void;
  setQuakeLevel: (value: React.SetStateAction<number>) => void;
  setSpellCapacity: (value: React.SetStateAction<number>) => void;
};

export function InputSection(props: Props) {
  return (
    <div className="bg-red-100 flex justify-evenly space-x-2">
      <div className="text-center">
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
      <div className="text-center">
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
      <div className="text-center">
        <SpellCapacity capacity={props.spellCapacity} />
        <LevelRange
          value={props.spellCapacity}
          min={6}
          max={11}
          onChange={(value) => props.setSpellCapacity(value)}
        />
      </div>
    </div>
  );
}
