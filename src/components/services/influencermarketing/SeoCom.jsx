import React from "react";

function SeoCom() {
  return (
    <section className="bg-black text-white  flex items-center">
      <div className="max-w-[1440px] w-[90%] mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

        
          <div className="flex flex-col gap-6 max-w-[520px] pt-[200px]">

            <h2 className="font-semibold text-[24px]">
            Influencer Marketing
            </h2>

            <div className="w-[200px] h-[1px] bg-white"></div>

            <p className="text-[18px] font-medium">
Creator Partnerships That Build Trust            </p>

            <p className="text-white leading-relaxed">
We connect brands with the right influencers to increase reach, strengthen credibility, and drive authentic audience engagement. </p>
          </div>

          
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