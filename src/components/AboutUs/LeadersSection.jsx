import React, { useState } from 'react';
import pic1 from "../../assets/About/1.svg";
import pic2 from "../../assets/About/harshit.svg";
import pic3 from "../../assets/About/3.svg";
import pic4 from "../../assets/About/4.svg";
import pic5 from "../../assets/About/logo12.svg";
import frameToImf from '../../assets/About/frame_to_imf.svg';
import infToFrame from '../../assets/About/inf_to_frame.svg';

const images = [
  {
    name: "Anshuman Singh",
    image: pic1,
    linkedin: "https://www.linkedin.com/in/anshum4n/",
    description:
      "Anshu loves tech and scalability, having built hundreds of products and driven significant growth in the past 13 years. He approaches business problems like chess challenges, drawing from his expertise as a chess master. Outside of work, Anshu enjoys playing carrom and tennis, balancing his strategic mind with fun and competition.",
  },

  {
    name: "Harshit Singhal",
    image: pic2,
    linkedin: "https://www.linkedin.com/in/harshitsinghal01/",
    description:
      "Harshit loves business and has supercharged the growth trajectory for HashedIn, significantly expanding the mid-market segment for Deloitte. Previously, he co-founded Auctus Advisors, a strategy consulting firm acquired by YCP, and worked as a management consultant with SDG. Passionate about history, Harshit also enjoys diving deep into the past to draw lessons for the future.",
  },

  {
    name: "Himanshu Varshney",
    image: pic3,
    linkedin: "https://www.linkedin.com/in/himanshuhv/",
    description:
      "Himanshu is a people person. Along with leading HashedIn, he has championed the creation of an open culture at Deloitte Engineering and was recognized as one of India's Top 25 Trusted Leaders by GPTW. Formerly with Trilogy, Himanshu is also an All-Star sportsman from IIT Guwahati and HashedIn. He remains active in various sports, continually fostering teamwork and spirit.",
  },

  {
    name: "Sripathi Krishnan",
    image: pic4,
    linkedin: "https://www.linkedin.com/in/sripathikrishnan/",
    description:
      "Sri is a tech guy who served as the CTO and MD of Modern Software Engineering at Deloitte US, where he was responsible for technology strategy and GenAI innovation. He previously founded RDBTools, acquired by RedisLabs. Known as a champ for GenAI CoE, Sri is also  loves hosting and attending parties, blending his passion for technology with a zest for life.",
  },
];

export default function LeadersSection() {
  const [expandedIdx, setExpandedIdx] = React.useState(null);
  return (
    <div className="bg-white py-16 w-full flex justify-center">
      <section className="max-w-[1440px] px-12">
        <h2 className="text-4xl font-bold mb-2 font-montserrat text-[40px] ">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #00152E 0%, #003366 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Our
          </span>{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #003366 0%, #0066CC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Leaders
          </span>
        </h2>

        <p className="text-gray-600 mb-12 font-montserrat text-[24px]">Experience in innovation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-15 p-3">
          {images.map((leader, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col items-center rounded-lg bg-[#e5ebf8] relative h-[282px] w-[282px]">
                {/* Image Section */}
                <div className="w-60 h-60 relative mb-4 scale-[1.3] -bottom-[6px] transition-opacity duration-300 group-hover:opacity-0">
                  {/* Mobile: show image+icon or info, Desktop: always show image */}
                  <div className="block md:hidden w-full h-full">
                    {expandedIdx === index ? (
                      <div className="flex flex-col justify-center items-center w-full h-full relative">
                        <div className="bg-[#e5ebf8] rounded-lg w-full h-full flex items-center box-border p-0 overflow-auto relative">
                          <p className="text-xs md:text-[16px] font-roboto text-gray-700 font-light leading-snug p-4 text-left w-full break-words">
                            {leader.description}
                          </p>
                          {/* Back button (bottom-right) */}
                          <button
                            className="absolute bottom-2 right-2 z-10 block md:hidden"
                            onClick={() => setExpandedIdx(null)}
                            aria-label="Back to image"
                          >
                            <img src={infToFrame} alt="Back to image" className="w-9 h-9" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full border-0"
                        />
                        {/* Mobile-only info button, no margin/padding */}
                        <button
                          className="block md:hidden absolute bottom-2 right-2"
                          onClick={() => setExpandedIdx(index)}
                          aria-label="Show leader info"
                        >
                          <img src={frameToImf} alt="Show Info" className="w-8 h-8" />
                        </button>
                      </>
                    )}
                  </div>
                  {/* Desktop: always show image */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="hidden md:block w-full h-full border-0"
                  />
                </div>
                {/* Hover Text (desktop) */}
                <div className="absolute inset-0 flex-col px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                  <p className="text-[16px] font-roboto text-gray-700 font-light leading-snug mt-1">
                    {leader.description}
                  </p>
                </div>
              </div>
              {/* Name + LinkedIn icon below (desktop and mobile) */}
              <div className="flex justify-between items-center w-75 mt-2 px-2">
                <p className="font-medium text-lg font-montserrat pt-2">{leader.name}</p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mr-4'
                >
                  <img
                    src={pic5}
                    alt="LinkedIn"
                    className="w-6 h-6 bg-[#e5ebf8]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
