import React from "react";
import TagButton from "../common/TagButton";

const folderIconColor = ["#C8D0DC", "#97A0B0"];
const mockData = [
  {
    title: "Pitch Perfect",
    description:
      "A leading global financial services firm offering a wide range of services including investment banking, commercial banking, financial transaction processing, and asset management.",
    businessNeeds:
      "Wealth managers take multiple meetings with clients, yet satisfaction levels can be inconsistent. When a wealth manager transitions, the new advisor must have full context on the client’s history. With the growing demand for wealth managers and increasing HNI clients, it is critical to reduce workload while making every meeting highly productive.",
    ourSolution:
      "Developed Pitch Perfect, a voice-based AI agent, trained on extensive HNI data, including client call recordings, summaries, meeting notes, and portfolio insights. The AI enhances advisor efficiency, improves client engagement, and provides AI-driven coaching for new and junior advisors.",
    expectedOutcomes: [
      "Reduces training time from enabling rapid onboarding and faster preparation.",
      "Enhances advisor efficiency, client acquisition ROI, and compliance controls.",
    ],
    color: "#D8DDF2",
  },
  {
    title: "SmartLogix",
    description:
      "A logistics and supply chain company specializing in freight forwarding, warehouse automation, and last-mile delivery optimization.",
    businessNeeds:
      "The company faced challenges with route optimization, driver productivity, and real-time tracking across multiple hubs and geographies.",
    ourSolution:
      "Implemented SmartLogix, an AI-powered logistics platform that uses predictive analytics for demand forecasting, real-time fleet tracking, and automated route adjustments based on live traffic and weather.",
    expectedOutcomes: [
      "Reduced fuel costs by 20% through intelligent routing.",
      "Improved delivery SLA adherence by 35%.",
    ],
    color: "#C8D0DC",
  },
  {
    title: "InsightBridge",
    description:
      "A global media conglomerate managing multiple television networks and digital platforms.",
    businessNeeds:
      "Struggled with fragmented viewer analytics across traditional and digital channels, impacting ad targeting and content personalization.",
    ourSolution:
      "Built InsightBridge, a unified analytics engine that aggregates cross-platform data, applies machine learning for audience segmentation, and delivers actionable insights for ad sales and content teams.",
    expectedOutcomes: [
      "Increased ad revenue by 25% through better audience targeting.",
      "Boosted viewer engagement by 40% with personalized content recommendations.",
    ],
    color: "#97A0B0",
  },
];

