// import React from 'react'
// import AnimatedTimeline from './AnimatedTimeline'

// export default function TimeLine() {
//   return (
//     <div>
//       {/* Journey Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-left">
//           <h2 className="text-3xl mb-4 font-montserrat text-[40px] font-[600] ml-[120px] mr-[396px]">
//             Where It All Began... and <span className="text-[#3A6BC5]">Where We're Going</span>
//           </h2>

//           {/* Timeline */}
//          <div className="min-h-screen flex items-center justify-center bg-white font-sans">
//   <div className="w-full max-w-6xl p-4">
//     <AnimatedTimeline />
//   </div>
// </div>
//         </div>
//       </section>
//     </div>
//   )
// }


import React from 'react'
import AnimatedTimeline from './AnimatedTimeline'

export default function TimeLine() {
  return (
    <div className='pt-10  bg-white w-full flex justify-center'>
      {/* Journey Section */}
      <section className="max-w-[1440px] px-[120px]">
        <div className="">
          <div className='-ml-[30px]'>
          <h2
            className="text-left mb-4 font-montserrat text-[40px] font-[600] bg-clip-text text-transparent "
            style={{
              backgroundImage: 'linear-gradient(to right, #000000 30%, #0060C7 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Where It All Began... and Where We're Going
          </h2>
          </div>

          {/* Timeline */}
          <div className="min-h-screen flex items-center justify-center bg-white font-montserrat">
            <div className="w-full max-w-6xl p-4">
              <AnimatedTimeline />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
