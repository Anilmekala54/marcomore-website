import React from "react";
import { ChevronRight } from "lucide-react";

function FeaturedWork() {
  return (
    <section className="bg-[#FFF9F6] text-black py-16 lg:py-20">

      
      <div className="max-w-[90%] mx-auto">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        
          <div
            className="
              w-full
             
              flex flex-col gap-6
              lg:sticky lg:top-[120px]
              self-start
            "
          >
            <div className="bg-white rounded-full px-4 py-1.5 w-fit">
              <p className="text-sm font-medium text-[#00000080]">
                Featured Work
              </p>
            </div>

            <h2 className="lg:text-[24px]  text-[20px]  font-medium leading-relaxed capitalize">
              Our goal is to nurture your vision  and provide innovative,
              custom  solutions for all your marketing  needs.
            </h2>

            <div className="lg:flex lg:flex-col flex sm:flex-row lg:flex-col gap-4">

              <button className="h-[42px] w-full sm:w-[212px]   rounded-full text-[10px] lg:text-xs font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] text-white flex items-center justify-center gap-2 hover:scale-105 transition">
                REQUEST A PROPOSAL
                <ChevronRight size={16} />
              </button>

              <button className="h-[42px] w-full sm:w-[150px] text-[10px] lg:text-xs rounded-full text-xs font-semibold border border-black/50 flex items-center justify-center gap-2 uppercase hover:bg-black hover:text-white transition">
                CONTACT US
                <ChevronRight size={16} />
              </button>

            </div>
          </div>

    
          <div className="flex flex-col gap-4 lg:gap-8 xl:gap-14 w-full">

            {[1,2,3,4,5,6,7,8].map((_, index) => (
              <div
                key={index}
                className="
                  w-full
                  xl:w-[800px]
                  h-[300px]
                  sm:h-[360px]
                  md:h-[420px]
                  lg:h-[480px]
                  bg-[#A9A9A9]
                  text-white
                  rounded-[10px]
                  relative
                  overflow-hidden
                "
              >

                {/* Overlay Content */}
                <div className="absolute bottom-0 w-full p-6 sm:p-8 lg:p-[34px] flex flex-col gap-5">

                  <button className="uppercase font-semibold text-xs px-3 py-1.5 bg-white/10 border border-white/20 rounded-full w-fit">
                    Website
                  </button>

                  <h2 className="font-semibold text-xl sm:text-2xl lg:text-[34px] leading-tight">
                    Safeway <br />
                    (Albertsons)
                  </h2>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">

                    <p className="font-medium text-sm sm:text-base leading-relaxed sm:max-w-[60%] lg:block hidden">
                      Website Redesign & B2B Customer Experience for a National Grocery Brand
                    </p>

                    <button className="h-[42px] px-6 rounded-full text-xs font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition w-fit">
                      READ OUR CASE
                      <ChevronRight size={16} />
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;