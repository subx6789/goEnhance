import * as React from "react";

const Tick: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    fill="none"
    stroke="currentColor"
    className="w-5 h-5 text-[#e05599]"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m5 13 4 4L19 7"
    ></path>
  </svg>
);

export default Tick;
