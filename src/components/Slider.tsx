"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-3xl m-auto rounded-xl overflow-hidden">
      <div className="relative aspect-video">
        {/* Background (enhanced) Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/enhanced-image.jpg')`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Foreground (unenhanced) Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/unenhanced-image.jpg')`,
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        />

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transform -translate-x-1/2 transition-opacity duration-300"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 ${
              isDragging ? "scale-110" : "group-hover:scale-110"
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Enhanced
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Original
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ touchAction: "none" }}
        />
      </div>
    </div>
  );
};

export default Slider;
