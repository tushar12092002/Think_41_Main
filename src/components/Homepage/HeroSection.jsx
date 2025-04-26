import React from "react";
import { CTAButton } from "../common/CTA";
import HeroAnimation from "./HeroAnimation";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center w-[99vw] h-[calc(100vh-64px)] overflow-hidden relative">
      <HeroAnimation />
      <div className="flex w-[762px] flex-col items-center gap-[36px] z-10">
        <div className="flex flex-col items-center gap-[16px] self-stretch">
          <div className="relative font-montserrat bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent text-center text-[50px] not-italic font-semibold leading-[66.55px]">
            The Future of Enterprise Runs on AI. We
            <span className="rounded-l-[12px] bg-[rgba(115,102,254,0.25)]">
              {" "}
              Engineer It.
            </span>
            <div className="absolute top-[43px] right-[-125px] rounded-[8px_8px_8px_0px] bg-[#7366FE] flex w-[156px] h-[26px] px-[6px] py-[3px] justify-center items-center">
              <div className="relative text-white text-center font-montserrat text-[16px] font-medium leading-[24px] flex w-[144px] h-[20px] flex-col justify-center flex-shrink-0">
                <span>Full-StackGenAI</span>
                <div className="absolute w-[4px] h-[71px] bg-[#7366FE] top-[13px] left-[-6px]"></div>
              </div>
            </div>
          </div>
          <div className="flex w-[727px] p-[12px_27px_8px_28px] justify-center items-center">
            <p className="w-[672px] flex-shrink-0 text-[#686C75] text-center font-montserrat text-[16px] not-italic font-normal leading-[25.6px]">
              A decade of deep tech expertise applied to building
              enterprise-ready AI products and agentic systems that perform in
              the real world.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-[16px]">
          <CTAButton>Experience Center</CTAButton>
          <CTAButton variant="secondary">See it in action</CTAButton>
        </div>
      </div>
    </div>
  );
}
