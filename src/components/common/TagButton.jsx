import React from "react";

const TagButton = ({ text }) => {
  return (
    <div className=" z-[100px] px-[18px] py-[5px] flex items-center justify-center gap-[10px] rounded-[4px] bg-[#FFF] shadow-[0px_36px_10px_0px_rgba(225,_165,_253,_0),_0px_23px_9px_0px_rgba(225,_165,_253,_0.01),_0px_13px_8px_0px_rgba(225,_165,_253,_0.05),_0px_6px_6px_0px_rgba(225,_165,_253,_0.09),_0px_1px_3px_0px_rgba(225,_165,_253,_0.1)] max-w-max">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M10.5 1.5V7.5L15.5 4.5L10.5 1.5Z"
          fill="black"
          fill-opacity="0.7"
        />
        <path
          d="M14.5 7.5V11.5H2.5V3.5H7.5V2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V11.5C1.5 11.7652 1.60536 12.0196 1.79289 12.2071C1.98043 12.3946 2.23478 12.5 2.5 12.5H6.5V14.5H4.5V15.5H12.5V14.5H10.5V12.5H14.5C14.7652 12.5 15.0196 12.3946 15.2071 12.2071C15.3946 12.0196 15.5 11.7652 15.5 11.5V7.5H14.5ZM9.5 14.5H7.5V12.5H9.5V14.5Z"
          fill="black"
          fill-opacity="0.7"
        />
      </svg>
      <span className="text-[rgba(0,_0,_0,_0.7)] text-center text-[16px] font-normal leading-[19.392px] capitalize">
        {text}
      </span>
    </div>
  );
};

export default TagButton;
