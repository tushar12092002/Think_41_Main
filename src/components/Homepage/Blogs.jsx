import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TagButton from "../common/TagButton";
import blogImage from "../../assets/Home/blogImage.jpeg";
import blogImage2 from "../../assets/Home/blogImage2.jpeg";
import { div } from "framer-motion/client";

const blogsMockData = [
  {
    name: "Explore Technology Blogs",
    blogs: [
      {
        title: "Gen AI: The Challenge of Scaling with Data Security & Privacy",
        description:
          "Wondering how to turn your Gen AI proof of concept into a full-scale solution—without compromising on data privacy and security? You're not alone.",
        author: "Anusha Aravapalli",
        date: "October 31, 2024",
        minuteRead: "5 min read",
        image: blogImage,
      },
      {
        title: "AI That Works: Tackling Uncertainty, Driving Progress",
        description:
          "Worried about AI making the wrong call when it matters most? You're not alone. But what if AI could not only deliver dependable insights—but get smarter every time it does? Let's explore how.",
        author: "Anusha Aravapalli",
        date: "September 31, 2024",
        minuteRead: "7 min read",
        image: blogImage2,
      },
    ],
    description:
      "Stay ahead of the curve with curated insights on tech, AI, and innovation",
  },
  {
    name: "Discover Cloud & Infrastructure",
    blogs: [
      {
        title: "Serverless 2.0: What’s Next in Cloud-Native Development",
        description:
          "From scaling to cost optimization, serverless architecture is evolving. Here’s what you need to know about the next phase.",
        author: "Deepak Rao",
        date: "August 15, 2024",
        minuteRead: "6 min read",
        image: blogImage,
      },
      {
        title: "The Future of Hybrid Cloud: Flexibility Meets Control",
        description:
          "Balancing public and private infrastructure has never been easier—or more critical. Explore the power of hybrid cloud.",
        author: "Megha Kapoor",
        date: "July 22, 2024",
        minuteRead: "5 min read",
        image: blogImage2,
      },
    ],
    description:
      "Explore the future of scalable cloud infrastructure and digital transformation",
  },
  {
    name: "AI for Business Strategy",
    blogs: [
      {
        title: "Leveraging AI for Competitive Advantage in 2025",
        description:
          "AI isn’t just a tech trend—it’s a business strategy. Discover how leading firms are using AI to stay ahead.",
        author: "Rohit Sinha",
        date: "June 10, 2024",
        minuteRead: "8 min read",
        image: blogImage,
      },
      {
        title: "Predictive Analytics: The Secret to Smarter Business Decisions",
        description:
          "Data-driven decisions are only as good as the insights behind them. Learn how predictive analytics is changing the game.",
        author: "Kavya Sharma",
        date: "May 18, 2024",
        minuteRead: "6 min read",
        image: blogImage2,
      },
    ],
    description:
      "Insights on how AI transforms business operations, strategy, and decision-making",
  },
];

const Blogs = () => {
  const [blogIndex, setBlogIndex] = useState(0);
  console.log(blogImage);
  const increaseIndex = () => {
    if (blogIndex < blogsMockData.length - 1) {
      setBlogIndex(blogIndex + 1);
    }
  };

  const decreaseIndex = () => {
    if (blogIndex > 0) {
      setBlogIndex(blogIndex - 1);
    }
  };

  return (
    <div className="pt-[18px] pb-[40px] px-[120px] w-full flex flex-col gap-[40px] items-start font-montserrat">
      <TagButton text="Blogs" />
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent text-center text-[50px] not-italic font-semibold leading-[66.55px]">
              {blogsMockData[blogIndex].name}
            </h2>
            <p className="text-[#6B7280] text-[16px] not-italic font-normal leading-[24px]">
              {blogsMockData[blogIndex].description}
            </p>
          </div>
          <div className="flex gap-[16px]">
            <IoIosArrowBack
              className={`cursor-pointer text-5xl drop-shadow p-3 ${
                blogIndex === 0 ? "bg-gray-200 text-gray-800" : "bg-white"
              } rounded-full font-light`}
              onClick={decreaseIndex}
            />
            <IoIosArrowForward
              className={`cursor-pointer text-5xl drop-shadow p-3 ${
                blogIndex === blogsMockData.length - 1
                  ? "bg-gray-200 text-gray-800"
                  : "bg-white"
              } rounded-full font-light`}
              onClick={increaseIndex}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        {blogsMockData[blogIndex].blogs.map((blog, i) => (
          <div className="flex flex-col gap-[18px] w-[515px] ">
            <div
              style={{ backgroundImage: `url(${blog.image})` }}
              className={`h-[278px] flex-shrink-0 rounded-[16px] bg-center bg-cover bg-no-repeat relative`}
            >
              <div className="absolute bottom-0 bg-[#ffffff4f] h-[80px] pt-[20px] pl-[20px] pr-[34px] flex justify-between w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className="text-white font-montserrat text-[16px] font-semibold leading-none">
                    {blog.author}
                  </p>
                  <p className="text-white font-montserrat text-[10px] font-normal leading-none">
                    {blog.date} &#8226; {blog.minuteRead}
                  </p>
                </div>
                <div className="flex w-[110px] h-[23px] px-[15px] py-[4px] justify-center items-center gap-[10px] flex-shrink-0 text-[12px] rounded-[4px] border border-[#EFF4FF]/50 bg-white">
                  <span className="text-black font-montserrat text-[12px] font-normal leading-none">
                    Data Privacy
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-[#1A202C] font-montserrat text-[16px] font-semibold leading-none">
                {blog.title}
              </h3>
              <p className="text-[#686B6E] font-montserrat text-[14px] font-normal leading-none">
                {blog.description}
              </p>
              <p className="text-[#4F4F4F] font-montserrat text-[14px] font-semibold leading-none flex gap-[5px] cursor-pointer">
                <span>Read Post</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M9.75 1.5C9.75 1.08579 9.41421 0.749999 9 0.749999L2.25 0.749999C1.83579 0.749999 1.5 1.08579 1.5 1.5C1.5 1.91421 1.83579 2.25 2.25 2.25H8.25V8.25C8.25 8.66421 8.58579 9 9 9C9.41421 9 9.75 8.66421 9.75 8.25L9.75 1.5ZM1 9.5L1.53033 10.0303L9.53033 2.03033L9 1.5L8.46967 0.969669L0.46967 8.96967L1 9.5Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="9"
          viewBox="0 0 24 9"
          fill="none"
        >
          <ellipse cx="4.76471" cy="4.5" rx="4.76471" ry="4.5" fill="black" />
          <ellipse cx="18.5294" cy="4.5" rx="4.76471" ry="4.5" fill="#D9D9D9" />
        </svg>
      </div>
    </div>
  );
};

export default Blogs;
