import React from "react";
import careerbg1 from "../assets/images/career-bg.png";
import careerMb from "../assets/images/career-mobile-bg.png";
import { Dot } from "lucide-react";
import { NavLink } from "react-router-dom";

function Career() {
  return (
    <section
      className="relative w-full text-white 
                 bg-cover bg-center bg-no-repeat
                 min-h-[450px] md:min-h-[448px]"
      style={{
        backgroundImage: `url(${careerMb})`,
      }}
    >
    
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${careerbg1})`,
        }}
      />

    
      

      
      <div className="relative z-10 max-w-[1440px] w-[90%] mx-auto flex flex-col items-center justify-center text-center gap-5 min-h-[400px] md:min-h-[450px]">
        
        <div className="bg-[#FFFFFF26] backdrop-blur-sm px-4 py-1.5 rounded-full">
          <span className="text-sm font-medium">Let’s Talk</span>
        </div>

        <h1 className="text-[44px] md:text-[52px] lg:text-[60px] font-semibold leading-tight">
          Careers
        </h1>

        <p className="text-white  text-sm sm:text-base">
         Build the future of brands with a team that values strategy, creativity, and disciplined execution.
        </p>

       <ul className="flex gap-4 items-center">
  <li>
    <NavLink to="/" className="hover:text-[#EE5125]">
      Home
    </NavLink>
  </li>

  <li className="flex items-center gap-2">
    <Dot className="text-[#EE5125]" />
    <NavLink to="/careers" className="hover:text-[#EE5125]">
      Careers
    </NavLink>
  </li>
</ul>

      </div>
    </section>
  );
}

export default Career;