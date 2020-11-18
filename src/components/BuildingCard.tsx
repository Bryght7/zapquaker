import React, { useState } from "react";
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
  const [buildingLevel, setBuildingLevel] = useState(props.building.hp.length);
  const [showMore, setShowMore] = useState(false);
  const zapQuakes: ZapQuake[] = getZapQuakes(props, buildingLevel);

  return (
    <div className="rounded-lg p-4 shadow-lg bg-white">
      <BuildingHeader building={props.building} level={buildingLevel} />
      <LevelRange
        value={buildingLevel}
        max={props.building.hp.length}
        onChange={(value) => setBuildingLevel(value)}
      />
      {zapQuakes.length === 0 ? (
        <div className="text-center">
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
              <button onClick={() => setShowMore(true)}>Show more...</button>
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
