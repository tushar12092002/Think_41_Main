import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./App.css";
import OfferingB from "./pages/OfferingB";
import OfferingA from "./pages/OfferingA";
import CareerPage from "./pages/CareerPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
// import ToggleTabs from "./pages/Test";
import CareerPage2 from "./pages/CareerPage2";
import ScrollToHash from "./components/common/ScrollToHash";

function App() {
  return (
    <div>
      
      <Router>
      <Navbar />
      <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/offeringb" element={<OfferingB></OfferingB>} ></Route>
          <Route path="/offering-a" element={<OfferingA />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/career2" element={<CareerPage2 />} />
          {/* <Route path="/test" element={<TrapezoidGrid />} /> */}
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
