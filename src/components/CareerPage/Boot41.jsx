import React from "react";
import FoundationIcon from "../../assets/Career/foundation.svg";
import boot41Img from "../../assets/Career/Boot41-Image.png";
import videoBoot41 from "../../assets/Career/videoBoot41.png";
import TagButton from "../../components/common/TagButton";
import PolygonWebVector from "../../assets/Career/00 polygon web vector updated.svg";

const Boot41 = () => {
  return (
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
        className="w-[1200px] mx-auto flex flex-col gap-[36px] relative"
        id="boot41"
        style={{ minHeight: '520px', zIndex: 1 }}
      >
        {/* 36px gap before Graduate Program tag */}
        <div style={{ height: 36 }} />
        <div className="flex flex-col relative z-[1]" >
          <TagButton text="Graduate Program" />
          <h1 className="text-[40px] font-semibold font-montserrat mb-4 relative z-[2] leading-tight" style={{ marginBottom: '16px',marginTop:'36px' }}>
            <span className="bg-gradient-to-r from-[#000] to-[#0060C7] bg-clip-text text-transparent">
              Boot41: Launch Your Career into the Future of AI
            </span>
          </h1>
          <div
            className="font-roboto text-[16px] text-[#444] font-normal mb-0 leading-[28px]"
            style={{ width: '684px' }}
          >
            Boot41 is our exclusive bootcamp designed to equip engineers and developers with hands-on experience, mentorship, and AI-driven workflows to fast-track their careers
          </div>
        </div>

        {/* Section with images */}
        <div className="flex items-end gap-[26px] w-[1200px] h-[400px] mt-[36px] relative z-[1]">
          <div className="relative w-[750px] h-[400px] rounded-[18px] overflow-hidden flex items-end justify-end bg-white">
            <img src={boot41Img} alt="Bootcamp" className="w-full h-full object-cover rounded-[18px]" />
          </div>
          <div className="relative w-[750px] h-[400px] rounded-[18px] overflow-hidden flex items-end justify-end bg-white">
            <img src={videoBoot41} alt="Boot41 Video" className="w-full h-full object-cover rounded-[18px]" />
            <div className="absolute inset-0 flex flex-col justify-end items-start p-8 bg-black/10 pointer-events-none">
              <div className="w-[56px] h-[56px] rounded-full bg-white/80 flex items-center justify-center mb-4">
                {/* You can add a play icon here if you want */}
              </div>
              <div>
                {/* If you want to add video title/subtitle, add here */}
              </div>
            </div>
          </div>
        </div>

        {/* Subsection Heading and Stats */}
        <div className="flex w-[1200px] h-[66px] justify-between items-center mt-[36px] relative z-[1]">
          {/* Combined all stats into a single div */}
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-left flex-1">
              <span className="text-[31.471px] font-Inter text-black leading-[38px]" style={{ letterSpacing: '-1.067px' }}>
                75%
              </span>
              <div style={{lineHeight: '37.551px', letterSpacing: '-1.067px'}}></div>
              <span className="font-Montserrat text-[16px] font-normal text-black mt-2 leading-[14px]" style={{ letterSpacing: '-0.107px' }}>
                conversion rate to full-time offers
              </span>
            </div>
            <div className="flex flex-col items-left flex-1">
              <span className="text-[31.471px] font-Inter text-black leading-[38px]" style={{ letterSpacing: '-1.067px' }}>
                50+
              </span>
              <div style={{lineHeight: '37.551px', letterSpacing: '-1.067px'}}></div>
              <span className="font-Montserrat text-[16px] font-normal text-black mt-2 leading-[14px]" style={{ letterSpacing: '-0.107px' }}>
                engineers trained across two cohorts
              </span>
            </div>
            <div className="flex flex-col items-left flex-1">
              <span className="text-[31.471px] font-Inter text-black leading-[38px]" style={{ letterSpacing: '-1.067px' }}>
                30+
              </span>
              <div style={{lineHeight: '37.551px', letterSpacing: '-1.067px'}}></div>
              <span className="font-Montserrat text-[16px] font-normal text-black mt-2 leading-[14px]" style={{ letterSpacing: '-0.107px' }}>
                GenAI mini apps built — 1 already in production
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boot41;