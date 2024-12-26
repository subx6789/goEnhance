"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.webp";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Closebutton from "./Closebutton";
import clsx from "clsx";
import data from "../utils/data.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 inset-x-0 z-50 bg-neutral-800/30 backdrop-blur-sm border-b border-neutral-700/5 w-full h-16 rounded-b-md",
        isOpen && "bg-neutral-900 rounded-b-none"
      )}
    >
      <div className="container m-auto flex items-center justify-between h-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div>
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              className="h-10 w-auto transition-opacity duration-300 opacity-100"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center h-full space-x-4">
            {data.options.map((option, index) => (
              <li
                key={index}
                className="text-gray-300 px-6 py-2 hover:text-white hover:bg-neutral-800/30 cursor-pointer rounded-md"
              >
                <Link href={option.link}>
                  <span>{option.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <Button
                link={data.button_text[0].link}
                text={data.button_text[0].name}
              />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:bg-neutral-700 p-2 rounded-md"
          >
            {!isOpen ? <Hamburger /> : <Closebutton />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 top-16 bg-neutral-900/80 h-screen w-full"
            onClick={toggleMenu}
          >
            <div className="lg:hidden fixed inset-0 top-16 bg-neutral-900 h-fit px-8 pb-8 rounded-b-md">
              <div className="flex flex-col gap-3">
                {data.options.map((option, index) => (
                  <Link
                    key={index}
                    href={option.link}
                    className="w-full h-full cursor-pointer hover:bg-neutral-700 
                  rounded-md text-center py-3 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-gray-300 hover:text-white text-lg">
                      {option.name}
                    </p>
                  </Link>
                ))}
                <Button
                  className="w-full text-center"
                  link={data.button_text[0].link}
                  text={data.button_text[0].name}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
