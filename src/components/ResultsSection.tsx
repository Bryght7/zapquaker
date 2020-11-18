import React from "react";
import { DATA_BUILDINGS } from "../gameData";
import { BuildingCard } from "./BuildingCard";

type Props = {
  zapLevel: number;
  quakeLevel: number;
};

export function ResultsSection(props: Props) {
  const buildings: JSX.Element[] = [];
  DATA_BUILDINGS.forEach((building, i) => {
    buildings.push(
      <BuildingCard
        key={i}
        quakeLevel={props.quakeLevel}
        zapLevel={props.zapLevel}
        spellCapacity={11}
        building={building}
      />
    );
  });

  return (
    <div className="p-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-200">
      {buildings}
    </div>
  );
}
