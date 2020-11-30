import React from "react";
import { DATA_BUILDINGS } from "../gameData";
import { BuildingCard } from "./BuildingCard";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  filterText: string;
};

export function ResultsSection(props: Props) {
  return (
    <div className="p-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-200 dark:bg-gray-600">
      {DATA_BUILDINGS.filter((building) =>
        building.name.toLowerCase().includes(props.filterText.toLowerCase())
      )
        .sort((b1, b2) => (b1.name > b2.name ? 1 : -1))
        .map((building) => (
          <BuildingCard
            key={building.id}
            quakeLevel={props.quakeLevel}
            zapLevel={props.zapLevel}
            spellCapacity={11}
            building={building}
          />
        ))}
    </div>
  );
}
