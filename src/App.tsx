import React, { useState } from "react";
import { SpellDisplay } from "./components/SpellDisplay";
import { LevelRange } from "./components/LevelRange";

export default function App() {
  const [levelValue, setLevelValue] = useState(3);

  return (
    <div className="bg-red-200">
      <SpellDisplay name="spell_lightning" maxLevel={9} quantity={2} />
      <LevelRange value={levelValue} max={9} onChange={value => setLevelValue(value)} />
    </div>
  );
}
