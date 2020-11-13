import React from "react";
import { Building } from "../gameData";

type Props = {
  building: Building;
  level: number;
};

export function BuildingHeader(props: Props) {
  return (
    <span className="font-bold flex items-center">
      <img
        className="h-12 mr-3"
        src={`/img/${props.building.id}_${props.level}.png`}
        alt={`${props.building.name}`}
      />
      {props.building.name} (level {props.level})
    </span>
  );
}
