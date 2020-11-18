import React from "react";
import { Building } from "../gameData";

type Props = {
  building: Building;
  level: number;
};

export function BuildingHeader(props: Props) {
  return (
    <div className="font-bold flex items-center">
      <img
        className="h-12 mr-3"
        src={`/img/${props.building.id}_${props.level}.png`}
        alt={`${props.building.name}`}
      />
      <span className="text-indigo-600">{props.building.name}</span>
      <span className="text-gray-800">&nbsp;(level {props.level})</span>
    </div>
  );
}
