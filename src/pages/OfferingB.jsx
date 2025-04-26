// import React from 'react'
// import HeroSectionOff from '../components/Offering/HeroSectionOff'
// // import BuildAI from '../components/OfferingB/BuildAI'
// import BuildIntegration from '../components/Offering/BuildIntegration'
// import PilotProduction from '../components/Offering/PilotProduction'
// import Feature from '../components/Offering/Feature'
// import TagButton from '../components/common/TagButton'
// import ProofInProjects from '../components/Offering/ProofInProjects'

// export default function OfferingB() {
//   return (
//     <div className="flex flex-col justify-center items-center max-w-[1440px] w-full gap-[36px] px-[120px] py-[25px] mx-auto">
      
//         <HeroSectionOff></HeroSectionOff>
//         {/* <BuildAI></BuildAI> */}
//         <Feature></Feature>
//         <BuildIntegration></BuildIntegration>
//         <PilotProduction></PilotProduction>
//         <ProofInProjects></ProofInProjects>
        
//     </div>
//   )
// }


import React from 'react'
import HeroSectionOff from '../components/Offering/HeroSectionOff'
// import BuildAI from '../components/OfferingB/BuildAI'
import BuildIntegration from '../components/Offering/BuildIntegration'
import PilotProduction from '../components/Offering/PilotProduction'
import Feature from '../components/Offering/Feature'
import ProofInProjects from '../components/Offering/ProofInProjects'

export default function OfferingB() {
  return (
    <div>
    <div className="flex flex-col justify-center items-center w-full gap-[36px] py-[25px]">
      
        <HeroSectionOff></HeroSectionOff>
        <Feature></Feature>
        <BuildIntegration></BuildIntegration>
        <PilotProduction></PilotProduction>
        <ProofInProjects></ProofInProjects>
        
      </div>
                
    </div>
  )
}
