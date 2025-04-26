import React from "react";
import FoundationIcon from "../../assets/Career/foundation.svg";
import TeamImage from "../../assets/Career/team-photo.png";
import TagButton from "../../components/common/TagButton";
import PolygonWebVector from "../../assets/Career/00 polygon web vector updated.svg";

const OurStory = () => (
  <div className="h-full w-full overflow-hidden relative">
    {/* Background PolygonWebVector with opacity */}
    <div
      aria-hidden="true"
      style={{
        backgroundImage: `url(${PolygonWebVector})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "80vw auto",
        backgroundPosition: "left top",
        opacity: 0.50,
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
    <section
      className={`w-[1200px] mx-auto flex flex-col gap-[36px] relative`}
      id="our-story"
      style={{ minHeight: '520px' }}
    >
      {/* 36px gap before Foundation tag */}
      <div style={{ height: 36 }} />
      <div className="flex flex-col gap-[36px] relative z-[1]">
        {/* Foundation label */}
        <TagButton text="Foundation">
        </TagButton>
        {/* Gradient Heading */}
        
        {/* 16px gap between heading and subtext */}
        {/* Subtext (single line) */}
        {/* Two-column layout (rest of content) */}
        <div className="flex gap-[32px] w-full relative z-[2]">
          {/* Left: Text */}
          <div className="flex-1 text-[#444] font-roboto text-[16px] leading-[28px]">
          <h2 className="text-[40px] font-bold font-montserrat mb-2 relative z-[2]">
          <span className="bg-gradient-to-r from-[#000] to-[#0060C7] bg-clip-text text-transparent">
            Our story
          </span>
        </h2>
        <div style={{ height: 16}} />
        <div className="text-[#444] font-roboto text-[16px] leading-[28px] mb-12">
          We’re not just building with AI. We’re building a company where AI and people grow together.
        </div>
            <div className="mb-6">
            At Think41, AI is more than our focus; it’s our mindset. We co-build GenAI systems with enterprises and foster a fast, people-first culture where AI handles the repetitive so you can focus on solving real problems and shipping meaningful work.
            </div>
            <div className="mb-6">
            Our strength lies in our people, from Boot41 grads to top engineers and experienced founders. We blend talent, innovation and ownership to create a place where learning is personal, impact is shared and engineering excellence thrives.
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={TeamImage}
              alt="Team"
              className="w-full max-w-[534px] h-auto rounded-[16px] object-cover shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default OurStory;