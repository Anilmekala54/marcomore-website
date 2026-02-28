import React from "react";
import { Clock3, CalendarDays } from "lucide-react";

function Trending() {
  return (
    <section className="bg-black text-white py-[60px]">
      {/* Proper Container */}
      <div className="max-w-[1440px] mx-auto  w-[90%] sm:px-10 lg:w-[90%]">

        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-[76px]">

          {/* ================= LEFT MAIN ARTICLE ================= */}
          <div className="w-full lg:w-[745px]">

            {/* Image */}
            <div className="w-full h-[240px] sm:h-[320px] lg:h-[410px] bg-white rounded-[10px]" />

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm font-semibold">

              <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs">
                EDUCATION
              </span>

              <span className="flex items-center gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs text-white/70">
                <Clock3 size={14} />4 MIN
              </span>

              <span className="flex items-center gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs text-white/70">
                <CalendarDays size={14} />
                JUN 12, 2025
              </span>

            </div>

            {/* Title */}
            <h2 className="text-[18px] sm:text-[20px] lg:text-[20px] font-semibold mt-4 leading-snug">
              Adam Sandler Net Worth: How Much is Adam Sandler Worth in 2025?
            </h2>

            {/* Description */}
            <p className="text-[#FFFFFF80] text-[14px] mt-4 leading-relaxed">
              Discover the full story behind Adam Sandler net worth in 2025.
              From iconic Adam Sandler movies to blockbuster Netflix deals,
              real estate, and live tours, explore how the comedy legend built
              a $440 million empire and became one...
            </p>
          </div>

          {/* Divider (Desktop Only) */}
          <div className="hidden lg:block w-px bg-white/10" />

          {/* ================= RIGHT TRENDING ================= */}
          <div className="w-full lg:w-[450px]">

            <h3 className="text-sm tracking-wider text-white/50 mb-6">
              TRENDING
            </h3>

            {/* Trending Item */}
            {[1,2,3].map((_,index)=>(
              <div key={index} className="flex gap-4 mb-8">

                <div className="w-[120px] sm:w-[130px] h-[84px] bg-white rounded-lg flex-shrink-0" />

                <div>
                  <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-[10px] uppercase font-semibold">
                    EDUCATION
                  </span>

                  <h4 className="text-[14px] font-semibold mt-3 leading-snug">
                    Top 10 Richest Countries in Africa (2025)
                  </h4>
                </div>

              </div>
            ))}

            {/* Explore Section */}
            <div className="border-t border-white/10 pt-8 mt-8">

              <h4 className="text-sm text-[#FFFFFF80] mb-6">
                EXPLORE ALL INSIGHTS TOPIC
              </h4>

              <div className="
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-y-4
                text-[14px]
                sm:text-[16px]
                font-semibold
              ">
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
      </div>
    </section>
  );
}

export default Trending;