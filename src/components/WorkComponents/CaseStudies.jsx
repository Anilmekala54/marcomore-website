import React from "react";
import { ChevronRight } from "lucide-react";
import tsrtc from "../../assets/images/tsrtc.png";
import turito from "../../assets/images/turitobg.png";
import vedantu from "../../assets/images/vedantubg.svg";
import earth from "../../assets/images/earth.svg";
import upgradbg from "../../assets/images/upgradbg.svg";
import sparkelbg from "../../assets/images/sparkelbg.svg";

const caseStudies = [
  {
    title: "TSRTC",
    desc: "SEO-led traffic growth for Telangana State Road Transport Corporation by optimizing...",
    deliverables: ["Website", "SEO"],
    industry: "Transport",
    liveLink: "https://example1.com",
    image: tsrtc,
  },
  {
    title: "Turito",
    desc: "Scaled organic traffic through strategic keyword targeting across high-difficulty academic...",
    deliverables: ["Website", "SEO"],
    industry: "education",
    liveLink: "https://example1.com",
    image: turito,
  },
  {
    title: "Daughter Earth",
    desc: "Scaled paid media campaigns for a D2C beauty brand, achieving 4–5x ROAS while managing...",
    deliverables: ["Performance Marketing", "Performance Marketing"],
    industry: "beauty",
    liveLink: "https://example3.com",
    image: earth,
  },
  {
    title: "Vedantu",
    desc: "Delivered high-performing paid campaigns for the EdTech platform, achieving 9x ROAS while...",
    deliverables: ["Performance Marketing", "Performance Marketing"],
    industry: "Education",
    liveLink: "https://example4.com",
    image: vedantu,
  },
  {
    title: "V Sparkel",
    desc: "Scaled Instagram presence from 50K to 300K+ followers through high-engagement reels,...",
    deliverables: ["Social Media Marketing", "Social Media Marketing"],
    industry: "beauty",
    liveLink: "https://example5.com",
    image: sparkelbg,
  },
  {
    title: "upGrad",
    desc: "Expanded Instagram community from 30K to 240K+ followers by leveraging career-focused reels,...",
    deliverables: ["Social Media Marketing", "Social Media Marketing"],
    industry: "education",
    liveLink: "https://example5.com",
    image: upgradbg,
  },
];

function CaseStudies() {
  return (
    <section className="bg-[#fff9f6] py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto w-[90%] space-y-10 lg:space-y-20">

        {/* Heading */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[54px] font-semibold leading-tight">
              Case Studies.
            </h2>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[54px] text-[#A9A9A9] font-semibold leading-tight">
              Featured Project
            </h2>
          </div>

          <div className="bg-white px-5 py-2 rounded-full w-fit">
            <button className="text-[14px] font-medium">
              FILTER WITH TAGS
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {[
              "All",
              "Digital Marketing",
              "Branding and Design",
              "Business Consulting",
              "Website and App Development",
              "Technology and Product Development",
              "Performance and Analytics",
              "Market Research and Consumer Insights",
            ].map((tag, index) => (
              <button
                key={index}
                className={`whitespace-nowrap text-[14px] font-medium rounded-full px-4 py-1.5 transition ${
                  index === 0
                    ? "bg-gradient-to-r from-[#EE5125] to-[#E51F31] text-white"
                    : "bg-[#0000000D] border border-[#00000026] hover:bg-black/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

     
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 xl:grid-cols-[1fr_801px] gap-8  items-stretch"
          >
            
            {/* LEFT COLUMN */}
            <div className="space-y-4 lg:space-y-6 h-full flex flex-col">

              <div>
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-[15px] sm:text-[16px] text-black max-w-lg">
                  {item.desc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="flex flex-wrap items-start gap-10">
                <div>
                  <p className="text-[12px] tracking-widest text-black/50 mb-2 font-semibold">
                    DELIVERABLES
                  </p>

                  {item.deliverables.map((d, i) => (
                    <p key={i} className="font-semibold">
                      {d}
                    </p>
                  ))}
                </div>

                <div className="hidden lg:block w-px bg-black/20 h-16"></div>

                <div>
                  <p className="text-[12px] tracking-widest text-black/50 mb-2 font-semibold">
                    INDUSTRY
                  </p>

                  <p className="font-semibold capitalize">{item.industry}</p>
                </div>
              </div>

              
              <div className="flex flex-wrap gap-4">

                <button className="h-[44px] px-6 rounded-full text-[13px] font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] flex items-center gap-2 text-white">
                  View Case Study
                  <ChevronRight size={16} />
                </button>

                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[44px] px-6 rounded-full text-[13px] font-semibold border border-[#00000026] flex items-center gap-2 hover:bg-black/5 transition"
                >
                  Live Site
                  <ChevronRight size={16} />
                </a>

              </div>

            
              <div className="hidden lg:block mt-auto">
                <div
                  className="relative w-[440px] h-[234px] rounded-[18px] overflow-hidden bg-center bg-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <button className="bg-white text-black rounded-[14px] px-4 py-1 text-[12px] absolute top-4 left-4 font-medium shadow">
                    Hover to Scroll
                  </button>
                </div>
              </div>

            </div>

            <div className="w-full lg:w-[801px] h-full rounded-[10px] lg:rounded-[14px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default CaseStudies;