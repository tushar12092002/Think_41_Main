// import React from 'react'
// import pic1 from '../../assets/OfferingB/pic1.svg'
// import pic2 from "../../assets/OfferingB/Link3.svg"
// import pic3 from "../../assets/OfferingB/Link4.svg"
// import pic4 from "../../assets/OfferingB/Link5.svg"


// const features=[
//     {
//         icon: pic2,
//     },
//     {
//         icon: pic3
//     },
//     {
//         icon: pic4
//     }
// ]

// const BuildIntegration = () => {
//   return (
//     <section className='flex gap-80 justify-center w-full mt-40 '>
//       <div>
//             <img src={pic1} alt="" />
//       </div>

//       <div>
//      <div className="text-[40px] font-[600] bg-clip-text text-transparent font-montserrat w-2/3"
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//             }}>
//             Build Integrations
//         </div>
//         <p className='w-2/3 mb-[17px] leading-8 font-light font-roboto text-[16px]'>
//             Build bridges between AI and your existing systems for seamless orchestration and interoperability.
//         </p>

//         <div>
//             {features.map((feature,index)=>(
//                 <div className='pb-[17px]' key={index}>
//                     <img src={feature.icon} alt="" />
//                 </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BuildIntegration




import React from 'react'
import pic1 from '../../assets/OfferingB/pic1.svg'
import pic2 from "../../assets/OfferingB/Link3.svg"
import pic3 from "../../assets/OfferingB/Link4.svg"
import pic4 from "../../assets/OfferingB/Link5.svg"

const features = [
    { icon: pic2 },
    { icon: pic3 },
    { icon: pic4 }
]

const BuildIntegration = () => {
  return (
    // <div className='w-full bg-cover' style={{
    //     backgroundImage: `url(${bgImage})`
    //   }}>
    <section
      id='ai_platform'
      className='flex gap-80 justify-center w-full mt-40 bg-no-repeat bg-center bg-cover max-w-[1440px] px-[120px] mx-auto'
      
    >
      <div>
        <img src={pic1} alt="" />
      </div>

      <div>
        <div
          className="text-[40px] font-[600] bg-clip-text text-transparent font-montserrat"
          style={{
            backgroundImage: 'linear-gradient(90deg, #000 0%, #0060C7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Build Integrations
        </div>

        <p className='mb-[17px] leading-8 font-light font-roboto text-[16px]'>
          Build bridges between AI and your existing systems for seamless orchestration and interoperability.
        </p>

        <div>
          {features.map((feature, index) => (
            <div className='pb-[17px]' key={index}>
              <img src={feature.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
    // </div>
  )
}

export default BuildIntegration