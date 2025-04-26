import React from "react";

("use client");

// import MovingGridAnimation from "./moving-grid-animation";
import { motion } from "framer-motion";

function MovingGridAnimation() {
  // Grid configuration - more vertical lines (wider) and fewer horizontal lines (taller)
  const horizontalLines = 15; // Fewer horizontal lines = taller cells
  const verticalLines = 40; // More vertical lines = narrower cells

  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="relative w-full h-full">
        <div
          className="absolute w-full h-full"
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            className="relative w-[130%] h-[130%] left-[-15%] top-[-15%]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(65deg)", // Slightly increased angle for better slant effect
              transformOrigin: "center center",
            }}
          >
            {/* First set of horizontal grid lines - spaced further apart */}
            <div className="absolute w-full h-full">
              {Array.from({ length: horizontalLines }).map((_, index) => {
                // Calculate position with even spacing
                const position = (index / horizontalLines) * 100;

                return (
                  <motion.div
                    key={`h-line-${index}`}
                    className="absolute w-full border-t border-blue-400/30"
                    style={{
                      top: `${position}%`,
                    }}
                    animate={{
                      top: [`${position}%`, `${position - 100}%`], // Reversed direction: top to bottom
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 10,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </div>

            {/* Second set of horizontal grid lines (offset) */}
            <div className="absolute w-full h-full">
              {Array.from({ length: horizontalLines }).map((_, index) => {
                // Calculate position with even spacing, but offset by 100%
                const position = (index / horizontalLines) * 100 + 100;

                return (
                  <motion.div
                    key={`h-line-offset-${index}`}
                    className="absolute w-full border-t border-blue-400/30"
                    style={{
                      top: `${position}%`,
                    }}
                    animate={{
                      top: [`${position}%`, `${position - 100}%`], // Reversed direction: top to bottom
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 10,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </div>

            {/* Vertical grid lines - placed closer together */}
            {Array.from({ length: verticalLines }).map((_, index) => {
              const position = (index / (verticalLines - 1)) * 100;
              // Make lines converge toward the center in the distance
              const perspectiveAdjust = Math.abs(position - 50) / 50;

              return (
                <motion.div
                  key={`v-line-${index}`}
                  className="absolute h-full border-l border-blue-400/30"
                  style={{
                    left: `${position}%`,
                    transform: `scaleX(${1 - perspectiveAdjust * 0.5})`,
                  }}
                />
              );
            })}

            {/* Depth gradient overlay */}
            <div
              className="absolute w-full h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 30%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 z-0">
      <MovingGridAnimation />
    </div>
  );
};

export default HeroAnimation;
