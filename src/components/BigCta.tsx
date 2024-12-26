import React from "react";
import data from "../utils/data.json";
import Link from "next/link";
import Arrow from "./Arrow";
import VideoIcon from "./VideoIcon";

const BigCta = () => {
  return (
    <section className="bg-neutral-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-[#e05599] rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#e05599] rounded-full opacity-10 blur-3xl animate-pulse" />
      </div>
      <div className="relative max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-neutral-800/50 backdrop-blur-xl rounded-2xl border border-neutral-700 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 size-40 bg-[#e05599]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-40 bg-[#e05599]/20 rounded-full blur-3xl" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {data.sections.big_cta.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 mb-10">
              {data.sections.big_cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={"/"}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-neutral-900 bg-[#e05599] hover:bg-[#e05599]/90 transition-all duration-300"
              >
                {data.navigation.cta_buttons[5].buttons[0].name} <Arrow />{" "}
              </Link>
              <Link
                href={"/"}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#e05599] text-lg font-medium rounded-xl text-white hover:bg-[#e05599]/10 transition-all duration-300"
              >
                {data.navigation.cta_buttons[5].buttons[1].name} <VideoIcon />{" "}
              </Link>
            </div>
            <p className="mt-8 text-sm text-neutral-400">
              {data.sections.big_cta.tag_line}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCta;
