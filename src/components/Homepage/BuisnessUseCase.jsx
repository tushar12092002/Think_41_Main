import React, { useState } from "react";
import TagButton from "../common/TagButton";
import Rectangle from "../../assets/Home/Rectangle.png";

const cardA = ["Business Leaders", "Technology Leaders", "Talent Leaders"];
const cardB = [
  [
    {
      heading: "Contact Center AI",
      text: "Automate frontline conversations with voice and text agents that speak your brand. Multilingual, CRM-integrated, and built for self-service and assisted support alike.",
    },
    {
      heading: "Agentic Platforms",
      text: "Deploy modular agents to drive operations from workflows and escalations to document processing. Built for business teams that want control without deep tech lift.",
    },
  ],
  [
    {
      heading: "CQ -",
      subHeading: "Code Intelligence",
      text: "Accelerate software delivery with GenAI-assisted code generation, auto-documentation, and debug automation. Ideal for teams looking to reduce cycle time without compromising quality.",
    },
    {
      heading: "TQ -",
      subHeading: "Testing Intelligence",
      text: "Enable self-healing test frameworks with AI-driven case generation, automated QA, and intelligent error detection—cutting manual effort and speeding up deployment confidence.",
    },
  ],
  [
    {
      heading: "Recruitment Copilot",
      text: "Run 1,000+ structured interviews at scale using AI-powered assessments—screen for skill, culture fit, and learning agility with minimal overhead.",
    },
    {
      heading: "Training Agents",
      text: "Deliver adaptive onboarding and skills development through conversational agents. Personalized learning paths, feedback loops, and built-in tracking—all powered by GenAI.",
    },
  ],
];

const BuisnessUseCase = () => {
  const [cardIndex, setCardIndex] = React.useState(1);
  const handleClick = (index) => {
    setCardIndex(index);
  };
  return (
    <div
      style={{ backgroundImage: `url(${Rectangle})` }}
      className={`flex items-center justify-center w-full h-[823px] bg-cover bg-center`}
    >
      <div className="flex flex-col items-start gap-[36px] w-[1224px]">
        <TagButton text="Customized For You" />
        <div className="flex gap-[12px]">
          <div className="w-[576px] bg-gradient-to-r from-black to-t-blue-1 bg-clip-text text-transparent font-montserrat text-[40px] not-italic font-semibold leading-[133.1%]">
            Business Use Cases
          </div>
          <div className="px-[36px] py-[62px] text-black font-roboto text-[20px] not-italic font-light leading-[160%] tracking-[-0.4px] bg-white rounded-l-lg flex w-[636px] h-[220px] p-[19px_24px] justify-center items-center gap-[10px]">
            Explore how Think41's GenAI stack delivers value across roles from
            engineering and ops to talent and CX. Use cases built to drive
            scale, speed, and smarter decision-making.
          </div>
        </div>
        <div className="flex gap-[102px]">
          <div className="flex flex-col justify-between">
            {cardA.map((card, index) => (
              <div
                className={`p-[18px] w-[486px] cursor-pointer ${
                  index === cardIndex
                    ? "bg-[#F0F7FF] border-[4px] border-[#C7DDFF]"
                    : "bg-[#FAFAFAF5] border-[4px] border-[#FAFAFAF5]"
                } rounded-[2px]`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {card}
              </div>
            ))}
          </div>
          <div className="flex gap-[24px]">
            {cardB[cardIndex].map((card, i) => (
              <div
                className="w-[306px] h-[279px] rounded-[8px] bg-[rgba(255,255,255,0.56)] backdrop-blur-[2px] p-[23px] pt-[23px]"
                key={i}
              >
                <p className="text-black font-montserrat text-[24px] font-semibold leading-normal mb-[18px]">
                  {card.heading}
                  <span className="text-black font-montserrat text-[16px] font-semibold leading-none">
                    {card.subHeading && (
                      <span className="pl-[4px]">{card.subHeading}</span>
                    )}
                  </span>
                </p>
                <p className="text-black font-roboto text-[16px] font-light leading-[160%] tracking-[-0.32px]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessUseCase;
