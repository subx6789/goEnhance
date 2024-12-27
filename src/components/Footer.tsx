import React from "react";
import Logo from "../../public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import data from "../utils/data.json";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href={"/"} className="block mb-6">
              <Image
                src={Logo}
                alt="logo"
                className="h-8 w-auto transition-opacity duration-300 opacity-100"
              />
            </Link>
            <p className="text-neutral-400 text-sm mb-6">
              {data.sections.footer.tag_line}
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">
              {data.sections.footer.products.title}
            </h3>
            <ul className="space-y-3">
              {data.sections.footer.products.links.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-400 hover:text-[#e05599] text-sm"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">
              {data.sections.footer.resources.title}
            </h3>
            <ul className="space-y-3">
              {data.sections.footer.resources.links.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-400 hover:text-[#e05599] text-sm"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">
              {data.sections.footer.connect.title}
            </h3>
            <ul className="space-y-3">
              {data.sections.footer.connect.links.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-400 hover:text-[#e05599] text-sm flex items-center gap-2"
                    href={item.link}
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={16}
                      height={16}
                      className="transition-all duration-300 opacity-100"
                    />{" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              {data.sections.footer.rights}
            </p>
            <div className="flex items-center gap-8">
              {data.sections.footer.policies.map((item, index) => (
                <Link
                  href={item.link}
                  className="text-neutral-400 hover:text-[#e05599] text-sm"
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative inline-block">
                <select
                  className="appearance-none bg-neutral-800 border border-neutral-700 rounded-xl text-neutral-400 text-sm px-4 py-2 pr-10 hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#e05599] focus:border-transparent transition-colors duration-200 cursor-pointer"
                  defaultValue={data.sections.footer.languages[0].value}
                >
                  {data.sections.footer.languages.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
