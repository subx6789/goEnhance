import * as React from "react";

const Hamburger: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    fill="none"
    stroke="currentColor"
    className="menu-icon w-6 h-6 text-white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
      className="menu-icon"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18 18 6M6 6l12 12"
      className="close-icon hidden"
    ></path>
  </svg>
);

export default Hamburger;
