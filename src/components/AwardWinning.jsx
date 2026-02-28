import React from "react";
import { ChevronRight } from "lucide-react";

function AwardWinning() {
  return (
    <section className="bg-black text-white min-h-screen  pt-[120px]">

      {/* Proper Layout Container */}
      <div className="max-w-[90%] mx-auto w-[90%] pt-[160px] pb-10">

        {/* Responsive Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-end lg:pb-20 xl:pb-0">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <h1 className="text-[32px] sm:text-[44px]  lg:text-[56px] font-semibold ">
              Award-Winning <br></br>
              Media Company
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-6 text-[12px] bg-[#00000040] font-medium text-white/80 tracking-wide">
              <span>WEB DESIGN AGENCY</span>
              <span>MARKETING AGENCY</span>
              <span>PUBLICATION AND MEDIA</span>
            </div>

            {/* Divider */}
            <div className="w-[267px] h-px bg-white/25"></div>

            {/* Buttons */}
            <div className="flex gap-2 lg:gap-4">

              {/* Primary */}
              <button
                className="
                  h-[42px]
                  min-w-[212px]
                  px-6
                  rounded-full
                  text-[12px]
                  font-semibold
                  bg-gradient-to-r from-[#EE5125] to-[#E51F31]
                  flex items-center justify-center gap-2
                  shadow-[0_8px_20px_rgba(229,31,49,0.35)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                REQUEST A PROPOSAL
                <ChevronRight size={16} />
              </button>

              {/* Secondary */}
              <button
                className="
                  h-[42px]
                  px-6
                  rounded-full
                  text-[12px]
                  font-semibold
                  border border-white/50
                  flex items-center justify-center gap-2
                  hover:bg-white/10
                  transition-all duration-300
                "
              >
                LET’S DISCUSS
                <ChevronRight size={16} />
              </button>

            </div>
          </div>

         
          <div
  className="
    flex flex-col gap-4 max-w-[420px]
    lg:ml-auto  lg:mt-12 lg:mt-0

      text-center lg:text-start
    p-6 rounded-xl

    lg:bg-transparent lg:text-white lg:text-left lg:p-0
  "
>
  <h2
    className="
      text-[16px] font-semibold
      border-b
      inline-block w-fit mx-auto

     
    "
  >
    Marcamor Consulting
  </h2>

  <p className="text-[14px] font-medium leading-relaxed">
    We are Marcamor, a media company and an award-winning marketing
    and web design agency.
  </p>

  <p className="text-[14px] font-medium leading-relaxed">
    Our goal is to nurture your vision and provide innovative,
    custom solutions for all your marketing needs. We provide a
    range of customized services including branding, website design
    & development, SEO, marketing consultation, and more.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

export default AwardWinning;