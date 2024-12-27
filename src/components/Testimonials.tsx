import React from "react";
import data from "../utils/data.json";
import Avatar1 from "../../public/avatar1.jpeg";
import Avatar2 from "../../public/avatar2.jpeg";
import Avatar3 from "../../public/avatar3.jpeg";
import Image from "next/image";
import Button from "./Button";
import { Star, StarHalf } from "lucide-react";

const avatars = [Avatar1, Avatar2, Avatar3];

const Testimonials = () => {
  return (
    <section className="bg-neutral-800 md:py-24 py-16">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {data.sections.testimonials.title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            {data.sections.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {data.sections.testimonials.feedbacks.map((item, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e05599]/20 to-[#e05599] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 hover:border-[#e05599] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e05599]/10 flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                      src={avatars[item.avatar]}
                      alt="avatars"
                      className="text-[#e05599] text-2xl font-bold"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-white">
                      {item["user-id"]}
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      {item.profession}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[0.5] mb-3">
                  {Array.from({ length: 5 }, (_, index) => {
                    const starNumber = index + 1;
                    const isHalfStar = starNumber - 0.5 === item.ratings;
                    const isFilled = starNumber <= item.ratings;

                    return (
                      <div key={index} className="text-[#e05599]">
                        {isHalfStar ? (
                          <StarHalf size={16} fill="currentColor" />
                        ) : isFilled ? (
                          <Star size={16} fill="currentColor" />
                        ) : (
                          <Star size={16} />
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="text-neutral-400 flex-grow">
                  &quot;{item.comment}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {data.sections.testimonials.stats.map((item, index) => (
              <div className="text-center" key={index}>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {item.number}
                </h1>
                <p className="text-neutral-400">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            className="py-3"
            text={data.navigation.cta_buttons[4].buttons[0].name}
            link={data.navigation.cta_buttons[4].buttons[0].link}
          />
          <p className="mt-8 text-neutral-400">
            {data.sections.testimonials.tag_line}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
