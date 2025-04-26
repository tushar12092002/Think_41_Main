// import React from 'react';
// import './FeatureSection.css';

// const features = [
//   {
//     title: 'Experts Across AI Building Blocks',
//     desc: `We cover the full AI stack—from interfaces and data pipelines to orchestration and infra. With experience across proprietary and open-source systems, we build production-ready solutions tailored for complex enterprise needs.`
//   },
//   {
//     title: 'Co-Engineers for Product Development',
//     desc: `We co-build AI products with your team—plugging into workflows, aligning to roadmaps, and helping ship faster. From model logic to UX, we turn business needs into scalable solutions across the stack.`
//   },
//   {
//     title: 'Industry Solution Partners',
//     desc: `With successful deployments across BFSI, healthcare, and manufacturing, we understand domain-specific demands. Our solutions scale from pilot to production—built with security, compliance, and performance in mind.`
//   }
// ];

// export default function FeatureSection() {
//   return (
//     <div>
//       {/* Subtle grid background */}
//       <div className="bg-[linear-gradient(to_top,#85a4f8_0%,#85a4f8_30%,_#a7bcf6_50%,_transparent_60%,_white_80%)] w-full flex justify-center h-[500px] relative">
//       {/* <div className="absolute inset-0 math-grid pointer-events-none z-0"></div> */}
//       <div className="absolute inset-0 math-grid pointer-events-none z-0"></div>
//       <div className="feature-container container mx-auto px-4 md:px-8 relative z-10 pt-[150px]">
//         <div className="grid md:grid-cols-3 gap-8 ">
//           {features.map((feature, idx) => (
//             <div key={idx} className="feature-card relative bg-white rounded-2xl shadow-lg p-8 min-h-[270px] flex flex-col justify-start "
//             >
//               {/* Diagonal overlay */}
//               <div className="feature-diagonal absolute left-0 top-0 w-full h-[60px] rounded-t-2xl mt-[108px]" />
//               <h3 className="feature-title relative font-semibold text-[#222] mb-4 z-10 font-montserrat text-[24px]">{feature.title}</h3>
//               <p className="feature-desc relative text-gray-700 font-[300] text-base z-10 text-[16px] font-roboto">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//   </div>
//   )
// }


import React from 'react';
import './FeatureSection.css';
import BackgroudTriangle from '../../assets/About/Rectangle.svg'


const features = [
  {
    title: 'Experts Across AI Building Blocks',
    desc: `We cover the full AI stack—from interfaces and data pipelines to orchestration and infra. With experience across proprietary and open-source systems, we build production-ready solutions tailored for complex enterprise needs.`
  },
  {
    title: 'Co-Engineers for Product Development',
    desc: `We co-build AI products with your team plugging into workflows, aligning to roadmaps, and helping ship faster. From model logic to UX, we turn business needs into scalable solutions across the stack.`
  },
  {
    title: 'Industry Solution Partners',
    desc: `With successful deployments across BFSI, healthcare, and manufacturing, we understand domain-specific demands. Our solutions scale from pilot to production—built with security, compliance, and performance in mind.`
  }
];

export default function FeatureSection() {
  return (
    <div className='w-full bg-[linear-gradient(to_top,#a1c0fd_0%,#9aaff3_25%,#99bdfe_35%,transparent_75%,white_95%)] flex justify-center min-h-[500px] relative mx-auto'>
      {/* Subtle grid background */}
      <div className=" ">
      <div className="absolute inset-0 math-grid pointer-events-none z-0"></div>
      {/* <div className="absolute inset-0 pointer-events-none z-0"></div> */}
      <div className="feature-container container P-[120px] relative z-10 pt-[100px] w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] px-[120px] py-12">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card relative bg-white rounded-2xl shadow-lg p-8 min-h-[270px] flex flex-col justify-start "
            >
              <img src={BackgroudTriangle} alt="background-triangle" className='absolute top-0 left-0 w-full h-1/2 object-cover' />
              <h3 className="feature-title relative font-semibold text-[#222] mb-4 z-10 font-montserrat text-[24px]">{feature.title}</h3>
              <p className="feature-desc relative font-[300] text-[16px]  text-base z-10  font-roboto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  </div>
  )
}
