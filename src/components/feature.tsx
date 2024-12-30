import React, { useMemo } from "react";

export default function Feature() {
  
  const features = useMemo(
    () => [
      "Technology",
      "Next.js",
      "HTML",
      "Web Development",
      "TypeScript",
      "JavaScript",
    ],
    []
  );

  return (
    <div>
      <section className="py-8 bg-neutral-50 md:py-40">
        {/* Main Heading */}
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-black text-red-800">
          Sana Khalid Navigating the Secrets of Technology in the Tech Chronicle Blog!
        </h2>
        
        {/* Description */}
        <p className="text-center mt-4 text-sm md:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Join Sana Khalid as she explores the latest trends and exciting developments in the world of technology. From web development to new innovations, Sana shares her insights in a way that's easy to understand and keeps you updated on the tech that’s shaping our future.
        </p>
        
        <div className="mx-auto max-w-7xl px-5">
          {/* Subheading */}
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Discover Our Features
          </h1>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up delay-100">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-gray-400 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-center"
              >
                <p className="font-semibold text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
