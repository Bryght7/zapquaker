import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

type Props = {
  darkMode: boolean;
  setDarkMode: (value: React.SetStateAction<boolean>) => void;
};

export function Header(props: Props) {
  return (
    <header className="px-6 lg:px-24 h-12 text-blue-700 dark:text-blue-100 border-b dark:border-gray-500 flex items-center justify-between bg-white dark:bg-gray-800 select-none cursor-default">
      <h1 className="font-logo font-semibold text-2xl tracking-wide ">
        <span className="ml-3 text-yellow-400">Zap</span>quaker
      </h1>
      <div className="flex space-x-4 text-lg">
        <DarkModeSwitch
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
        />
        <a
          href="https://github.com/Bryght7/zapquaker"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <svg
            className="w-6 mt-0.5 hover:text-blue-400 dark:hover:text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
