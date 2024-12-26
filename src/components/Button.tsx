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
        "relative bg-gradient-to-b from-[#951EFD] to-[#e05599]/90 text-white px-6 py-2 rounded-xl text-center",
        "shadow-[0_0_20px_rgba(149, 30, 253, 1)]",
        "transition-all duration-300",
        "hover:shadow-[0_0_25px_rgba(149, 30, 253, 1)]",
        "hover:translate-y-[-2px]",
        "active:translate-y-[2px]",
        "outline outline-2 outline-transparent",
        "hover:outline-[#e05599]/20",
        className
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
