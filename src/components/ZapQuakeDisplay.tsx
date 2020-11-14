import React from "react";
import { DATA_SPELLS, ZapQuake } from "../gameData";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  zapQuake: ZapQuake;
};

export function ZapQuakeDisplay(props: Props) {
  return (
    <div className="mb-1">
      {props.zapQuake.nbZap !== 0 && (
        <SpellDisplay
          name="lightning"
          maxLevel={DATA_SPELLS[1].damage.length}
          level={props.zapLevel}
          quantity={props.zapQuake.nbZap}
          size="sm"
        />
      )}
      {props.zapQuake.nbQuake !== 0 && (
        <SpellDisplay
          name="quake"
          maxLevel={DATA_SPELLS[0].damage.length}
          level={props.quakeLevel}
          quantity={props.zapQuake.nbQuake}
          size="sm"
        />
      )}
    </div>
  );
}
