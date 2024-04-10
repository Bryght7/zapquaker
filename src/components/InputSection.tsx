import React from "react";
import { DATA_SPELLS } from "../gameData";
import { LevelRange } from "./LevelRange";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  arrowLevel: number;
  setZapLevel: (value: React.SetStateAction<number>) => void;
  setQuakeLevel: (value: React.SetStateAction<number>) => void;
  setArrowLevel: (value: React.SetStateAction<number>) => void;

};

export function InputSection(props: Props) {
  return (
    <div className="flex px-6 pt-4 space-x-2 bg-white border-b mt-14 sm:mt-16 justify-evenly lg:px-24 dark:border-gray-500 dark:bg-gray-800">
      <div className="mb-4 text-center">
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
      
      <div className="mb-4 text-center">
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
      
      {props.arrowLevel !== 0 && (
        <div className="mb-4 text-center">
          <SpellDisplay
            name="giantarrow"
            level={props.arrowLevel}
            maxLevel={DATA_SPELLS[2].damage.length}
          />
          <LevelRange
            value={props.arrowLevel}
            max={DATA_SPELLS[2].damage.length}
            onChange={(value) => props.setArrowLevel(value)}
          />
        </div>
      )}
    </div>
  );
}
