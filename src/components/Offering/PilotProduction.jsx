// import React from 'react'
// import Link from '../../assets/OfferingB/Link.svg'
// import Link11 from '../../assets/OfferingB/Link11.svg'
// import Link12 from '../../assets/OfferingB/Link12.svg'
// import pilot from '../../assets/OfferingB/pilot.svg'

// const pilotToProduction=[
//     {
//         icon: Link
//     },
//     {
//         icon: Link11
//     },
//     {
//         icon: Link12
//     }
// ]

// const PilotProduction = () => {
//   return (
//     <section className='w-full flex justify-center h-[510px]'>
//       <div className='flex gap-[25px] mt-20 w-full'>
//         <div className="flex flex-col gap-[16px] w-[615px]">
//             <div className='mt-16'>
//                 <h1 className='text-[40px] font-bold mb-4 bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent font-montserrat'>Take your pilot to production</h1>

//                 <div className='w-full leading-8 font-light font-roboto text-[16px]'>
//                     Move from pilot to production with robust AI deployment
//                     frameworks tailored for the enterprise workflows.
//                 </div>

//             </div>
//             <div className='w-full mt-[16px]'>
//                 {pilotToProduction.map((item, index) => (
//                     <div className='flex gap-[16px]' key={index}>
//                         <img src={item.icon} alt={item.description} className='h-fit'/>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         <div className="flex justify-center items-center w-[542px] h-[236.712px] px-[31.721px] pt-[0.332px] pb-[0.719px] flex-shrink-0 mt-[70px]">
//             <img 
//                 src={pilot}
//                 alt="pilot to production image" 
//                 className='mt-32'
//             />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PilotProduction



import React from 'react'
import Link from '../../assets/OfferingB/Link.svg'
import Link11 from '../../assets/OfferingB/Link11.svg'
import Link12 from '../../assets/OfferingB/Link12.svg'
import pilot from '../../assets/OfferingB/pilot.svg'

const pilotToProduction = [
    { icon: Link },
    { icon: Link11 },
    { icon: Link12 }
]

const PilotProduction = () => {
  return (
    <section id='ai_engineering' className='w-full h-[800px] bg-[url("src/assets/OfferingB/build_ai_back.svg")] bg-cover bg-center bg-no-repeat'>
      
      {/* Container inside for content */}
      <div className='flex gap-[25px] mt-20 w-full max-w-[1440px] px-[120px] mx-auto'>

        <div className="flex flex-col gap-[16px] w-[615px]">
          <div className='mt-16'>
            <h1 className='text-[40px] font-bold mb-4 bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent font-montserrat'>
              Take your pilot to production
            </h1>

            <div className='w-full leading-8 font-light font-roboto text-[16px]'>
              Move from pilot to production with robust AI deployment
              frameworks tailored for the enterprise workflows.
            </div>
          </div>

          <div className='w-full mt-[16px]'>
            {pilotToProduction.map((item, index) => (
              <div className='flex gap-[16px]' key={index}>
                <img src={item.icon} alt="icon" className='h-fit'/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-[542px] h-[236.712px] px-[31.721px] pt-[0.332px] pb-[0.719px] flex-shrink-0 mt-[70px]">
          <img 
            src={pilot}
            alt="pilot to production" 
            className='mt-32'
          />
        </div>

      </div>

    </section>
  )
}

export default PilotProduction