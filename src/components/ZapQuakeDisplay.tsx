import React from "react";
import { DATA_SPELLS, ZapQuake } from "../gameData";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  zapQuake: ZapQuake;
  spellCapacity: number;
};

export function ZapQuakeDisplay(props: Props) {
  return (
    <div className="mb-2 flex justify-center items-center space-x-2">
      {props.zapQuake.nbZaps !== 0 && (
        <SpellDisplay
          name="lightning"
          maxLevel={DATA_SPELLS[1].damage.length}
          level={props.zapLevel}
          quantity={props.zapQuake.nbZaps}
          size="sm"
        />
      )}
      {props.zapQuake.nbQuakes !== 0 && (
        <SpellDisplay
          name="quake"
          maxLevel={DATA_SPELLS[0].damage.length}
          level={props.quakeLevel}
          quantity={props.zapQuake.nbQuakes}
          size="sm"
        />
      )}
      <span className="spell-capacity-usage font-semibold text-gray-800">
        ({props.zapQuake.nbQuakes + props.zapQuake.nbZaps}/{props.spellCapacity}
        )
      </span>
    </div>
  );
}
