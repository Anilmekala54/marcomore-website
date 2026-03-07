import React from "react";
import { ChevronRight } from "lucide-react";

import Simplification from "../assets/images/Simplification.svg";
import simp2 from "../assets/images/simp2.svg";
import simp3 from "../assets/images/simp3.svg";
import Clients1 from "./Clients1";
import tsrtc from "../assets/images/tsrtc.png"

function MarcamorCreatives() {
  const techStack = [
    "Search Engine Optimization",
    "Email Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Social Media Marketing",
    "Affiliate Marketing",
    "Influencer Marketing",
    "YouTube Marketing",
    "WhatsApp Marketing",
  ];

  const bussinessConsulting = [
    "Startup and SME Consulting",
    "Go To Market Strategy",
    " Franchise Consulting",
    "Sales and Revenue Strategy",
    "Business Process Optimization",
  ];

  const productDev = [
    "SaaS Product Development",
    "MVP Building for Startups",
    "No Code and Low Code Development",
    "ERP and CRM Integration",
  ];

  const brand = [
    "Brand Strategy",
    "Logo Design",
    "Brand Identity and Guidelines",
    "Packaging Design",
    "Corporate Communication Design",
    "UI/UX Design",
  ];

  const app = [
    "Custom Web and App Design",
    "E-commerce Development",
    "Mobile App Development Android iOS",
    "API Integration",
    "Maintenance and AMC Plans",
  ];

  const performanceAnalyst = [
    "Marketing Analytics and BI Reporting",
    "GTM and Analytics",
    "Heatmap and Behavior Tracking",
    " KPI Dashboard Setup",
    "Conversion Optimization",
  ];

  const marketing = [
    "Market Feasibility Studies",
    "Consumer Behavior Analysis",
    "Competitor Analysis",
    " Brand Perception Studies",
    "Industry and Trends Reports",
    "Customer Segmentation and Process Building",
    " Product Testing and Feedback Loops",
    " Geographical Market Entry Studies",
  ];

  return (
    <>
      <section className="bg-[#FFF9F6] text-black py-[80px]">
        <div className="max-w-[90%] mx-auto flex flex-col">

          <div className="bg-white rounded-[100px] w-[111px] h-[30px] flex items-center justify-center">
            <p className="text-[14px] font-medium text-black/60">
              Our Services
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mt-[40px]">

            
            <div className="flex flex-col gap-[34px] lg:sticky lg:top-[120px] self-start h-fit w-full lg:w-auto">

              <h2 className="font-medium text-[20px] capitalize">
                Customized & creative marketing <br />
                solutions for businesses
              </h2>

   <div 
  className="relative flex flex-col gap-3 py-[16px] px-4 rounded-[10px] w-full lg:w-[364px] min-h-[204px] bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${tsrtc})` }}
>
  
<div className="bg-black/10 rounded-2xl absolute inset-0 "></div>
 
  <div className="mt-auto flex justify-between">
    <h2 className="text-[20px] lg:text-[24px] font-bold text-white">
    TSRTC
  </h2>
    
    <button className="group inline-flex items-center gap-2 px-3 h-[34px] rounded-full text-[12px] font-semibold bg-white">
      <span className="relative">
        READ OUR CASE
        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
      <ChevronRight size={16} />
    </button>

    

  </div>
</div>

              <div className="flex gap-[16px] w-full lg:w-auto">

              <button
  className="group inline-flex items-center gap-2 h-[42px] px-6 rounded-full text-[12px] font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] text-white"
>
  <span className="relative">
    REQUEST A PROPOSAL
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

               <button
  className="group inline-flex self-start items-center gap-2 h-[42px] px-4 rounded-full text-[12px] font-semibold border border-black/50 uppercase"
>
  <span className="relative">
    CONTACT US
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

              </div>

            </div>

            
            <div className="flex flex-col gap-[20px] flex-1 w-full">

              <h2 className="text-[28px] lg:text-[36px] font-bold">
                Marcamor Creative Services
              </h2>

              {/* CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

               
                <div className="bg-white rounded-[10px] w-full flex flex-col px-[24px] py-[34px] gap-[24px]">

                  <h2 className="lg:text-[24px] text-[20px]  font-semibold">
                    Digital Marketing
                  </h2>

                  <p className="text-[14px]">
                    At Marcamor, we design integrated digital growth systems
                    that combine organic visibility, paid acquisition, and
                    audience engagement into one measurable framework.
                  </p>

                  <div className="flex flex-wrap gap-[4px]">
                    {techStack.map((item, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="bg-black/40 h-[1px] mt-auto"></div>

               <button
  className="group inline-flex self-start items-center gap-2 px-4 h-10 rounded-full text-[12px] font-semibold border border-black/50 uppercase hover:bg-black hover:text-white transition-all duration-300"
>
  <span className="relative">
    Digital Marketing
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

                </div>

                {/* CARD */}
                <div className="bg-white rounded-[10px] w-full flex flex-col px-[24px] py-[34px] gap-[24px]">

                  <h2 className="lg:text-[24px] text-[20px] font-semibold">
                    Business Consulting
                  </h2>

                  <p className="text-[14px]">
                    Our consulting division focuses on structured business
                    growth, operational efficiency, and scalable revenue models.
                  </p>

                  <div className="flex flex-wrap gap-[4px]">
                    {bussinessConsulting.map((item, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="bg-black/20 h-[1px] mt-auto"></div>

                 <button
  className="group inline-flex self-start items-center gap-2 px-4 h-10 rounded-full text-[12px] font-semibold border border-black/50 uppercase hover:bg-black hover:text-white transition-all duration-300"
>
  <span className="relative">
    Business Consulting
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

                </div>

                {/* CARD */}
                <div className="bg-white rounded-[10px] w-full flex flex-col px-[24px] py-[34px] gap-[24px]">

                  <h2 className="lg:text-[24px] text-[20px] font-semibold">
                    Technology and Product Development
                  </h2>

                  <p className="text-[14px]">
                    We build scalable SaaS platforms, MVPs, and enterprise-grade
                    systems that support innovation and operational growth.
                  </p>

                  <div className="flex flex-wrap gap-[4px]">
                    {productDev.map((item, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="bg-black/20 h-[1px]"></div>

                 <button
  className="group inline-flex self-start items-center gap-2 px-4 h-10 rounded-full text-[12px] font-semibold border border-black/50 uppercase hover:bg-black hover:text-white transition-all duration-300"
>
  <span className="relative">
    Technology and Product Development
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

                </div>

                {/* CARD */}
                <div className="bg-white rounded-[10px] w-full flex flex-col px-[24px] py-[34px] gap-[24px]">

                  <h2 className="lg:text-[24px] text-[20px] font-semibold">
                    Branding and Design
                  </h2>

                  <p className="text-[14px]">
                    We build structured brand ecosystems that align strategy,
                    identity, and communication into a cohesive market presence.
                  </p>

                  <div className="flex flex-wrap gap-[4px]">
                    {brand.map((item, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="bg-black/20 h-[1px]"></div>

                  <button
  className="group inline-flex self-start items-center gap-2 px-4 h-10 rounded-full text-[12px] font-semibold border border-black/50 uppercase hover:bg-black hover:text-white transition-all duration-300"
>
  <span className="relative">
    Branding and Design
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>

                </div>

              </div>

              {/* LAST CARD */}
              <div className="bg-white rounded-[10px] w-full flex flex-col px-[24px] py-[34px] gap-[24px] mt-[24px]">

                <h2 className="lg:text-[24px] text-[20px] font-semibold">
                  Market Research and Consumer Insights
                </h2>

                <p className="text-[14px]">
                  We conduct structured research to uncover consumer behavior,
                  competitive landscapes, and emerging market opportunities.
                </p>

                <div className="flex flex-wrap gap-[4px]">
                  {marketing.map((item, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="bg-black/20 h-[1px]"></div>

               <button
  className="group inline-flex self-start items-center gap-2 px-4 h-10 rounded-full text-[12px] font-semibold border border-black/50 uppercase hover:bg-black hover:text-white transition-all duration-300"
>
  <span className="relative">
    Market Research and Consumer Insights
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Clients1 />
    </>
  );
}

export default MarcamorCreatives;