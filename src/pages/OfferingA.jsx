import React from "react";
import ProofInProjects from "../components/Offering/ProofInProjects";
import SolutionAccelerator from "../components/Offering/SolutionAccelerator";
import Solutions from "../components/Offering/Solutions";

const OfferingA = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] w-full gap-[36px] px-[120px] py-[25px]">
      <Solutions />
      <SolutionAccelerator />
      <ProofInProjects />
    </div>
  );
};

export default OfferingA;
