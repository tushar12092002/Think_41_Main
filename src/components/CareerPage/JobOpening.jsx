import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Boot41Banner from "./Boot41Banner";

const JobOpening = () => {
  // Dummy data for 3 job cards
  const jobs = [
    {
      title: "Job Designation",
      experience: "1-2 y",
      location: "On Site (Bengaluru)",
      responsibility: "Highlight Responsibility",
    },
    {
      title: "Job Designation",
      experience: "1-2 y",
      location: "On Site (Bengaluru)",
      responsibility: "Highlight Responsibility",
    },
    {
      title: "Job Designation",
      experience: "1-2 y",
      location: "On Site (Bengaluru)",
      responsibility: "Highlight Responsibility",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full mt-12">
      {/* Header Row */}
      <div className="flex justify-between items-center w-[1200px] mb-8">
        <h2
          className="font-montserrat font-semibold text-[40px] leading-[53px] bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent"
          style={{
            width: "320px",
            height: "44px",
          }}
        >
          Open <span className="font-montserrat">positions</span>
        </h2>
        {/* Filter */}
        <div className="flex items-center gap-4">
          <span className="text-[#111] font-inter text-[14px] font-medium leading-[22.5px]">
            Filter by
          </span>
          <div
            className="flex items-center justify-center border border-black/10 rounded-[5px] px-[11px] py-[6.75px] w-[227px] cursor-pointer"
          >
            <span className="text-[15px] font-inter text-black/60 mr-2">
              Department
            </span>
            <FiChevronDown size={18} className="text-black/60" />
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col gap-6 w-[1202px]">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center w-[1200px] h-[154px] rounded-[8px] bg-[#E2EBF9] px-8"
          >
            {/* Job Info */}
            <div>
              <div
                className="font-roboto font-medium text-[24px] leading-[22.5px] text-[#111] mb-2"
                style={{
                  width: "176px",
                  height: "19px",
                  letterSpacing: "-0.004px",
                }}
              >
                {job.title}
              </div>
              <div className="flex items-center gap-2 text-[#111] text-[15px] font-inter mb-2">
                <FaRegCalendarAlt className="inline mr-1" />
                <span>{job.experience}</span>
                <span className="mx-1">|</span>
                <FaMapMarkerAlt className="inline mr-1" />
                <span>{job.location}</span>
              </div>
              <ul className="list-disc ml-4 text-[#111] text-[15px] font-inter">
                <li>{job.responsibility}</li>
              </ul>
            </div>
            {/* Apply Now Button */}
            <div>
              <Boot41Banner onlyButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpening;