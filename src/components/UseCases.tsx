import React from "react";
import Button from "./Button";
import data from "../utils/data.json";
import Tick from "./Tick";

const UseCases = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {data.sections.use_cases.title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            {data.sections.use_cases.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {data.sections.use_cases.categories.map((c, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e05599]/20 to-[#e05599] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 hover:border-[#e05599] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e05599]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[#e05599] text-2xl font-bold">
                      {c.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {c.title}
                  </h3>
                </div>
                <ul className="space-y-4 text-neutral-400">
                  {c.benefits.map((cas, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Tick />
                      {cas}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            text={data.navigation.cta_buttons[1].buttons[2].name}
            link={data.navigation.cta_buttons[1].buttons[2].name}
          />
          <p className="mt-8 text-neutral-400">
            {data.sections.use_cases.footer.tag_line}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
