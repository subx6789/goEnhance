import React from "react";
import Button from "./Button";
import data from "../utils/data.json";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={data.content.hero_background_video} type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 opacity-50 z-1" />

      {/* Content */}
      <div className="absolute z-2 flex flex-col gap-4 h-full w-full items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {data.content.hero_title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
          {data.content.hero_description}
        </p>
        <Button text="Try GoEnhance for free" link="/" />
        <p className="mt-6 text-neutral-400">{data.content.hero_tagline[0]}</p>
        <p className="mt-8 text-neutral-300">{data.content.hero_tagline[1]}</p>
      </div>
    </section>
  );
};

export default Hero;
