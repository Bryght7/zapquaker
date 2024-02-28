import React from "react";
import { DATA_SPELLS } from "../gameData";
import { LevelRange } from "./LevelRange";
import { SpellDisplay } from "./SpellDisplay";
import { ToggleSwitch } from "./ToggleSwitch";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  gaLevel: number;
  useGA: boolean;
  setZapLevel: (value: React.SetStateAction<number>) => void;
  setQuakeLevel: (value: React.SetStateAction<number>) => void;
  setGALevel: (value: React.SetStateAction<number>) => void;
  setGAUse: (value: React.SetStateAction<boolean>) => void;
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
      <div className="mb-4 text-center">
      <div style={!props.useGA ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <SpellDisplay
          name="giant_arrow"
          level={props.gaLevel}
          maxLevel={DATA_SPELLS[2].damage.length}
        />
        <LevelRange
          value={props.gaLevel}
          max={DATA_SPELLS[2].damage.length}
          onChange={(value) => props.setGALevel(value)}
        />
      </div>
      </div>
      <div className="mb-4 text-center justify-center">
        <ToggleSwitch
          checked={props.useGA}
          onChange={() => props.setGAUse(!props.useGA)}
        />
        <div className="font-bold flex text-gray-800 dark:text-gray-100">Use Giant Arrow</div>
    
      </div>
    </div>
  );
}


