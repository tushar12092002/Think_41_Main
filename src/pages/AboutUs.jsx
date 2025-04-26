import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

import HeroSection from "../components/AboutUs/HeroSection";
import TeamSection from "../components/AboutUs/TeamSection";
import FeatureSection from "../components/AboutUs/FeatureSection";
import LeadersSection from "../components/AboutUs/LeadersSection";
import TimeLine from "../components/AboutUs/TimeLine";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection></HeroSection>
      <TeamSection></TeamSection>
      <FeatureSection></FeatureSection>
      <TimeLine></TimeLine>
      <LeadersSection></LeadersSection>
    </div>
  );
}
