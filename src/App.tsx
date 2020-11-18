import React, { useState } from "react";
import { Header } from "./components/Header";
import { InputSection } from "./components/InputSection";
import { ResultsSection } from "./components/ResultsSection";

export default function App() {
  const [zapLevel, setZapLevel] = useState(9);
  const [quakeLevel, setQuakeLevel] = useState(5);

  return (
    <div>
      <Header/>
      <InputSection
        zapLevel={zapLevel}
        setZapLevel={setZapLevel}
        quakeLevel={quakeLevel}
        setQuakeLevel={setQuakeLevel}
      />
      <ResultsSection
        zapLevel={zapLevel}
        quakeLevel={quakeLevel}
      />
    </div>
  );
}
