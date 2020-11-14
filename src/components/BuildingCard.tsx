import React, { useState } from "react";
import { Building, ZapQuake } from "../gameData";
import { BuildingHeader } from "./BuildingHeader";
import { LevelRange } from "./LevelRange";
import { ZapQuakeDisplay } from "./ZapQuakeDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  building: Building;
};

export function BuildingCard(props: Props) {
  const [buildingLevel, setBuildingLevel] = useState(props.building.hp.length);

  const zapQuakes: ZapQuake[] = [
    { nbZap: 7, nbQuake: 1 },
    { nbZap: 6, nbQuake: 2 },
    { nbZap: 8, nbQuake: 0 },
  ];

  return (
    <div className="bg-blue-200 p-3">
      <BuildingHeader building={props.building} level={buildingLevel} />
      <LevelRange
        value={buildingLevel}
        max={props.building.hp.length}
        onChange={(value) => setBuildingLevel(value)}
      />
      {zapQuakes.map((z, i) => (
        <ZapQuakeDisplay
          key={i}
          zapLevel={props.zapLevel}
          quakeLevel={props.quakeLevel}
          zapQuake={z}
        />
      ))}
    </div>
  );
}
