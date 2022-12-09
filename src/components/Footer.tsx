import React from "react";

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="flex flex-col items-center py-4 bg-white border-t dark:bg-gray-800 dark:border-gray-500 dark:text-blue-100">
      <p>✔ Last update: TH15 Update</p>
    </footer>
  );
}
