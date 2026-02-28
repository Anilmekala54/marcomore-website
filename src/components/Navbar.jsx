import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/marcamore-logo.svg";
import insights from "../assets/images/Insights.svg";
import ServicesMegaMenu from "./ServicesMegaMenu";
import menu from "../assets/images/menu1.svg";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); 

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
        ${isScrolled ? "bg-black/35 backdrop-blur-[54px]" : "bg-black"}
      `}
    >
      <div className="max-w-[90%] mx-auto w-full h-full flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="marcamore logo" className="h-12 w-auto" />

        
        <div className="hidden xl:flex items-center gap-10">
          <div className="flex items-center gap-12 text-[16px] font-medium text-white">

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

            <NavLink to="/about" className="hover:text-gray-300 transition font-semibold">
              About Us
            </NavLink>

            <NavLink to="/work" className="hover:text-gray-300 transition font-semibold">
              Work
            </NavLink>

            <NavLink to="/contact" className="hover:text-gray-300 transition font-semibold">
              Contact
            </NavLink>

            <NavLink to="/resources" className="hover:text-gray-300 transition font-semibold">
              Resources
            </NavLink>
            
          </div>

          <div className="h-8 w-px bg-white/30"></div>

         <NavLink to='/requestproposal' onClick={() => setOpen(false)}>
            <button
            className="
              
              h-10 min-w-[181px] px-6 rounded-full
              text-white text-sm font-semibold
              bg-gradient-to-r from-[#EE5125] to-[#E51F31] cursor-pointer
            "
          >
            Request a Proposal
          </button>
        </NavLink>
        </div>

      
        <div className="xl:hidden z-50">
          <img
            src={menu}
            className="w-[44px] h-[44px] cursor-pointer"
            alt="menu"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div
        className={`
          xl:hidden
          bg-black text-white
          transition-all duration-300
          overflow-hidden
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-sm font-medium">

          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/work" onClick={() => setOpen(false)}>
            Work
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          <NavLink to="/resources" onClick={() => setOpen(false)}>
            Resources
          </NavLink>

        <NavLink to='/requestproposal' onClick={() => setOpen(false)}>
            <button
            className="
              mt-4
              h-10 min-w-[181px] px-6 rounded-full
              text-white text-sm font-semibold
              bg-gradient-to-r from-[#EE5125] to-[#E51F31]
            "
          >
            Request a Proposal
          </button>
        </NavLink>
        </div>
      </div>

      
      <div className="absolute right-[4%] top-[94px] z-40 ">
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