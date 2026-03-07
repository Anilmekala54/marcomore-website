import React from "react";
import workBg from "../../assets/images/workBg.png";
import workMobileBg from "../../assets/images/workMbBg.png";

function Header() {
  return (
    <div className="relative text-white lg:min-h-[350px] min-h-[500px]">

      
      <div
        className="hidden lg:block absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${workBg})` }}
      />

      
      <div
        className="lg:hidden absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${workMobileBg})` }}
      />

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto w-[90%] py-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">

          <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold">
            Our Latest Work
          </h2>

          <p className="text-[14px] lg:text-[16px] ">
            Our goal is to nurture your vision and provide innovative, custom
            solutions for all your marketing needs.
          </p>

        </div>
      </div>

    </div>
  );
}

export default Header;