import React from "react";
import { ChevronRight } from "lucide-react";
import tsrtc from "../assets/images/tsrtc.png"
import turito from "../assets/images/turitobg.png"

function FeaturedWork() {
  const cards = [
    {
      imageBg:tsrtc,
      type:"WEBSITE",
      title:"TSRTC",
      dec:"SEO-led traffic growth for Telangana State Road Transport Corporation by optimizing route-based searches, targeting the “Mahalakshmi Pathakam” scheme, and building structured FAQ-driven content to capture commuter search intent."
    },
     {
       imageBg:turito,
      type:"WEBSITE",
      title:"Turito",
      dec:"Scaled organic traffic through strategic keyword targeting across high-difficulty academic subjects, supported by structured content clusters and solution-driven pages for student search queries."
    },
  ]
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

             <button
  className="group h-[42px] w-full sm:w-[212px] rounded-full text-[10px] lg:text-xs font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] text-white flex items-center justify-center gap-2 "
>
  <span className="relative">
    REQUEST A PROPOSAL
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

             <button
  className="group h-[42px] w-full sm:w-[150px] text-[10px] lg:text-xs rounded-full font-semibold border border-black/50 flex items-center justify-center gap-2 uppercase transition-all duration-300"
>
  <span className="relative">
    CONTACT US
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

            </div>
          </div>

    
          <div className="flex flex-col gap-4 lg:gap-8 xl:gap-14 w-full">

            {cards.map((item, index) => (
              <div
                key={index}
                className="
                  w-full
                  xl:w-[800px]
                  h-[300px]
                  sm:h-[360px]
                  md:h-[420px]
                  lg:h-[480px]
                 
                  text-white
                  rounded-[10px]
                  relative
                  overflow-hidden
                  
                  
                  bg-cover
                  bg-center
                
                  bg-black/70
                "
              style={{backgroundImage: `url('${item.imageBg}')`}}>

               <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
                <div className="absolute bottom-0 w-full p-6 sm:p-8 lg:p-[34px] flex flex-col gap-5">

                  <button className="uppercase font-semibold text-xs px-3 py-1.5 bg-white/10 border border-white/20 rounded-full w-fit">
                    {item.type}
                  </button>

                  <h2 className="font-semibold text-xl sm:text-2xl lg:text-[34px] leading-tight">
                   {item.title}
                  </h2>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">

                    <p className="font-medium text-sm sm:text-base leading-relaxed sm:max-w-[70%] lg:block hidden">
                     {item.dec}
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