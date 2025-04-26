// import React from 'react'
// import a from '../../assets/OfferingB/a.svg'
// import b from '../../assets/OfferingB/B.svg'
// import c from '../../assets/OfferingB/I.svg'
// import framer from '../../assets/OfferingB/framer.svg'


// const features=[
//     {
//         icon: a
//     },
//     {
//         icon: c
//     },
//     {
//         icon: b
//     }
// ]

// const BuildFeatures = () => {
//   return (
//     <section className='flex w-full justify-between mx-[200px] mt-[68px]'>
//       <div>
//         <div>
//             <div className="text-[40px] font-bold bg-clip-text text-transparent w-2/3 font-montserrat"
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//             }}>
//                 Build AI Features
//             </div>
//             <p className='w-2/3 font-light font-roboto text-[16px]'>
//                 Embed AI capablities into new or existing products to
//                 deliver smarter features and intelligent user experiences.
//             </p>
//         </div>
//         <div>
//             {features.map((feature,index)=>(
//                 <div className='mt-[17px]' key={index}>
//                     <img src={feature.icon} alt="" />
//                 </div>
//             ))}
//         </div>
//       </div>

//       <div>
//         <div className='mr-30'>
//             <img src={framer} alt="" />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BuildFeatures


import React from 'react'
import a from '../../assets/OfferingB/a.svg'
import b from '../../assets/OfferingB/B.svg'
import c from '../../assets/OfferingB/I.svg'
import framer from '../../assets/OfferingB/framer.svg'


const features=[
    {
        icon: a
    },
    {
        icon: c
    },
    {
        icon: b
    }
]

const BuildFeatures = () => {
    return (
      <section className='w-full bg-[url("src/assets/Common/background_01.svg")] text-white h-[500px] bg-[length:100%_auto]'>
        <div className='flex items-center justify-center h-full'>
          <div className='flex justify-between items-center w-full max-w-[1200px] px-8'>
            {/* Left Side */}
            <div>
              <div>
                <div className="text-[40px] md:text-[50px] text-white font-bold w-2/3">
                  Build AI Features
                </div>
                <p className='w-2/3 font-light mt-2'>
                  Embed AI capabilities into new or existing products to
                  deliver smarter features and intelligent user experiences.
                </p>
              </div>
              <div>
                {features.map((feature, index) => (
                  <div className='mt-[17px]' key={index}>
                    <img src={feature.icon} alt="" />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Side */}
            <div>
              <img src={framer} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BuildFeatures;