import React, { useState } from "react";
import TagButton from "../common/TagButton";
import TabSelector from "./TabSelector";
import { div } from "framer-motion/m";

const tabsMockData = [
  {
    name: "CAI",
    description:
      "AI agents that automate product development—from spoken ideas to deployable code and self-healing test flows.",
    functions: [
      {
        name: "Copilots for Agents",
        description:
          "Real-time assistance during calls—retrieving knowledge, auto-summarizing conversations, and suggesting responses on the fly.",
      },
      {
        name: "Adaptive + Multilingual Personas",
        description:
          "Agents personalize responses based on user tone, behavior, and language—creating seamless, human-like interactions across regions.",
      },
      {
        name: "VAD + Turn Detection",
        description:
          "Understands when to speak and when to listen. Accurately detects speaker shifts, pauses, and intent for smoother conversations.",
      },
    ],
    metrices: [
      {
        value: "< 500ms",
        description: "Ultra low response time for real-time conversations",
      },
      {
        value: "100K+",
        description:
          "Concurrent conversations handled without compromising performance",
      },
      {
        value: "End-to-End Encryption",
        description:
          "Secure enterprise-grade communication across every interaction",
      },
    ],
  },
  {
    name: "Dev41",
    description:
      "AI agents that automate product development—from spoken ideas to deployable code and self-healing test flows.",
    functions: [
      {
        name: "Jotter",
        description:
          "Jotter intelligently understands user conversations and creates well-defined requirements with illustrated concepts.",
      },
      {
        name: "Mapper",
        description:
          "Mapper transforms the requirements into executable project plans and helps you navigate the software development process on autopilot.",
      },
      {
        name: "Forger",
        description:
          "Forger builds, tests, deploys, and iterates over version-controlled applications, always ready for production-scale deployment.",
      },
    ],
    metrices: [
      {
        value: "50%",
        description: "Reduction in requirement gaps and revision cycles",
      },
      {
        value: "40%",
        description: "Faster development with fewer bugs in initial code",
      },
      {
        value: "80%",
        description:
          "Drop in deployment issues through AI-led testing & automation",
      },
    ],
  },
  {
    name: "Recruit41",
    description:
      "AI agents that automate product development—from spoken ideas to deployable code and self-healing test flows.",
    functions: [
      {
        name: "Automated Screening at Scale",
        description:
          "Run thousands of AI-led interviews simultaneously—with structured evaluations for both technical and behavioral skills.",
      },
      {
        name: "AI-Powered Coding & Coding Evaluation",
        description:
          "Assess candidates using customized coding challenges and real-world case studies, scored autonomously and fairly.",
      },
      {
        name: "Flexible Scheduling & Support",
        description:
          "Candidates interview at their convenience with real-time system support—ensuring smooth participation across regions.",
      },
    ],
    metrices: [
      {
        value: "10,000+",
        description: "Candidates screened across 26 colleges in 5 days",
      },
      {
        value: "1,141",
        description: "Concurrent interviews handled with no quality drop",
      },
      {
        value: "Weeks -> Days",
        description: "AI automation reduced evaluation time dramatically",
      },
    ],
  },
];

const SolutionAccelerator = () => {
  const tabs = tabsMockData.map((tab) => tab.name);
  const [selected, setSelected] = useState("Dev41");
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div>
      <div className="flex flex-col gap-[36px]">
        <TagButton text={"Solution Accelerators"} />
        <div className="flex flex-col gap-[27px]">
          <div
            className="bg-clip-text text-transparent text-[40px] font-semibold leading-[53.24px] font-montserrat inline-block w-fit"
            style={{
              backgroundImage: "linear-gradient(90deg, #000 0%, #0060C7 100%)",
            }}
          >
            Flexible And Scalable Platforms
          </div>
          <TabSelector
            tabs={tabs}
            selected={selected}
            setSelected={setSelected}
            setSelectedIndex={setSelectedIndex}
          />
          <div className="w-[524px] text-[#282828] font-roboto text-base font-light leading-[32px]">
            {tabsMockData[selectedIndex].description}
          </div>
        </div>
        <div className="flex gap-[28px]">
          <div className="space-y-4">
            {tabsMockData[selectedIndex].functions.map((func, idx) => (
              <div
                key={idx}
                className="relative rounded-[8px] border border-[#727272] w-[503px] h-[129px] flex-shrink-0 p-4 shadow-sm flex flex-col gap-2 overflow-hidden"
              >
                <div className="w-[140%] h-[120%] top-[-52px] right-[2px] absolute bg-[#E9EEFC] -rotate-[9deg] z-[-10] "></div>
                <h3 className="text-[#282828] font-bold text-[24px] leading-[32px] not-italic font-montserrat border-b border-[#444] pb-1">
                  {func.name}
                </h3>
                <p className="text-[#444] font-light text-[15.266px] leading-[19px] font-roboto">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[694px] h-[423px] flex-shrink-0 rounded-[2.674px] bg-[#E9EEFC]"></div>
        </div>
        <div className="mt-[30px] flex justify-between">
          {tabsMockData[selectedIndex].metrices.map((metrix) => {
            return (
              <div className="w-[357px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="text-[#0060C7] font-semibold text-[32px] leading-[52.798px] tracking-[-1.481px] not-italic font-[Montserrat]">
                    {metrix.value}
                  </div>
                  <div className="text-[#444] font-normal text-[15px] leading-[17px] tracking-[0px] not-italic font-[Montserrat]">
                    {metrix.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionAccelerator;
