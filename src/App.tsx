import React from "react";
import { SpellDisplay } from "./components/SpellDisplay";
import { LevelRange } from "./components/LevelRange";

export default function App() {
  return (
    <div className="bg-red-200">
      <SpellDisplay name="spell_lightning" maxLevel={9} quantity={2} />
      <LevelRange value={3} max={9} />
    </div>
  );
}