const ProofInProjects = () => {
  const [index, setIndex] = React.useState(0);
  let visibleTabIdx = 0;

  return (
    <div className="flex flex-col gap-[36px] py-[25px]">
      <TagButton text="Case Studies" />
      <div
        className="bg-clip-text text-transparent text-[40px] font-semibold leading-[53.24px] font-montserrat inline-block w-fit"
        style={{
          backgroundImage: "linear-gradient(90deg, #000 0%, #0060C7 100%)",
        }}
      >
        Proof in Projects
      </div>

      <div className="relative">
        <div className="flex">
          <div
            className={`group rounded-tl-[8px] overflow-hidden hover:cursor-pointer mb-[-8px] z-100`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="186"
              height="44"
              viewBox="0 0 186 44"
              fill="none"
            >
              <path
                d="M0 0.5H148.073C153.348 0.5 158.283 3.09934 161.267 7.44856L186 43.5H0V0.5Z"
                fill="#D8DDF2"
              />
              <foreignObject x="0" y="0" width="186" height="44">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="text-[#000] text-center font-montserrat text-[16px] font-medium leading-[45.543px] tracking-[-0.678px] group-hover:underline"
                >
                  Case Study {index + 1}
                </div>
              </foreignObject>
            </svg>
          </div>
          {mockData.map((data, idx) => {
            if (idx === index) {
              return;
            }
            const color = folderIconColor[visibleTabIdx];
            visibleTabIdx++;
            return (
              <div
                className={`group rounded-tl-[8px] overflow-hidden hover:cursor-pointer mb-[-8px] transform transition-all hover:-translate-y-[4px] ml-[-40px]`}
                style={
                  idx !== index ? { zIndex: 10 - idx * 2 } : { zIndex: 100 }
                }
                key={idx}
                onClick={() => setIndex(idx)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="186"
                  height="44"
                  viewBox="0 0 186 44"
                  fill="none"
                >
                  <path
                    d="M0 0.5H148.073C153.348 0.5 158.283 3.09934 161.267 7.44856L186 43.5H0V0.5Z"
                    fill={color}
                  />
                  <foreignObject x="0" y="0" width="186" height="44">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="text-[#000] text-center font-montserrat text-[16px] font-medium leading-[45.543px] tracking-[-0.678px] group-hover:underline"
                    >
                      Case Study {idx + 1}
                    </div>
                  </foreignObject>
                </svg>
              </div>
            );
          })}
        </div>
        <div
          className={`flex flex-col gap-[16px] z-1000 relative items-center bg-[#D8DDF2] p-[35px] rounded-[8px] rounded-tl-[0px] shadow-md`}
        >
          <div className="flex justify-evenly gap-[40px]">
            <div className="flex flex-col gap-[32px] items-start w-[280px]">
              <p className="text-black text-center font-montserrat text-[32px] not-italic font-medium leading-[45.543px] tracking-[-0.678px]">
                {mockData[index].title}
              </p>
              <p className="text-[#444] font-roboto text-[16px] not-italic font-light leading-[22px]">
                {mockData[index].description}
              </p>
            </div>
            <div className="w-[1px] bg-[#727272] h-[250px]"></div>
            <div className="text-[#444] text-justify font-roboto text-[16px] not-italic font-normal leading-[22px] flex flex-col gap-[13px] w-[360px]">
              <p className="flex max-w-max px-[6.387px] py-[5.921px] pt-[5.921px] pr-[6.387px] pb-[6.767px] pl-[6.767px] justify-center items-center gap-0 rounded-[5.075px] bg-[#FFEBEB]">
                <span className="text-[#FF6B6B] font-roboto text-[10.151px] font-medium leading-[10.151px]">
                  Business Needs
                </span>
              </p>
              <p>{mockData[index].businessNeeds}</p>
            </div>
            <div className="w-[1px] bg-[#727272] h-[250px]"></div>
            <div className="text-[#444] text-justify font-roboto text-[16px] not-italic font-normal leading-[22px] flex flex-col gap-[13px] w-[330px]">
              <p className="flex max-w-max px-[6.387px] py-[5.921px] pt-[5.921px] pr-[6.387px] pb-[6.767px] pl-[6.767px] justify-center items-center gap-0 rounded-[5.075px] bg-[#EBF8DE]">
                <span className="text-[#68A168] font-inter text-[10.517px] font-medium leading-[10.517px]">
                  Our Solutions
                </span>
              </p>
              <p>{mockData[index].ourSolution}</p>
            </div>
          </div>
          <div className="w-full bg-[#727272] h-[1px]"></div>
          <div className="flex flex-col gap-[30px] justify-items-start w-full">
            <div className="rounded-[5.358px] bg-[rgba(122,215,255,0.15)] inline-flex px-[6.412px] py-[6.251px] pt-[6.251px] pb-[7.144px] pl-[7.144px] pr-[6.412px] justify-center items-center gap-[-0.589px] max-w-max">
              <span className="text-[#4899CB] font-inter text-[10.717px] font-medium leading-[10.717px]">
                Expected Outcomes
              </span>
            </div>
            <ul className=" list-disc text-[#222] font-roboto text-[16px] font-normal leading-[15.175px] pl-[20px]">
              {mockData[index].expectedOutcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className="text-[#444] text-justify font-roboto text-[16px] not-italic font-normal leading-[22px]"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofInProjects;
