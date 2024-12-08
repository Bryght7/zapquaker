import React from "react";

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="flex flex-col items-center py-4 bg-white border-t dark:bg-gray-800 dark:border-gray-500 dark:text-blue-100">
      <p>✔ Last update: TH17 Update (November 2024)</p>
      <a
        href="https://github.com/Bryght7/zapquaker"
        target="_blank"
        rel="noopener noreferrer"
        title="View on Github"
        className="flex items-center mt-2 h-7 sm:h-9 px-2.5 text-xs sm:text-base text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded"
      >
        <svg
          className="w-5 sm:w-5 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span className="ml-2">View on Github</span>
      </a>
    </footer>
  );
}
