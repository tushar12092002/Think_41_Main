import React, { useState, useRef } from "react";
import teamPhoto from "../../assets/Career/team-photo.png";
import Image1 from "../../assets/Career/Image1.png";
import Image2 from "../../assets/Career/Image2.png";
import Image3 from "../../assets/Career/Image3.png";
import Image4 from "../../assets/Career/Image4.png";
import Image5 from "../../assets/Career/Image5.png";
import Image6 from "../../assets/Career/Image6.png";
import Image7 from "../../assets/Career/Image7.png";
import Image8 from "../../assets/Career/Image8.png";
import Image9 from "../../assets/Career/IMage9.png";
import Image10 from "../../assets/Career/Image10.png";
import Image11 from "../../assets/Career/IMage11.png";
import Image12 from "../../assets/Career/IMage12.png";
import Image13 from "../../assets/Career/IMage13.png";
import Image14 from "../../assets/Career/IMage14.png";
import Image15 from "../../assets/Career/IMage15.png";
import Image16 from "../../assets/Career/IMage16.png";
import Image17 from "../../assets/Career/IMage17.png";
import Image18 from "../../assets/Career/IMage18.png";
import Image19 from "../../assets/Career/IMage19.png";
import Image20 from "../../assets/Career/IMage20.png";
import Image21 from "../../assets/Career/IMage21.png";
import Image22 from "../../assets/Career/IMage22.png";
import Image23 from "../../assets/Career/IMage23.png";
import Image24 from "../../assets/Career/IMage24.png";

const LifeAtThink41 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const gridImages = [
    teamPhoto, // Include main image in the animation grid
    Image1, Image2, Image3, Image4, Image5, Image6,
    Image7, Image8, Image9, Image10, Image11, Image12,
    Image13, Image14, Image15, Image16, Image17, Image18,
    Image19, Image20, Image21, Image22, Image23, Image24,
  ];

  return (
    <section className="relative w-[1440px] h-[1024px] bg-white overflow-hidden mx-auto">
      {/* Grid background lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='10' height='30' fill='none'/%3E%3Crect x='0' y='0' width='30' height='10' fill='none'/%3E%3Cline x1='10' y1='0' x2='10' y2='30' stroke='%23e5e5e5' stroke-width='1' stroke-opacity='0.5' stroke-dasharray='4,4'/%3E%3Cline x1='0' y1='10' x2='30' y2='10' stroke='%23e5e5e5' stroke-width='1' stroke-opacity='0.5' stroke-dasharray='4,4'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Heading */}
      <div className="w-[1200px] mx-auto pt-16 z-10 relative">
        <svg width="0" height="0">
          <linearGradient id="lifeatthink41-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#0060C7" />
          </linearGradient>
        </svg>
        <h2
          className="text-[40px] font-semibold leading-[53px] font-montserrat mb-8"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #0060C7 100%)",
            backgroundImage: "linear-gradient(90deg, #000000 0%, #0060C7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",
            display: 'inline-block',
          }}
        >
          Life @ Think41
        </h2>
      </div>

      {/* Hover area */}
      <div
        ref={containerRef}
        className="relative w-[1202.564px] h-[700px] mx-auto rounded-xl overflow-hidden z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main image background */}
        <img
          src={teamPhoto}
          alt="Main Team"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out rounded-xl
            ${isHovered ? 'opacity-0 scale-90 z-0' : 'opacity-100 scale-100 z-10'}`}
        />

        {/* Image grid */}
        <div
          className={`absolute inset-0 p-4 grid grid-cols-2 md:grid-cols-5 gap-2 transition-opacity duration-700 ease-in-out
            ${isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        >
          {gridImages.map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transform scale-90 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: `600ms`,
                animationFillMode: 'forwards',
                animationTimingFunction: 'ease-out',
                animationName: isHovered ? 'fadeInScale' : 'none'
              }}
            >
              <img
                src={img}
                alt={`Life at Think41 ${index}`}
                className="w-full h-[150px] object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default LifeAtThink41;
