import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import OurExpertise from "../components/Homepage/OurExpertise";
import OurOfferings from "../components/Homepage/OurOfferings";
import BuisnessUseCase from "../components/Homepage/BuisnessUseCase";
import WhatWeBuilt from "../components/Homepage/WhatWeBuilt";
import Blogs from "../components/Homepage/Blogs";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-start mx-auto overflow-hidden">
        <HeroSection />
        <OurExpertise />
        <OurOfferings />
        <BuisnessUseCase />
        <WhatWeBuilt />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
