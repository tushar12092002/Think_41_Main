
import React from "react";
import bgHero from "../../assets/About/About_us_hero_section_updated.svg";

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={bgHero}
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Elliptical Bottom Blur Overlay */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[130%] h-40 rounded-full bg-white/60 blur-3xl pointer-events-none" />

          {/* Gradient Fade Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-[60px] lg:px-[120px] max-w-[1200px] py-16 md:py-20 relative z-10 flex flex-col items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-extrabold leading-tight md:leading-[1.1] font-montserrat">
              <span className="text-black">Fullstack </span>
              <span className="text-[#2A4B8D]">GenAI </span>
              <span className="text-[#3A6BC5]">Company</span>
            </h1>
            <p className="mt-3 text-[#333] text-[16px] sm:text-[18px] md:text-[20px] font-normal font-montserrat">
              At Think41, we use Generative AI to hire, operate, build, innovate, and scale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


