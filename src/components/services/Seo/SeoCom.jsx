import React from "react";

function SeoCom() {
  return (
    <section className="bg-black text-white  flex items-center">
      <div className="max-w-[1440px] w-[90%] mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 max-w-[520px] pt-[200px]">

            <h2 className="font-semibold text-[24px]">
              Search Engine Optimization
            </h2>

            <div className="w-[200px] h-[1px] bg-white"></div>

            <p className="text-[18px] font-medium">
            Improve Visibility. Drive Organic Growth.
            </p>

            <p className="text-white leading-relaxed">
We build SEO strategies that help businesses rank higher on search engines, attract qualified traffic, and strengthen long-term digital visibility.            </p>

          </div>

          {/* RIGHT BUTTON */}
          <div className="flex lg:justify-end lg:items-end h-full">

            <button className="uppercase font-semibold text-[12px] px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Scroll to explore
            </button>

          </div>

        </div>

        
       

      </div>
    </section>
  );
}

export default SeoCom;