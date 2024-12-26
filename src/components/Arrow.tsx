import * as React from "react";

const Arrow: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    fill="none"
    stroke="currentColor"
    className="ml-2 size-5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m17 8 4 4m0 0-4 4m4-4H3"
    ></path>
  </svg>
);

export default Arrow;
