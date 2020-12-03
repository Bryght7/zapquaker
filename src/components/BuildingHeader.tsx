import React from 'react';
import { Building } from '../gameData';

type Props = {
  building: Building;
  level: number;
};

export function BuildingHeader(props: Props) {
  return (
    <div className="flex items-center">
      <img
        className="h-12 mr-3"
        src={
          // ignore level if archer queen, warden statue or royal champion
          props.building.id === '62' ||
          props.building.id === '63' ||
          props.building.id === '122'
            ? `/img/${props.building.id}.png`
            : `/img/${props.building.id}_${props.level}.png`
        }
        alt={`${props.building.name}`}
        draggable="false"
      />
      <div className="flex-column">
        <span className="font-bold text-blue-700 dark:text-blue-300">
          {props.building.name}
        </span>
        <span className="font-bold text-gray-800 dark:text-gray-100">
          &nbsp;(level {props.level})
        </span>
        <p className="text-gray-800 dark:text-gray-100">
          ❤ {props.building.hp[props.level - 1]}
        </p>
      </div>
    </div>
  );
}
