import * as React from "react";

const Closebutton: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    stroke="currentColor"
    className="close-icon w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m5 5 14 14M5 19 19 5"
    ></path>
  </svg>
);

export default Closebutton;
