import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Donation } from "./Donation";

type Props = {
  darkMode: boolean;
  setDarkMode: (value: React.SetStateAction<boolean>) => void;
  setArrowLevel: (value: React.SetStateAction<number>) => void;
};

export function Header(props: Props) {
  const handleArrowLevelChange = () => {
    const newArrowLevel = localStorage.getItem("arrowLevel") === "0" ? "1" : "0";
    props.setArrowLevel(Number(newArrowLevel));
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between pl-4 pr-6 text-blue-700 bg-white border-b cursor-default select-none h-14 sm:h-16 lg:px-24 dark:text-blue-100 dark:border-gray-500 dark:bg-gray-800">
      <h1 className="text-xl font-semibold tracking-wide sm:text-2xl font-logo">
        <span className="ml-3 text-yellow-400">Zap</span>quaker
      </h1>
      <div className="flex items-center space-x-2 text-lg sm:space-x-4">
      <button
          onClick={handleArrowLevelChange}
          className="px-2 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Hero Equip
        </button>
        <Donation />
        <DarkModeSwitch
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
        />
      </div>
    </header>
  );
}
