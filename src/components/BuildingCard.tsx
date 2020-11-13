import React from "react";
import { Building, DATA_SPELLS } from "../gameData";
import { BuildingHeader } from "./BuildingHeader";
import { LevelRange } from "./LevelRange";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  building: Building;
};

type ZapQuake = {
  zap: number;
  quake: number;
};

export function BuildingCard(props: Props) {
  const zapQuakes: ZapQuake[] = [
    { zap: 7, quake: 1 },
    { zap: 6, quake: 2 },
    { zap: 8, quake: 0 },
  ];

  const zapQuakesRender = zapQuakes.map((z, i) => {
    let zapRender, quakeRender;
    if (z.zap !== 0) {
      zapRender = (
        <SpellDisplay
          name="lightning"
          maxLevel={DATA_SPELLS[1].damage.length}
          level={props.zapLevel}
          quantity={z.zap}
          size="sm"
        />
      );
    }
    if (z.quake !== 0) {
      quakeRender = (
        <SpellDisplay
          name="quake"
          maxLevel={DATA_SPELLS[0].damage.length}
          level={props.quakeLevel}
          quantity={z.quake}
          size="sm"
        />
      );
    }
    return (
      <div className="mb-1" key={i}>
        {zapRender} {quakeRender}
      </div>
    );
  });

  return (
    <div className="bg-blue-200 p-3">
      <BuildingHeader
        building={props.building}
        level={props.building.hp.length}
      />
      <LevelRange
        value={props.building.hp.length}
        max={props.building.hp.length}
        onChange={(value) => {
          console.log("changed value " + value);
        }}
      />
      {zapQuakesRender}
    </div>
  );
}
