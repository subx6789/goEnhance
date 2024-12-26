import React from "react";
import data from "../utils/data.json";
import Tick from "./Tick";
import Button from "./Button";

const Pricing = () => {
  return (
    <section className="bg-neutral-900 relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-[#e05599] rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#e05599] rounded-full opacity-10 blur-3xl animate-pulse" />
      </div>
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {data.sections.pricing.title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            {data.sections.pricing.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {data.sections.pricing.plans.map((p, index) => (
            <div
              key={index}
              className={`relative group h-full ${
                index === 1 ? "scale-105" : ""
              }`}
            >
              {index === 1 && (
                <div className="absolute z-10 -top-3 left-1/2 -translate-x-1/2 bg-[#e05599] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Best Seller
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e05599]/20 to-[#e05599] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div
                className={`relative bg-neutral-900/50 backdrop-blur-sm border ${
                  index === 1 ? "border-[#e05599]" : "border-neutral-700"
                } rounded-xl p-8 hover:border-[#e05599] transition-all duration-300 h-full flex flex-col`}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {p.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-bold text-white">
                      ${p.price.amount}
                    </span>
                    <span className="text-neutral-400">/{p.price.period}</span>
                  </div>
                  <ul className="space-y-4 text-neutral-400 mb-8">
                    {p.features.map((item, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Tick />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  text={
                    index === 2
                      ? `${data.navigation.cta_buttons[3].buttons[1].name}`
                      : `${data.navigation.cta_buttons[3].buttons[0].name}`
                  }
                  link={
                    index === 2
                      ? `${data.navigation.cta_buttons[3].buttons[1].link}`
                      : `${data.navigation.cta_buttons[3].buttons[0].link}`
                  }
                  className={"w-full"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
