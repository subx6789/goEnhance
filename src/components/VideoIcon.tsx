import * as React from "react";

const VideoIcon: React.FC<React.SVGProps<SVGElement>> = () => (
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
      d="m14.752 11.168-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    ></path>
  </svg>
);

export default VideoIcon;
