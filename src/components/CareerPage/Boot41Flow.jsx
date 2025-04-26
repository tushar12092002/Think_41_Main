import React from "react";
import Polygon from "../../assets/Career/Polygon 28 (1).svg";
import EllipsePenta from "../../assets/Career/Ellipse-penta .png";
import Vector from "../../assets/Career/Vector 2812.svg";
import IconFlag from "../../assets/Career/material-symbols_flag (1).svg";
import IconLink from "../../assets/Career/ic_round-link (1).svg";
import Icon2 from "../../assets/Career/Icon 2.svg";
import IconBackground from "../../assets/Career/career-background.svg";
import Icon1 from "../../assets/Career/icon 1.svg";
import Icon3 from "../../assets/Career/icon 3.svg";


const Boot41Flow = () => (
  <section className="pl-[34px] h-[496px] bg-white relative flex justify-center items-start mt-[64px] w-full">
    <div className="absolute w-[1107px] h-[172px] top-[150px] left-0">
      {/* Light line */}
      <svg width="1107" height="172" viewBox="0 0 1107 172" fill="none" className="absolute top-0 left-0">
        <path opacity="0.5" d="M1 133.524C53.8573 169.871 203.592 211.125 379.671 85.3645C555.751 -40.3961 632.75 -8.64742 767.847 70.8425C853.838 121.439 1014.96 151.261 1106 44.0198" stroke="#F1F1F1" strokeWidth="2" />
      </svg>
      {/* Main blue line */}
      <svg width="1107" height="172" viewBox="0 0 1107 172" fill="none" className="absolute top-0 left-0">
        <path d="M1 133.524C53.8573 169.871 203.592 211.125 379.671 85.3645C555.751 -40.3961 632.75 -8.64742 767.847 70.8425C853.838 121.439 1014.96 151.261 1106 44.0198" stroke="#23619A" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Arrow on the curve */}
      
      {/* Icons on the curve */}
      {/* Icon 1: Flag */}
      <span className="absolute left-[100px] top-[120px] flex items-center justify-center" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
        <img src={Icon1} alt="icon1" style={{ width: '120px', height: '120px', flexShrink: 0 }} />
      </span>
      {/* Icon 2: Custom SVG, centered on the line */}
      <span className="absolute left-[521px] top-[-49px] flex items-center justify-center" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
        <img src={Icon2} alt="icon2" style={{ width: '120px', height: '120px', flexShrink: 0 }} />
      </span>
      {/* Icon 3: Link */}
      <span className="absolute right-[100px] top-[65px] flex items-center justify-center" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
        <img src={Icon3} alt="icon3" style={{ width: '120px', height: '120px', flexShrink: 0 }} />
      </span>
    </div>

    <div className="pl-[34px] w-[1440px] h-[496px] relative">
      <span className="absolute left-[205px] top-[-60px] font-['Roboto'] text-[122.093px] font-semibold bg-gradient-to-b from-[#D6D7DB] to-[#FFF] bg-clip-text text-transparent z-0 pointer-events-none">1</span>
      <span className="absolute left-[630px] top-[260px] font-['Roboto'] text-[122.093px] font-semibold bg-gradient-to-b from-[#D6D7DB] to-[#FFF] bg-clip-text text-transparent z-0 pointer-events-none">2</span>
      <span className="absolute right-0 left-[1100px] top-[-60px] font-['Roboto'] text-[122.093px] font-semibold bg-gradient-to-b from-[#D6D7DB] to-[#FFF] bg-clip-text text-transparent z-0 pointer-events-none" style={{position:'absolute'}}>
        3
        {/* Blur overlay for gradient end */}
        <span
          className="absolute right-[-40px] top-0 h-full w-[80px] pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 80%)",
            filter: "blur(8px)",
            zIndex: 1,
            height: '100%',
            display: 'block'
          }}
        />
      </span>

      <div className="absolute left-0 top-[8px] w-[406px] z-[2] text-left">
        <div className="text-[#23619A] font-['Montserrat'] text-[24px] font-bold mb-0" style={{ marginBottom: '15px', textAlign: 'left' }}>Foundation Track</div>
        <div className="text-[#4D4D4D] font-['Montserrat'] text-[15.852px] font-normal leading-[24.659px] text-left">
          Covers core technical skills in Java, Python, and React. Includes structured assessments and personalized learning paths to strengthen problem-solving, logic, and code quality.
        </div>
      </div>
      <div className="absolute left-[356px] top-[332px] w-[406px] z-[2] text-left">
        <div className="text-[#23619A] font-['Montserrat'] text-[24px] font-bold mb-0" style={{ marginBottom: '15px', textAlign: 'left' }}>GenAI Mini-App Sprint</div>
        <div className="text-[#4D4D4D] font-['Montserrat'] text-[15.852px] font-normal leading-[24.659px] text-left">
          Participants build functional mini applications using Generative AI tools and frameworks. Each sprint spans one week—focused on solving specific real-world problems through individual projects.
        </div>
      </div>
      <div className="absolute right-0 top-[8px] w-[406px] z-[2] text-left">
        <div className="text-[#23619A] font-['Montserrat'] text-[24px] font-bold mb-0" style={{ marginBottom: '15px', textAlign: 'left' }}>Collaborative Project Phase</div>
        <div className="text-[#4D4D4D] font-['Montserrat'] text-[15.852px] font-normal leading-[24.659px] text-left">
          Final teams are formed to work on larger AI-driven solutions. This phase emphasizes collaboration, architecture design, and delivery ownership—mirroring real engineering team dynamics.
        </div>
      </div>
    </div>
  </section>
);

export default Boot41Flow;