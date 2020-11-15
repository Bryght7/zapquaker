import React, { useState } from "react";
import { InputSection } from "./components/InputSection";
import { ResultsSection } from "./components/ResultsSection";

export default function App() {
  const [zapLevel, setZapLevel] = useState(9);
  const [quakeLevel, setQuakeLevel] = useState(5);
  const [spellCapacity, setSpellCapacity] = useState(11);

  return (
    <div>
      <InputSection
        zapLevel={zapLevel}
        setZapLevel={setZapLevel}
        quakeLevel={quakeLevel}
        setQuakeLevel={setQuakeLevel}
        spellCapacity={spellCapacity}
        setSpellCapacity={setSpellCapacity}
      />
      <ResultsSection
        zapLevel={zapLevel}
        quakeLevel={quakeLevel}
        spellCapacity={spellCapacity}
      />
    </div>
  );
}
