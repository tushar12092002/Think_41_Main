import React from "react";
import Apply1 from "../../assets/Career/Apply1.svg";
import Apply2 from "../../assets/Career/Apply2.svg";
import Apply3 from "../../assets/Career/Apply3.svg";

const Boot41Banner = ({ onlyButton = false }) => (
  <div
    className={onlyButton ? "" : "flex items-center justify-between w-full box-border"}
    style={
      onlyButton
        ? {}
        : {
            borderRadius: "8px",
            border: "1px solid #EBEBEB",
            background: "#FFF",
            boxShadow:
              "0px 40px 11px 0px rgba(0, 0, 0, 0.00), 0px 26px 10px 0px rgba(0, 0, 0, 0.01), 0px 14px 9px 0px rgba(0, 0, 0, 0.05), 0px 6px 6px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
            display: "flex",
            height: "84px",
            padding: "16px 23px",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            alignSelf: "stretch",
            marginTop: "18px",
          }
    }
  >
    {!onlyButton && (
      <div className="flex items-center gap-0 min-w-0">
        {/* Three avatars as per design */}
        <span
          className="w-[58px] h-[51px] flex-shrink-0 rounded-[58px] flex items-center justify-center z-10"
        >
          <img src={Apply1} alt="Apply1" className="w-[58px] h-[51px] rounded-[58px] object-cover" />
        </span>
        <span
          className="w-[58px] h-[51px] flex-shrink-0 rounded-[58px] flex items-center justify-center z-20"
          style={{ marginLeft: "-24px" }}
        >
          <img src={Apply2} alt="Apply2" className="w-[58px] h-[51px] rounded-[58px] object-cover" />
        </span>
        <span
          className="w-[58px] h-[51px] flex-shrink-0 rounded-[58px] flex items-center justify-center z-30"
          style={{ marginLeft: "-24px" }}
        >
          <img src={Apply3} alt="Apply3" className="w-[58px] h-[51px] rounded-[58px] object-cover" />
        </span>
        <span className="ml-4 text-[#4D4D4D] font-montserrat text-[20px] font-medium truncate">
          Kickstart Your AI Career.
        </span>
      </div>
    )}
    <button className="flex flex-row items-center w-[167px] h-[40px] px-[6px] py-[5px] pr-[11px] gap-[10px] rounded-[20px] bg-[#0060C7] border-none cursor-pointer">
      <span className="relative flex items-center justify-center w-[31px] h-[29px] mr-[6px]">
        {/* Ellipse SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="29"
          viewBox="0 0 31 30"
          fill="none"
          className="absolute left-0 top-0"
        >
          <ellipse cx="15.5" cy="15" rx="15.5" ry="14.5" fill="white" />
        </svg>
        {/* Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute left-[3.5px] top-[2.5px]"
          style={{ width: 24, height: 24 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.47 5.46934C13.6106 5.32889 13.8012 5.25 14 5.25C14.1988 5.25 14.3894 5.32889 14.53 5.46934L20.53 11.4693C20.6705 11.61 20.7493 11.8006 20.7493 11.9993C20.7493 12.1981 20.6705 12.3887 20.53 12.5293L14.53 18.5293C14.4613 18.603 14.3785 18.6621 14.2865 18.7031C14.1945 18.7441 14.0952 18.7662 13.9945 18.7679C13.8938 18.7697 13.7938 18.7512 13.7004 18.7135C13.607 18.6757 13.5222 18.6196 13.451 18.5484C13.3797 18.4772 13.3236 18.3923 13.2859 18.2989C13.2482 18.2055 13.2296 18.1055 13.2314 18.0048C13.2332 17.9041 13.2552 17.8048 13.2962 17.7128C13.3372 17.6208 13.3963 17.538 13.47 17.4693L18.19 12.7493H4C3.80109 12.7493 3.61032 12.6703 3.46967 12.5297C3.32902 12.389 3.25 12.1983 3.25 11.9993C3.25 11.8004 3.32902 11.6097 3.46967 11.469C3.61032 11.3284 3.80109 11.2493 4 11.2493H18.19L13.47 6.52934C13.3295 6.38871 13.2507 6.19809 13.2507 5.99934C13.2507 5.80059 13.3295 5.60997 13.47 5.46934Z"
            fill="#0060C7"
          />
        </svg>
      </span>
      <span className="text-white font-montserrat text-[16px] font-semibold">Apply Now</span>
    </button>
  </div>
);

export default Boot41Banner