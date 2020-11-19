import React, { useState } from "react";
import { FilterBar } from "./components/FilterBar";
import { Header } from "./components/Header";
import { InputSection } from "./components/InputSection";
import { ResultsSection } from "./components/ResultsSection";
import { DATA_BUILDINGS } from "./gameData";
import "./App.css";

export default function App() {
  const [zapLevel, setZapLevel] = useState(9);
  const [quakeLevel, setQuakeLevel] = useState(5);
  const [randomPlaceHolder] = useState(
    DATA_BUILDINGS.map((b) => b.name)[
      Math.floor(Math.random() * DATA_BUILDINGS.length)
    ] + "..."
  );
  const [filterText, setFilterText] = useState("");

  return (
    <div className="h-full bg-gray-200">
      <Header />
      <InputSection
        zapLevel={zapLevel}
        setZapLevel={setZapLevel}
        quakeLevel={quakeLevel}
        setQuakeLevel={setQuakeLevel}
      />
      <FilterBar
        placeholder={randomPlaceHolder}
        onChange={(value) => setFilterText(value)}
      />
      <ResultsSection
        zapLevel={zapLevel}
        quakeLevel={quakeLevel}
        filterText={filterText}
      />
    </div>
  );
}
