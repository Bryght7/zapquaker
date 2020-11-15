import React from "react";
import { DATA_BUILDINGS } from "../gameData";
import { BuildingCard } from "./BuildingCard";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  spellCapacity: number;
};

export function ResultsSection(props: Props) {
  const buildings: JSX.Element[] = [];
  DATA_BUILDINGS.forEach((building, i) => {
    buildings.push(
      <BuildingCard
        key={i}
        quakeLevel={props.quakeLevel}
        zapLevel={props.zapLevel}
        spellCapacity={props.spellCapacity}
        building={building}
      />
    );
  });

  return (
    <div className="bg-blue-100 mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {buildings}
    </div>
  );
}
