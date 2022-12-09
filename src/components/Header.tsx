import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Donation } from "./Donation";

type Props = {
  darkMode: boolean;
  setDarkMode: (value: React.SetStateAction<boolean>) => void;
};

export function Header(props: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between pl-4 pr-6 text-blue-700 bg-white border-b cursor-default select-none h-14 sm:h-16 lg:px-24 dark:text-blue-100 dark:border-gray-500 dark:bg-gray-800">
      <h1 className="text-lg font-semibold tracking-wide sm:text-2xl font-logo">
        <span className="ml-3 text-yellow-400">Zap</span>quaker
      </h1>
      <div className="flex items-center space-x-2 text-lg sm:space-x-4">
        <Donation />
        <DarkModeSwitch
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
        />
      </div>
    </header>
  );
}
