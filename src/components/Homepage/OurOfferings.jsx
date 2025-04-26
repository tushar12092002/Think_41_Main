import React from "react";
import TagButton from "../common/TagButton";

const svg1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <path
      d="M9 34.875C7.80653 34.875 6.66193 34.4009 5.81802 33.557C4.97411 32.7131 4.5 31.5685 4.5 30.375C4.5 29.1815 4.97411 28.0369 5.81802 27.193C6.66193 26.3491 7.80653 25.875 9 25.875M45 34.875C46.1935 34.875 47.3381 34.4009 48.182 33.557C49.0259 32.7131 49.5 31.5685 49.5 30.375C49.5 29.1815 49.0259 28.0369 48.182 27.193C47.3381 26.3491 46.1935 25.875 45 25.875M15.75 15.75V9M38.25 15.75V9"
      stroke="#0060C7"
      stroke-width="3.375"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.75 9C16.9926 9 18 7.99264 18 6.75C18 5.50736 16.9926 4.5 15.75 4.5C14.5074 4.5 13.5 5.50736 13.5 6.75C13.5 7.99264 14.5074 9 15.75 9Z"
      stroke="#0060C7"
      stroke-width="3.375"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.25 9C39.4926 9 40.5 7.99264 40.5 6.75C40.5 5.50736 39.4926 4.5 38.25 4.5C37.0074 4.5 36 5.50736 36 6.75C36 7.99264 37.0074 9 38.25 9Z"
      stroke="#0060C7"
      stroke-width="3.375"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.375 15.75H23.625C17.262 15.75 14.0783 15.75 12.1028 17.7952C10.1273 19.8405 10.125 23.1322 10.125 29.7157C10.125 36.2992 10.125 39.591 12.1028 41.6362C14.0783 43.6815 17.262 43.6815 23.625 43.6815H25.9312C27.7132 43.6815 28.341 44.0482 29.5695 45.3847C30.9263 46.863 33.0278 48.8363 34.929 49.2953C37.6313 49.9478 37.935 49.0455 37.332 46.4692C37.161 45.7357 36.7312 44.5635 37.1835 43.8795C37.4377 43.497 37.8585 43.4025 38.7023 43.2135C40.032 42.9165 41.13 42.4305 41.8973 41.6362C43.875 39.5887 43.875 36.2992 43.875 29.7157C43.875 23.1322 43.875 19.8405 41.8973 17.7952C39.9218 15.75 36.738 15.75 30.375 15.75Z"
      stroke="#0060C7"
      stroke-width="3.375"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.375 33.75C22.6575 35.1157 24.7005 36 27 36C29.2995 36 31.3425 35.1157 32.625 33.75M20.2702 24.75H20.25M33.7702 24.75H33.75"
      stroke="#0060C7"
      stroke-width="3.375"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const svg2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <g clip-path="url(#clip0_7916_13229)">
      <path
        d="M52.8592 19.0029C48.5482 15.4475 43.1349 13.5021 37.5469 13.5H37.125V16.875H37.5469C41.9479 16.875 46.2459 18.2874 49.7745 20.8777C48.6499 23.6685 46.9262 26.1783 44.7254 28.2299C42.5245 30.2815 39.9 31.8248 37.0372 32.751C37.0957 32.0704 37.125 31.3841 37.125 30.6922C37.125 17.4926 26.3841 6.75 13.1827 6.75C11.6151 6.75 10.0507 6.90188 8.53031 7.20225L7.42162 7.42162L7.20225 8.53031C6.9013 10.0628 6.74984 11.621 6.75 13.1827C6.75 20.142 9.75375 26.3976 14.5091 30.7766C13.8499 32.9756 13.51 35.2579 13.5 37.5536L13.5017 37.5553C13.5054 43.141 15.4507 48.5517 19.0046 52.8609L19.7454 53.7553L20.8457 53.3841C24.6601 52.0976 28.0883 49.8695 30.813 46.9063C33.5376 43.943 35.4706 40.3402 36.4331 36.4314C40.3416 35.4687 43.944 33.5356 46.907 30.8109C49.87 28.0863 52.0977 24.6582 53.3841 20.844L53.7553 19.7437L52.8592 19.0029ZM20.8777 49.7745C18.2792 46.2276 16.8773 41.9455 16.875 37.5486C16.875 36.0096 17.0657 34.5178 17.3863 33.0733C21.9034 36.1138 27.3267 37.5129 32.751 37.0372C31.8248 39.9 30.2815 42.5245 28.2299 44.7254C26.1783 46.9262 23.6685 48.6499 20.8777 49.7745ZM33.5509 33.5526C32.6137 33.6831 31.6609 33.7489 30.6922 33.75C26.1107 33.75 21.8869 32.2245 18.4629 29.6797C19.9058 26.1897 22.2662 23.1552 25.2939 20.898L23.1339 18.3161C19.9949 20.682 17.4814 23.7789 15.8119 27.3375C13.6704 25.1007 12.0639 22.4075 11.1131 19.4604C10.1623 16.5133 9.89196 13.389 10.3224 10.3224C11.27 10.1891 12.2258 10.1231 13.1827 10.125C24.5227 10.125 33.75 19.3522 33.75 30.6922C33.75 31.662 33.6825 32.6154 33.5509 33.5526Z"
        fill="#0060C7"
      />
      <path
        d="M33.75 6.75C35.614 6.75 37.125 5.23896 37.125 3.375C37.125 1.51104 35.614 0 33.75 0C31.886 0 30.375 1.51104 30.375 3.375C30.375 5.23896 31.886 6.75 33.75 6.75Z"
        fill="#0060C7"
      />
      <path
        d="M45.5625 47.25C47.4265 47.25 48.9375 45.739 48.9375 43.875C48.9375 42.011 47.4265 40.5 45.5625 40.5C43.6985 40.5 42.1875 42.011 42.1875 43.875C42.1875 45.739 43.6985 47.25 45.5625 47.25Z"
        fill="#0060C7"
      />
      <path
        d="M3.375 37.125C5.23896 37.125 6.75 35.614 6.75 33.75C6.75 31.886 5.23896 30.375 3.375 30.375C1.51104 30.375 0 31.886 0 33.75C0 35.614 1.51104 37.125 3.375 37.125Z"
        fill="#0060C7"
      />
    </g>
    <defs>
      <clipPath id="clip0_7916_13229">
        <rect width="54" height="54" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const OurOfferingCard = ({ svg, text, subtext, link }) => {
  return (
    <div className="w-[562px] h-[350px] flex-shrink-0 rounded-[20px] border border-[#D9D9D9] bg-[#FFF] px-[50px] pt-[65px]">
      {svg}
      <div>
        <h3 className="text-[#16012C] font-montserrat text-[24px] not-italic font-medium leading-[60px] tracking-[-0.72px]">
          {text}
        </h3>
        <p className="text-[#64607D] font-roboto text-[16px] not-italic font-light leading-[30px] tracking-[-0.32px]">
          {subtext}
        </p>
        <p className="mt-[50px] text-t-blue-1 flex items-center gap-[4px] font-semibold font-montserrat">
          Know More{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M1.28292 9.02283L10.977 2.28499M10.977 2.28499L4.99896 1.56872M10.977 2.28499L9.85016 8.5484"
                stroke="#0060C7"
                stroke-width="1.5"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

const OurOfferings = () => {
  return (
    <div className="bg-[linear-gradient(to_top,_#85a4f8_0%,_#85a4f8_20%,_#a7bcf6_30%,_transparent_50%,_white_100%)] w-full flex justify-center h-[744px] relative">
      <div className="absolute inset-0 math-grid pointer-events-none z-0"></div>
      <div className="flex w-[1200px] flex-col items-start gap-[36px] relative z-10">
        <div className="flex flex-col gap-[36px] font-montserrat w-[811px] mt-[36px]">
          {/* Out Offerings button */}
          <TagButton text={"Our Offerings"} />
          <div className="flex flex-col gap-[16px]">
            <div className="bg-[linear-gradient(90deg,_#000_0%,_#0060C7_100%)] bg-clip-text text-transparent text-[40px] font-semibold leading-[53.24px] self-stretch">
              Operationalize AI. The Right Way.
            </div>
            <div className="text-[#444] text-[16px] font-normal leading-[28px]">
              We build enterprise grade AI agents and co-engineer
              production-grade AI systems that go beyond pilots —and into
              day-to-day ops.
            </div>
          </div>
        </div>
        <div className="flex gap-[76px]">
          <OurOfferingCard
            svg={svg1}
            text="Build Enterprise AI Agents"
            subtext="Domain-specific, task-oriented AI agents are built to plug into your enterprise tools, workflows, and data."
          />
          <OurOfferingCard
            svg={svg2}
            text="Develop AI Products"
            subtext="AI features are co-developed with your teams to accelerate GTM and ship faster with shared ownership and tight engineering alignment."
          />
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
