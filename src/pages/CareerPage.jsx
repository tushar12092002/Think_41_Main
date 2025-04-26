import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CareerHero from "../components/CareerPage/CareerHero";
import OurStory from "../components/CareerPage/OurStory";
import Boot41 from "../components/CareerPage/Boot41";
import Boot41FlowFrame from "../components/CareerPage/Boot41FlowFrame";
import LifeAtThink41 from "../components/CareerPage/LifeAtThink41";
// Import the ellipse SVG
import ellipse from "../assets/Career/Ellipse.svg";

const CareerPage = () => {
  const boot41Ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#boot41" && boot41Ref.current) {
      boot41Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <CareerHero boot41Ref={boot41Ref} />
      {/* 36px gap between CareerHero and OurStory */}
      {/* <div style={{ height: 36 }} /> */}
      <OurStory />
      {/* 36px gap between OurStory and Boot41 */}
      <div ref={boot41Ref}>
        <Boot41 />
      </div>
      {/* 36px gap between Boot41 and Boot41FlowFrame */}
      <div style={{ height: 36 }} />
      <Boot41FlowFrame />
      <LifeAtThink41 />
    </div>
  );
};

export default CareerPage;
