import React, { useState } from "react";
import "./FilterBar.css";

type Props = {
  placeholder?: string;
  onChange: (value: string) => void;
};

export function FilterBar(props: Props) {
  const [value, setValue] = useState("");

  function handleChange(event: any) {
    props.onChange(event.target.value);
    setValue(event.target.value);
  }

  function handleClick() {
    handleChange({
      target: {
        value: "",
      },
    });
  }

  return (
    <div className="flex px-6 pt-6 lg:px-24">
      <div className="flex items-center justify-center w-10 h-8 bg-white dark:bg-gray-800 rounded-l-xl">
        <svg
          className="w-5 text-gray-700 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        id="inputSearchBar"
        className="w-full h-8 placeholder-gray-700 bg-white outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-300"
        type="search"
        placeholder={props.placeholder ? props.placeholder : "Search"}
        value={value}
        onChange={handleChange}
      />
      <div className="flex items-center justify-center w-10 h-8 bg-white dark:bg-gray-800 rounded-r-xl">
        {value !== "" && (
          <button
            id="btnClearSearchBar"
            type="button"
            className="focus:outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-5 text-gray-700 pointer-events-none dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
