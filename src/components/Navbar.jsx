import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/marcamore-logo.svg";
import insights from "../assets/images/Insights.svg";
import ServicesMegaMenu from "./ServicesMegaMenu";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full h-[94px]
        transition-all duration-300
        ${
          isScrolled
            ? "bg-black/35 backdrop-blur-[54px]"
            : "bg-black"
        }
      `}
    >
      
      <div className="max-w-[90%] mx-auto w-full h-full flex items-center justify-between">

        
        <img
          src={logo}
          alt="marcamore logo"
          className="h-12 w-auto"
        />

        {/* Right Section */}
        <div className="flex items-center gap-10">

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-white">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 bg-white/10 rounded-full font-semibold"
                  : "hover:text-gray-300 transition font-semibold"
              }
            >
              Home
            </NavLink>

            <ServicesMegaMenu />

            <NavLink
              to="/about"
              className="hover:text-gray-300 transition font-semibold"
            >
              About Us
            </NavLink>

            <NavLink
              to="/work"
              className="hover:text-gray-300 transition font-semibold"
            >
              Work
            </NavLink>

            <NavLink
              to="/contact"
              className="hover:text-gray-300 transition font-semibold"
            >
              Contact
            </NavLink>

            <NavLink
              to="/resources"
              className="hover:text-gray-300 transition font-semibold"
            >
              Resources
            </NavLink>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-8 w-px bg-white/30"></div>

          {/* CTA Button */}
          <button
            className="
              h-10
              min-w-[181px]
              px-6
              rounded-full
              text-white text-sm font-semibold
              bg-gradient-to-r from-[#EE5125] to-[#E51F31]
              flex items-center justify-center
              shadow-[0_8px_20px_rgba(229,31,49,0.35)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Request a Proposal
          </button>

        </div>
      </div>

      {/* Floating Insights Badge */}
      <div className="absolute right-[4%] top-[90px] z-40">
        <img
          src={insights}
          alt="Insights badge"
          className="w-[112px] h-[58px]"
        />
      </div>
    </nav>
  );
}

export default Navbar;