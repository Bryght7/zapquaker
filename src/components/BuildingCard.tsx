import React, { useState } from "react";
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
  nbZap: number;
  nbQuake: number;
};

export function BuildingCard(props: Props) {
  const [buildingLevel, setBuildingLevel] = useState(props.building.hp.length);

  const zapQuakes: ZapQuake[] = [
    { nbZap: 7, nbQuake: 1 },
    { nbZap: 6, nbQuake: 2 },
    { nbZap: 8, nbQuake: 0 },
  ];

  const zapQuakesRender = zapQuakes.map((zapQuake, i) => (
    <div className="mb-1" key={i}>
      {zapQuake.nbZap !== 0 && (
        <SpellDisplay
          name="lightning"
          maxLevel={DATA_SPELLS[1].damage.length}
          level={props.zapLevel}
          quantity={zapQuake.nbZap}
          size="sm"
        />
      )}
      {zapQuake.nbQuake !== 0 && (
        <SpellDisplay
          name="quake"
          maxLevel={DATA_SPELLS[0].damage.length}
          level={props.quakeLevel}
          quantity={zapQuake.nbQuake}
          size="sm"
        />
      )}
    </div>
  ));

  return (
    <div className="bg-blue-200 p-3">
      <BuildingHeader
        building={props.building}
        level={buildingLevel}
      />
      <LevelRange
        value={buildingLevel}
        max={props.building.hp.length}
        onChange={(value) => setBuildingLevel(value)}
      />
      {zapQuakesRender}
    </div>
  );
}
