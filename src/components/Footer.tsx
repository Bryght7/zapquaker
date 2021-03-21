import React from "react";

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="flex items-center justify-center h-12 text-blue-700 bg-white border-t dark:bg-gray-800 dark:border-gray-500 dark:text-blue-100">
      ✔ Last update: December 2020 patch
    </footer>
  );
}
