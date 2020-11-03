import React, { useState } from "react";
import { InputSection } from "./components/InputSection";

export default function App() {
  const [zapLevel, setZapLevel] = useState(3);
  const [quakeLevel, setQuakeLevel] = useState(3);

  return (
    <InputSection
      zapLevel={zapLevel}
      setZapLevel={setZapLevel}
      quakeLevel={quakeLevel}
      setQuakeLevel={setQuakeLevel}
    />
  );
}
