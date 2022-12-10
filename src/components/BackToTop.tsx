import React from "react";

type Props = {};

export function BackToTop(props: Props) {
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleOnClick}
      className="fixed right-0 h-12 m-auto text-center align-middle bg-gray-500 shadow-xl hover:bg-gray-600 w-14 rounded-l-xl bottom-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#ffffff"
        viewBox="0 0 18 18"
        className="inline ml-1"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </button>
  );
}
