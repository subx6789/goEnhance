import React from "react";
import Button from "./Button";
import clsx from "clsx";
import Slider from "./Slider";

type FeaturesProps = {
  title: string;
  description: string;
  video: string;
  button_text: string;
  button_link: string;
  order: string;
};

const Features = ({
  title,
  description,
  video,
  button_text,
  button_link,
  order,
}: FeaturesProps) => {
  return (
    <section className="bg-neutral-900 md:py-24 py-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center h-full px-4 max-w-7xl sm:px-6 lg:px-8 text-white">
        <div
          className={clsx(
            "text-center lg:text-left",
            order !== "right" && "lg:order-2"
          )}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-neutral-400 text-lg mb-8">{description}</p>
          <Button className="py-3" text={button_text} link={button_link} />
        </div>
        <div className="relative rounded-xl overflow-hidden">
          {video !== "" ? (
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <Slider />
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
