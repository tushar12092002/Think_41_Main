import React from "react";
import Offering1 from "../../assets/Career/Offering1.svg";
import Offering2 from "../../assets/Career/Offering2.svg";
import Offering3 from "../../assets/Career/Offering3.svg";

const offerings = [
  {
    icon: Offering1,
    title: (
      <>
        Working On The Edge <br /> Of Innovation
      </>
    ),
    iconStyle: { width: 104, height: 104 },
    cardWidth: 353,
  },
  {
    icon: Offering2,
    title: (
      <>
        Grow With Technologists <br /> Who’ve Done It Before
      </>
    ),
    iconStyle: { width: 112, height: 112 },
    cardWidth: 357,
  },
  {
    icon: Offering3,
    title: (
      <>
        Create IP, Not Just <br /> Output
      </>
    ),
    iconStyle: { width: 112, height: 112 },
    cardWidth: 299,
  },
];

const WhatYouCanExpect = () => (
  <section className="flex flex-col items-center w-full mt-20 mb-14">
    {/* Heading and Subtext aligned with Open Positions */}
    <div className="w-[1200px] flex flex-col items-start">
      <h2
        className="font-montserrat font-semibold text-[40px] leading-[53px] text-transparent bg-clip-text"
        style={{
          width: 483,
          height: 44,
          background: "linear-gradient(90deg, #000 0%, #0060C7 81.7%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What You Can Expect
      </h2>
      <p
        className="font-inter text-[16px] leading-[24px] text-[#050505] mt-[26px] mb-10"
        style={{ width: 580, height: 47 }}
      >
        At Think41, experienced professionals don’t just manage—they build, learn, and lead in ways that stay ahead of the curve.
      </p>
    </div>
    {/* Offerings Row - NO CARD, just flex row */}
    <div
      className="flex flex-row justify-between items-start mt-2"
      style={{ width: 1200 }}
    >
      {offerings.map((off, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-[19px]"
          style={{ width: off.cardWidth, height: 216 }}
        >
          <img
            src={off.icon}
            alt={typeof off.title === "string" ? off.title : undefined}
            style={{ ...off.iconStyle, aspectRatio: "1/1" }}
          />
          <div
            className="font-montserrat font-semibold text-[24px] leading-[30px] text-[#0060C7] text-center"
            style={{
              height: 59,
              letterSpacing: "-0.403px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            {off.title}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhatYouCanExpect;
