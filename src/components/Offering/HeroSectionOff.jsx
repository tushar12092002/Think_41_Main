// import React from 'react';
// import pic1 from "../../assets/OfferingB/Our_Offering_Tag.svg"
// import pic2 from "../../assets/OfferingB/Background_Co_engineer.svg"
// // import pic3 from "../../assets/OfferingB/img.svg"

// const HeroSectionOff = () => {
//     return (
//       <section className="w-full h-[500px] flex items-center justify-center">
//         <div className="flex flex-col items-center text-center">
//             <div className='self-start ml-60'>
//                 <img src={pic1} alt="" />
//             </div>
          
//         <div className="text-[50px] font-bold bg-clip-text text-transparent w-2/3 font-montserrat "
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//             }}>
//             Build AI Into Your Product, Stack, and Workflow
//           </div>
          
//           <div className="w-[440px] flex flex-col gap-2 self-end mt-4">
//             <img src={pic2} alt="" />
//             <p className="font-light text-start font-roboto text-[16px]">
//               We co-engineer AI features with your team—from infra to 
//               front-end—to ship production-grade capabilities, faster.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   };  

// export default HeroSectionOff

//Working
// import React from 'react';
// import pic1 from "../../assets/OfferingB/Our_Offering_Tag.svg"
// import pic2 from "../../assets/OfferingB/Background_Co_engineer.svg"
// import pic3 from "../../assets/OfferingB/hero_bg.svg"

// // import pic3 from "../../assets/OfferingB/img.svg"

// const HeroSectionOff = () => {
//     return (
//       <section className="w-full h-[500px] flex items-center justify-center bg-no-repeat bg-center bg-[length:100%_auto]"
//       style={{ backgroundImage: `url(${pic3})` }}
//     >
//       <div className="flex flex-col w-full px-4 max-w-[1440px]">
//         {/* Tag aligned left */}
//         <div className="mb-4 ml-20">
//           <img src={pic1} alt="Tag" />
//         </div>
    
//         {/* Main heading split into two lines */}
//         <div className="w-full text-center">
//           <h1
//             className="text-[50px] font-bold bg-clip-text text-transparent font-montserrat"
//             style={{
//               backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             Build AI Into Your Product,
//           </h1>
//           <h1
//             className="text-[50px] font-bold bg-clip-text text-transparent font-montserrat"
//             style={{
//               backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             Stack and Workflow
//           </h1>
//         </div>
    
//         {/* Bottom description */}
//         <div className="w-full flex justify-end mt-6 pr-20">
//           <div className="w-[440px] flex flex-col gap-2 items-start">
//             <img src={pic2} alt="Badge" />
//             <p className="font-light text-start font-roboto text-[16px]">
//               We co-engineer AI features with your team—from infra to front-end—to ship production-grade capabilities, faster.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>  
//     );
//   };  

// export default HeroSectionOff



import React from 'react';
import pic1 from "../../assets/OfferingB/Our_Offering_Tag.svg";
import pic2 from "../../assets/OfferingB/Background_Co_engineer.svg";
import pic3 from "../../assets/OfferingB/hero_bg.svg";

const HeroSectionOff = () => {
  return (
    <section
      className="w-full h-[500px] md:h-[500px] h-[600px] flex items-center justify-center bg-no-repeat bg-center bg-[length:100%_auto] bg-cover"
      style={{ backgroundImage: `url(${pic3})` }}
    >
      <div className="flex flex-col w-full px-4 max-w-[1440px]">
        {/* Tag aligned left */}
        <div className="mb-4 ml-5 md:ml-20">
          <img src={pic1} alt="Tag" className="w-[150px] md:w-auto" />
        </div>

        {/* Main heading split into two lines */}
        <div className="w-full text-center px-2">
          <h1
            className="text-[32px] md:text-[50px] font-bold bg-clip-text text-transparent font-montserrat leading-tight"
            style={{
              backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Build AI Into Your Product,
          </h1>
          <h1
            className="text-[32px] md:text-[50px] font-bold bg-clip-text text-transparent font-montserrat leading-tight"
            style={{
              backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Stack, and Workflow
          </h1>
        </div>

        {/* Bottom description */}
        <div className="w-full flex justify-center md:justify-end mt-6 pr-0 md:pr-20">
          <div className="w-full max-w-[440px] flex flex-col gap-2 items-start px-4 md:px-0">
            <img src={pic2} alt="Badge" className="w-[180px] md:w-auto" />
            <p className="font-light text-start font-roboto text-[14px] md:text-[16px]">
              We co-engineer AI features with your team—from infra to front-end—to ship production-grade capabilities, faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOff;
