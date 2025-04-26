import React from 'react';
import team from "../../assets/About/teams.svg";
import { Link } from 'react-router-dom';

export default function TeamSection() {
  return (
    <div className="bg-white flex justify-center w-full">
      <section className="pb-10 flex flex-col-reverse md:flex-row md:items-end items-center justify-start max-w-[1440px] px-4 sm:px-8 md:px-[120px] gap-y-8 md:gap-x-[40px]">

        {/* Left: Text + Button  */}
        <div className="flex flex-col gap-[16px] justify-between max-w-[560px] md:max-w-[auto] text-left md:w-[40%]">
          <p className="font-[300] text-[14px] sm:text-[16px] leading-[1.6] font-roboto p-0">
            We are a young, well-funded, full-stack GenAI organization building systems and software that enable better collaboration between humans and AI, with the goal of enhancing human experience and creating a more fulfilling work environment.
          </p>

          <p className="font-[300] text-[14px] sm:text-[16px] leading-[1.6] font-roboto p-0">
            Our tools, systems, and platforms support this goal, helping us operate as one team that delivers higher-quality results, faster.
          </p>

          <Link
            to="/career"
            className="px-6 py-3 bg-[#3A6BC5] text-white font-semibold rounded-md shadow-md hover:bg-[#2A4B8D] transition-all text-[14px] sm:text-[16px] w-fit font-roboto md:mt-8"
          >
            Join Our Team
          </Link>
        </div>

        {/* Right: Image */}
        <div className="md:w-[60%] self-start h-full ">
          <img src={team} alt="team-image" className='h-full w-full object-cover rounded-md'/>
        </div>

      </section>
    </div>
  );
}






