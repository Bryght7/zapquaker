import React from "react";
import { animated, useSpring } from "react-spring";
import { DATA_SPELLS, ZapQuake } from "../gameData";
import { SpellDisplay } from "./SpellDisplay";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  zapQuake: ZapQuake;
  spellCapacity: number;
  useGA: boolean;
  gaLevel: number;
};

export function ZapQuakeDisplay(props: Props) {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <animated.div
      style={fade}
      className="mb-2 flex justify-center items-center space-x-2"
    >
      {props.useGA && (
        <SpellDisplay
          name="giant_arrow"
          maxLevel={DATA_SPELLS[2].damage.length}
          level={props.gaLevel}
          quantity={1}
          size="sm"
        />
      )}
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
      <span className="spell-capacity-usage font-semibold text-gray-800 dark:text-gray-100">
        ({props.zapQuake.nbQuakes + props.zapQuake.nbZaps}/{props.spellCapacity}
        )
      </span>
    </animated.div>
  );
}
