import React, { useEffect, useState } from "react";
import { Building, DATA_SPELLS, ZapQuake } from "../gameData";
import { BuildingHeader } from "./BuildingHeader";
import { LevelRange } from "./LevelRange";
import { ZapQuakeDisplay } from "./ZapQuakeDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  spellCapacity: number;
  building: Building;
};

function getZapQuakes(props: Props, buildingLevel: number): ZapQuake[] {
  const result: ZapQuake[] = [];
  const hp = props.building.hp[buildingLevel - 1];
  const damageZap = DATA_SPELLS[1].damage[props.zapLevel - 1];
  const damageQuake = DATA_SPELLS[0].damage[props.quakeLevel - 1]; // to be divided by 100
  let nbSpells = 0;
  let hpLeft = hp;

  // if building is a hero, can't be damaged by quakes
  // directly return nb of zaps if <= spell capacity
  if (props.building.id === "62" || props.building.id === "122") {
    const nbZaps = Math.ceil(hp / damageZap);
    return nbZaps <= props.spellCapacity
      ? [{ nbQuakes: 0, nbZaps: nbZaps }]
      : [];
  }

  for (let q = 0; nbSpells < props.spellCapacity && hpLeft > 0; q++) {
    for (let z = 1; nbSpells < props.spellCapacity && hpLeft > 0; z++) {
      let damage = z * damageZap; // by default zap damage
      if (q > 0) {
        let quakesMultiplier = 1; // successive quakes multiplier
        if (q > 1) {
          let denominator = 3;
          for (let i = 0; i < q - 1; i++) {
            // q=2: 1+1/3, q=3: 1+1/3+1/5, q=4: 1+1/3+1/5+1/7 ...
            quakesMultiplier += 1 / denominator;
            denominator += 2;
          }
        }
        // add quake damage
        damage += ((hp * damageQuake) / 100) * quakesMultiplier;
      }
      hpLeft = hp - damage; // deal damage to building
      if (hpLeft <= 0) {
        // if building is destroyed, we got a zapquake combination
        result.push({ nbQuakes: q, nbZaps: z });
      }
      nbSpells = q + z; // update nbSpells
    }
    // Can't be destroyed with Zaps alone, reset nbSpells to 0 to continue loop
    if (result.length === 0){
      nbSpells = 0
    }
    hpLeft = hp; // repair building for next test
  }

  // sort by amount of spells used
  result.sort((a: ZapQuake, b: ZapQuake) => {
    if (a.nbZaps + a.nbQuakes > b.nbZaps + b.nbQuakes) return 1;
    if (b.nbZaps + b.nbQuakes > a.nbZaps + a.nbQuakes) return -1;
    return 0;
  });

  return result;
}

export function BuildingCard(props: Props) {
  // localStorage key "buildingLevels" exists ? then get the value of the building
  // otherwise, default to the building max level
  const [buildingLevel, setBuildingLevel] = useState(
    Number(
      localStorage.getItem("buildingLevels") &&
        JSON.parse(localStorage.getItem("buildingLevels")!)[props.building.id]
    ) || props.building.hp.length
  );
  const [showMore, setShowMore] = useState(false);
  const zapQuakes: ZapQuake[] = getZapQuakes(props, buildingLevel);

  useEffect(() => {
    // parse the build levels object from localstorage
    // if not found, initialize object
    const buildingLevels = JSON.parse(
      localStorage.getItem("buildingLevels")!
    ) || { [props.building.id]: buildingLevel };
    // update the level for the building
    buildingLevels[props.building.id] = buildingLevel;
    // update localstorage
    localStorage.setItem("buildingLevels", JSON.stringify(buildingLevels));
  }, [buildingLevel, props.building.id]);

  useEffect(() => {
    setShowMore(false);
  }, [props.zapLevel, props.quakeLevel, buildingLevel]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <BuildingHeader building={props.building} level={buildingLevel} />
      <div className="mb-2">
        <LevelRange
          value={buildingLevel}
          max={props.building.hp.length}
          onChange={(value) => setBuildingLevel(value)}
        />
      </div>
      {zapQuakes.length === 0 ? (
        <div className="text-center dark:text-gray-200">
          <span className="no-combination">
            Cannot be destroyed using current parameters.
          </span>
        </div>
      ) : (
        // by default show lowest spell usage combinations
        zapQuakes
          .filter(
            (z) =>
              z.nbZaps + z.nbQuakes ===
              zapQuakes[0].nbZaps + zapQuakes[0].nbQuakes
          )
          .map((z, i) => (
            <ZapQuakeDisplay
              key={i}
              zapLevel={props.zapLevel}
              quakeLevel={props.quakeLevel}
              zapQuake={z}
              spellCapacity={props.spellCapacity}
            />
          ))
      )}
      {
        // if not showing more, and there are results, and there is actually more results to show
        !showMore &&
          zapQuakes.length > 0 &&
          zapQuakes.filter(
            (z) =>
              z.nbZaps + z.nbQuakes >
              zapQuakes[0].nbZaps + zapQuakes[0].nbQuakes
          ).length > 0 && (
            <div className="text-center">
              <button
                className="text-gray-500 select-none dark:text-gray-300 focus:outline-none"
                onClick={() => setShowMore(true)}
              >
                Show more...
              </button>
            </div>
          )
      }
      {
        // if user wants to show more, render the rest
        showMore &&
          zapQuakes
            .filter(
              (z) =>
                z.nbZaps + z.nbQuakes >
                zapQuakes[0].nbZaps + zapQuakes[0].nbQuakes
            )
            .map((z, i) => (
              <ZapQuakeDisplay
                key={i}
                zapLevel={props.zapLevel}
                quakeLevel={props.quakeLevel}
                zapQuake={z}
                spellCapacity={props.spellCapacity}
              />
            ))
      }
    </div>
  );
}
