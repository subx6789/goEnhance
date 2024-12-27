import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  link: string;
  className?: string;
};

const Button = ({ text, link, className }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        "inline-flex items-center justify-center px-8 border border-transparent text-lg font-medium rounded-xl text-white bg-[#e05599] hover:bg-[#e05599]/80 transition-all duration-300",
        className
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
