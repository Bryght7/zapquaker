import React from "react";
import { Donation } from "./Donation";

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="flex flex-col items-center py-4 bg-white border-t dark:bg-gray-800 dark:border-gray-500 dark:text-blue-100">
      <p className="mb-4">✔ Last update: TH15 Update</p>
      <Donation></Donation>
    </footer>
  );
}
