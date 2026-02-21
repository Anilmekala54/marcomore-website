import React from "react";
import { ChevronRight } from "lucide-react";
import before from "../assets/images/before.svg";
import after from "../assets/images/after.svg";
import Simplification from "../assets/images/Simplification.svg";
import simp2 from "../assets/images/simp2.svg";
import simp3 from "../assets/images/simp3.svg";

function MarcamorCreatives() {
  const techStack = [
    "WORDPRESS",
    "WEBFLOW",
    "UI/UX",
    "CUSTOM DESIGN",
    "REACT.JS",
    "ANGULAR.JS",
    "VUE.JS",
    "DJANGO",
    "MAGENTO",
    "BIG COMMERCE",
    "DRUPAL",
  ];

  const services = [
    "LOGO DESIGN",
    "GRAPHIC DESIGN",
    "TYPOGRAPHY",
    "ICONOGRAPHY",
    "BRAND STYLE GUIDE",
    "COLOUR PALETTE",
  ];

  const brand = [
    "BRAND POSITIONING",
    "COMPETITOR ANALYSIS",
    "MARKET TREND ANALYSIS",
    "BRAND VOICE AND TONE",
    "BRAND MESSAGING FRAMEWORK",
    "BRAND VALUE AND PROMISE",
  ];

  const stats = [
    { image: Simplification, label: "1500+ Reviews" },
    { image: simp2, label: "200+ Clients" },
    { image: simp3, label: "8+ Years" },
  ];

  return (
    <section className="bg-[#FFF9F6] text-black py-[80px]">

      
      <div className="max-w-[1440px] mx-auto w-[90%]">

      
      <div className="bg-white rounded-[100px] w-[111px] h-[30px]">
        <p className="text-[14px] font-medium text-[#00000080]/50 px-[12px] py-[6px]">
          Our Services
        </p>
      </div>

      <div className="flex gap-[100px] items-start mt-[40px]">

        {/* LEFT SIDE - STICKY */}
        <div className="flex flex-col gap-[34px] sticky top-[120px] self-start h-fit">

          <h2 className="font-semibold text-[24px]">
            Customized & creative marketing <br />
            solutions for businesses
          </h2>

          <div className="flex justify-center items-end py-[16px] gap-[12px] bg-[#A9A9A9] rounded-[10px] w-[364px] h-[204px]">
            <h2 className="text-[24px] font-bold text-white">
              Leaside Blvd
            </h2>
            <button className="h-[42px] min-w-[162px] px-6 rounded-full text-[12px] font-semibold bg-white flex items-center justify-center gap-2">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-[16px]">
            <button className="h-[42px] w-[212px] px-6 rounded-full text-[12px] font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] flex items-center gap-2 text-white">
              REQUEST A PROPOSAL
              <ChevronRight size={16} />
            </button>

            <button className="h-[42px] px-4 w-[150px] rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
              CONTACT US
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - ALL CARDS */}
        <div className="flex flex-col gap-[20px] flex-1">

          <h2 className="text-[36px] font-bold">
            Marcamor Creative Services
          </h2>

          <div className="flex gap-[20px]">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-[24px] flex-1">

              {/* Web Design */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[560px]">
                <h2 className="text-[24px] font-semibold">
                  Web Design & Development
                </h2>

                <p className="text-[14px]">
         At Marcamor, we redefine what it means to work with a web design agency. Our team of award-winning web designers and developers combines creativity and technical expertise to craft digital experiences that captivate your audience.
                </p>

                <button className="text-left text-[14px] font-medium">
                  Read more
                </button>

                <div className="flex flex-wrap gap-[6px]">
                  {techStack.map((item, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="bg-black/20 h-[1px] mt-auto"></div>

                <div className="flex justify-between">
                  <button className="h-[42px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    WEB DESIGN SERVICES
                    <ChevronRight size={16} />
                  </button>

                  <button className="h-[42px] px-4 rounded-full text-[12px] font-semibold text-black/50 uppercase">
                    VIEW OUR WORK
                  </button>
                </div>
              </div>

              {/* Visual Branding */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[560px]">
                <h2 className="text-[24px] font-semibold">
                  Visual Branding
                </h2>

                <p className="text-[14px]">
                 At Marcamor, we believe that visual branding 
goes far beyond a logo or color palette—it’s the heart of how your company communicates with the world. As a leading branding agency, we excel at translating your core values and messaging into compelling visual elements that leave a memorable mark on your audience.
                </p>

                <button className="text-left text-[14px] font-medium">
                  Read more
                </button>

                <div className="flex flex-wrap gap-[6px]">
                  {services.map((item, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="bg-black/20 h-[1px] mt-auto"></div>

                 <button className="h-[42px] w-[132px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    view more
                    <ChevronRight size={16} />
                  </button>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[300px]">
                <h2 className="text-[24px] font-semibold">
                  Consultation & Audit
                </h2>

                <p className="text-[14px]">
              Tailored solutions for your business through one-on-one personalized sessions.
                </p>

                

                <div className="bg-black/20 h-[1px] mt-auto"></div>

                 <button className="h-[42px] w-[132px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    view more
                    <ChevronRight size={16} />
                  </button>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-[24px] flex-1">

              {/* SEO */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[560px]">
                <h2 className="text-[24px] font-semibold">
                  Search Engine Optimization
                </h2>

                <p className="text-[14px]">
                  Every successful website starts with a carefully crafted SEO strategy. This ensures that your website not only ranks well but also delivers a seamless and relevant experience to users
                </p>

                <button className="text-left text-[14px] font-medium">
                  Read more
                </button>

                <div className="flex gap-4">
                  <img src={before} alt="before" className="w-[167px] h-[74px]" />
                  <img src={after} alt="after" className="w-[167px] h-[74px]" />
                </div>

                <div className="bg-black/20 h-[1px] mt-auto"></div>

                <button className="h-[42px] w-[132px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    see plans
                    <ChevronRight size={16} />
                  </button>
              </div>

              {/* Brand Research */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[560px]">
                <h2 className="text-[24px] font-semibold">
                  Brand Research & Strategy
                </h2>

                <p className="text-[14px]">
            Effective brand research and a well-defined brand strategy are the cornerstones of a successful business. At Marcamor, our award-winning team combines creativity, precision, and industry expertise to unearth the insights that shape your brand’s direction.
                </p>

                <button className="text-left text-[14px] font-medium">
                  Read more
                </button>

                <div className="flex flex-wrap gap-[6px]">
                  {brand.map((item, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-[12px] font-medium text-black bg-[#f5f5f5] rounded-full uppercase"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="bg-black/20 h-[1px] mt-auto"></div>

               <button className="h-[42px] w-[132px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    view more
                    <ChevronRight size={16} />
                  </button>
              </div>

              {/* UI/UX */}
              <div className="bg-white rounded-[10px] flex flex-col px-[24px] py-[34px] gap-[24px] h-[300px]">
                <h2 className="text-[24px] font-semibold">
                  User Interface & User Experience
                </h2>

                <p className="text-[14px]">
               User-centric designs ensuring intuitive and satisfying digital experiences.
                </p>

               

                <div className="bg-black/20 h-[1px] mt-auto"></div>

                 <button className="h-[42px] w-[132px] px-4 rounded-full text-[12px] font-semibold border border-black/50 flex items-center gap-2 uppercase">
                    view more
                    <ChevronRight size={16} />
                  </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-20 items-center mt-20">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            <img src={item.image} alt="stat" className="w-[110px] h-[110px]" />
            <p className="text-[16px] font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default MarcamorCreatives;
