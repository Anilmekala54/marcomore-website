import React from "react";
import { Clock3, CalendarDays } from "lucide-react";

function Trending() {
  return (
    <section className="bg-black text-white max-w-[1440px] mx-auto w-[90%] py-[60px]">
      <div className="flex justify-center gap-[76px]">
       
        <div className="w-full lg:w-[745px]">
        
          <div className="w-full h-[410px] bg-white rounded-[10px]" />

         
          <div className="flex items-center gap-4 mt-6 text-sm font-semibold text-white">
            <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs">
              EDUCATION
            </span>

            <span className="flex items-center font-semibold gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-white/70 text-xs">
              <Clock3 size={14} />4 MIN
            </span>

            <span className="flex items-center font-semibold gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs text-white/70">
              <CalendarDays size={14} />
              JUN 12, 2025
            </span>
          </div>

         
          <h2 className="text-[20px] font-semibold mt-4 leading-snug">
            Adam Sandler Net Worth: How Much is Adam Sandler Worth in 2025?
          </h2>

          
          <p className="text-[#FFFFFF80] text-[14px] mt-4 leading-relaxed">
            Discover the full story behind Adam Sandler net worth in 2025. From
            iconic Adam Sandler movies to blockbuster Netflix deals, real
            estate, and live tours, explore how the comedy legend built a $440
            million empire and became one...
          </p>
        </div>

        
        <div className="hidden lg:block w-px bg-white/10" />

       
        <div className="w-full lg:w-[450px]">
          <h3 className="text-sm tracking-wider text-white/50 mb-6">
            TRENDING
          </h3>

         
          <div className="flex gap-4 mb-8">
            <div className="w-[130px] h-[84px] bg-white rounded-lg" />
            <div>
              <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-[10px] uppercase font-semibold">
                EDUCATION
              </span>
              <h4 className="text-[14px] font-semibold mt-3 leading-snug">
                Top 10 Richest Countries in Africa (2025)
              </h4>
            </div>
          </div>

          
          <div className="flex gap-4 mb-8">
            <div className="w-[150px] h-[84px] bg-white rounded-lg" />
            <div>
              <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-[10px] uppercase font-semibold">
               entertainment
              </span>
              <h4 className="text-[14px] font-semibold mt-3 leading-snug">
                Who Is the Richest Actor in the World? (2025 Edition)
              </h4>
            </div>
          </div>

         
          <div className="flex gap-4 mb-8">
            <div className="w-[130px] h-[84px] bg-white rounded-lg" />
            <div>
              <span className="bg-[#FFFFFF40] px-[12px] py-[6px] uppercase rounded-full text-[10px] uppercase font-semibold">
                BUSINESS
              </span>
              <h4 className="text-[14px] font-semibold mt-3 leading-snug">
                Top 10 Richest Women in the World 2025
              </h4>
            </div>
          </div>

          
          <div className="border-t border-white/10 pt-8 mt-8">
            <h4 className="text-sm text-[#FFFFFF80] mb-6">
              EXPLORE ALL INSIGHTS TOPIC
            </h4>

            <div className="grid grid-cols-2 gap-y-4 text-[16px] font-semibold text-white">
              <span>Breaking News</span>
              <span>Educational</span>
              <span>Tech</span>
              <span>Marketing</span>
              <span>Entertainment</span>
              <span>Social Media</span>
              <span>Products</span>
              <span>Events</span>
              <span>Business</span>
              <span>Business Directory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
