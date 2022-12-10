import React, { useEffect, useState } from "react";
import "./App.css";
import { BackToTop } from "./components/BackToTop";
import { FilterBar } from "./components/FilterBar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InputSection } from "./components/InputSection";
import { ResultsSection } from "./components/ResultsSection";
import { DATA_BUILDINGS } from "./gameData";

export default function App() {
  const [zapLevel, setZapLevel] = useState(
    Number(localStorage.getItem("zapLevel")) || 9
  );
  const [quakeLevel, setQuakeLevel] = useState(
    Number(localStorage.getItem("quakeLevel")) || 5
  );
  const [randomPlaceHolder] = useState(
    DATA_BUILDINGS.map((b) => b.name)[
      Math.floor(Math.random() * DATA_BUILDINGS.length)
    ] + "..."
  );
  const [filterText, setFilterText] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("zapLevel", zapLevel.toString());
  }, [zapLevel]);

  useEffect(() => {
    localStorage.setItem("quakeLevel", quakeLevel.toString());
  }, [quakeLevel]);

  const handleOnScroll = (event: Event) => {
    const scrolled = document.documentElement.scrollTop;
    setShowBackToTop(window.innerWidth < 768 && scrolled >= 600); // md breakpoint
  };
  window.addEventListener("scroll", handleOnScroll);

  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <div className="h-full bg-gray-200 dark:bg-gray-600">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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
        <Footer></Footer>
      </div>
      {showBackToTop && <BackToTop />}
    </div>
  );
}
