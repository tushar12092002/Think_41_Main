"use client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/About/logo.png";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-999 w-full py-4 px-[120px] transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-[#ffffffc4]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-[1200px]">
        <Link to="/" className="flex items-center">
          <img
            src={logo || "/placeholder.svg"}
            alt="Think41 Logo"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 font-montserrat text-[16px] font-[600]">
          <Link to="/about" className="relative group text-black">
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <div
            className="relative"
            onMouseLeave={() => setIsOfferingsOpen(false)}
          >
            <button
              className="flex items-center relative group text-black"
              onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
              onMouseEnter={() => setIsOfferingsOpen(true)}
            >
              Offerings
              <ChevronDown className="ml-1 h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>

            <div
              className={`absolute top-full left-0 bg-white rounded shadow-lg py-2 w-64 z-20 transition-opacity duration-200 ${
                isOfferingsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Offering Dropdown Items */}
              <Link
                to="/offering-a"
                className="flex items-center justify-between px-4 py-3 text-[16px] font-roboto font-[400] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Solutions
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover/item:rotate-[-45deg]" />
              </Link>
              <Link
                to="/offeringb#ai_platform"
                className="flex items-center justify-between px-4 py-3 text-[16px] font-roboto font-[400] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Platforms
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
              </Link>
              <Link
                to="/offeringb#ai_engineering"
                className="flex items-center justify-between px-4 py-3 text-[16px] font-roboto font-[400] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Engineering
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover/item:rotate-45" />
              </Link>
            </div>
          </div>

          <Link to="/career" className="relative group text-black">
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/blogs" className="relative group text-black">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/contact" className="relative group text-black">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
