import React, { useRef, useEffect, useState } from "react";
import TagButton from "../common/TagButton";
import video from "../../assets/Home/video.mp4";
import { CTAButton } from "../common/CTA";

const WhatWeBuilt = () => {
  const sectionRef = useRef(null);
  const rightSideRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const rightSide = rightSideRef.current;

    if (!section || !rightSide) return;

    // Create an intersection observer to detect when the section is fully in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.8); // Reduced from 0.95
      },
      {
        root: null,
        threshold: [0.8], // Reduced from 0.95
        rootMargin: "-64px 0px 0px 0px", // Account for the navbar height
      }
    );

    observer.observe(section);

    const handleRightSideScroll = () => {
      if (!rightSide) return;
      const scrollPosition = rightSide.scrollTop;
      const maxScroll = rightSide.scrollHeight - rightSide.clientHeight;
      const progress = scrollPosition / maxScroll || 0;
      setScrollProgress(progress);
    };

    // Handle wheel events
    const handleWheel = (e) => {
      // Get right panel scroll info
      const maxScroll = rightSide.scrollHeight - rightSide.clientHeight;
      const isRightAtBottom = Math.abs(rightSide.scrollTop - maxScroll) < 2;
      const isRightAtTop = rightSide.scrollTop === 0;

      // Check if section is currently in full view
      if (isInView) {
        // Scrolling down logic
        if (e.deltaY > 0 && !isRightAtBottom) {
          e.preventDefault();
          rightSide.scrollBy({ top: e.deltaY, behavior: "auto" });
        }
        // Scrolling up logic
        else if (e.deltaY < 0 && !isRightAtTop) {
          e.preventDefault();
          rightSide.scrollBy({ top: e.deltaY, behavior: "auto" });
        }
      }
    };

    // Touch handling (simplified for clarity)
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isInView) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const maxScroll = rightSide.scrollHeight - rightSide.clientHeight;
      const isRightAtBottom = Math.abs(rightSide.scrollTop - maxScroll) < 2;
      const isRightAtTop = rightSide.scrollTop === 0;

      if ((deltaY > 0 && !isRightAtBottom) || (deltaY < 0 && !isRightAtTop)) {
        e.preventDefault();
        rightSide.scrollTop += deltaY;
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    rightSide.addEventListener("scroll", handleRightSideScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      rightSide.removeEventListener("scroll", handleRightSideScroll);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="sticky top-16 w-full h-screen flex items-center justify-center bg-[#F9FAFB]"
    >
      {/* Content wrapper */}
      <div className="flex w-full max-w-[1440px] h-[575px] pl-[120px] pr-[48px] items-start">
        {/* Left side */}
        <div className="flex flex-col gap-[36px] w-[536px]">
          <TagButton text="What We've Built" />
          <div>
            <p className="font-montserrat text-[40px] font-semibold leading-[53.24px] bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent">
              Our Solutions In Action
            </p>
            <p className="text-[#444] font-montserrat text-[16px] font-normal leading-[28px] self-stretch">
              AI workflows and agentic systems have been built to solve
              real-world enterprise problems—tested on live data, integrated
              into existing stacks, and delivered with performance in mind.
            </p>
          </div>
          <CTAButton>Demo Hub</CTAButton>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center justify-items-start mt-8 h-full w-8 mx-4">
          <div className="relative h-[400px] w-[3px] bg-[#E5E7EB]">
            {/* Main progress bar */}
            <div
              className="absolute top-0 left-0 w-full bg-[#0060C7] rounded-full transition-all duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Circle at top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0060C7]" />

            {/* First middle circle */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-300 ${
                scrollProgress >= 0.49 ? "bg-[#0060C7]" : "bg-[#E5E7EB]"
              }`}
            />

            {/* Circle at bottom */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-300 ${
                scrollProgress >= 0.98 ? "bg-[#0060C7]" : "bg-[#E5E7EB]"
              }`}
            />
          </div>
        </div>

        {/* Right scrollable side */}
        <div
          ref={rightSideRef}
          className="flex flex-col gap-[36px] w-[736px] pl-[68px] pr-[55px] pt-[68px] overflow-y-scroll overflow-x-hidden h-[475px] scroll-hidden"
        >
          <div className="flex justify-between">
            <div className="flex w-[291px] h-[193px] px-[16px] flex-col justify-center gap-[20px] flex-shrink-0 rounded-[8px] bg-[#D8DDF2] items-start">
              <p className="text-[#000] font-montserrat text-[25px] font-medium leading-[33.275px]">
                Pitch Perfect
              </p>
              <p className="text-[#444] font-roboto text-[16px] font-normal leading-[28px]">
                Simulated practice before pitch
              </p>
            </div>
            <ul className="flex w-[300px] h-[193px] px-[8px] flex-col justify-center items-start gap-[4px] flex-shrink-0 rounded-[8px] border-2 border-[#D8DDF2] list-disc pl-[20px] text-[#000] font-roboto text-[16px] font-light leading-[24px]">
              <li>For a wealth manager</li>
              <li>Persona based on real user profile and portfolio</li>
              <li>Natural voice conversation</li>
              <li>Evaluation summary emailed after the discussion</li>
            </ul>
          </div>

          <div className="rounded-[8px] border-[4px] border-[#D8DDF2] w-[613.069px] h-[346px] flex-shrink-0 aspect-[613.07/346] overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            nostrum non quia, atque molestiae provident ut, id illo nobis nisi
            laborum consequatur cumque minus? Quis tenetur magnam cupiditate
            reiciendis explicabo.
          </p>
          <div className="rounded-[8px] border-[4px] border-[#D8DDF2] w-[613.069px] h-[346px] flex-shrink-0 aspect-[613.07/346]">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuilt;
