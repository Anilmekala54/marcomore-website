import React from "react";
import { ArrowRight } from "lucide-react";

function Services() {
  return (
    <section className="bg-[#fff9f6] text-black py-10 lg:py-24">
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-28 mb-8 lg:mb-16">
          <h1 className="text-[42px] lg:text-[54px] font-semibold leading-tight">
            Our Services
          </h1>
          <p className="text-[16px] text-black/60 max-w-[420px]">
            Creative Solutions Crafted To Help You Achieve <br />
            The Perfect Digital Presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">

          <div className="flex flex-col gap-6 h-full">
            <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5 h-full">
              <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Digital Marketing
              </h2>

              <p className="text-[14px] text-black/70 leading-relaxed">
                At Marcamor, we design integrated digital growth systems that
                combine organic visibility, paid acquisition, and audience
                engagement into one measurable framework. Our strategies are
                built on data intelligence, funnel optimization, and performance
                tracking to ensure consistent and scalable revenue growth across
                digital channels.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Search Engine Optimization",
                  "Email Marketing",
                  "Performance Marketing",
                  "Content Marketing",
                  "Social Media Marketing",
                  "Affiliate Marketing",
                  "Influencer Marketing",
                  "YouTube Marketing",
                  "WhatsApp Marketing",
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-black/20 pt-5 mt-auto">
                <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  <span className="relative">
                    Digital Marketing
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5 h-full">
            <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
              Branding and Design
            </h2>

            <p className="text-[14px] text-black/70 leading-relaxed">
              We build structured brand ecosystems that align strategy,
              identity, and communication into a cohesive market presence. From
              positioning and visual systems to corporate communication design,
              we create brands that are distinctive, scalable, and built for
              long-term relevance.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Brand Strategy",
                "Logo Design",
                "Brand Identity and Guidelines",
                "Packaging Design",
                "Corporate Communication Design",
                "UI/UX Design",
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-black/20 pt-5 mt-auto">
              <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                <span className="relative">
                  Branding and Design
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5 h-full">
            <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
              Business Consulting
            </h2>

            <p className="text-[14px] text-black/70 leading-relaxed">
              Our consulting division focuses on structured business growth,
              operational efficiency, and scalable revenue models. We help
              startups, SMEs, and expanding enterprises align strategy with
              execution to accelerate market positioning and sustainable
              expansion.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Startup and SME Consulting",
                "Go To Market Strategy",
                " Franchise Consulting",
                "Sales and Revenue Strategy",
                "Business Process Optimization",
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-black/20 pt-5 mt-auto">
              <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                <span className="relative">
                  Business Consulting
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
 <div className="flex flex-col gap-6">
            <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Website and App Development
              </h2>
              <p className="text-[14px] text-black/70 leading-relaxed">
                We design and develop high-performance digital platforms engineered for scalability, speed, and conversion. Our development frameworks combine user experience strategy with modern technology stacks to build secure, future-ready digital infrastructure.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Custom Web and App Design",
                  "E-commerce Development",
                  "Mobile App Development Android iOS",
                  "API Integration",
                  "Maintenance and AMC Plans",
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-black/20 pt-5 mt-4">
                <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  <span className="relative">
                    Website and App Development
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5">
            <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
              Technology and Product Development
            </h2>
            <p className="text-[14px] text-black/70 leading-relaxed">
              We build scalable SaaS platforms, MVPs, and enterprise-grade systems that support innovation and operational growth. Our product development approach emphasizes modular architecture, performance optimization, and long-term adaptability.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "SaaS Product Development",
                "MVP Building for Startups",
                "No Code and Low Code Development",
                "ERP and CRM Integration",
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-black/20 pt-5 mt-4">
              <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                <span className="relative">
                  Technology and Product Development
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5">
            <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
              Performance and Analytics
            </h2>
            <p className="text-[14px] text-black/70 leading-relaxed">
              We transform data into strategic intelligence through structured tracking systems, performance dashboards, and continuous optimization cycles.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Marketing Analytics and BI Reporting",
                "GTM and Analytics",
                " Heatmap and Behavior Tracking",
                " KPI Dashboard Setup",
                "Conversion Optimization",
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-black/20 pt-5 mt-auto">
              <button className="group flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                <span className="relative">
                  Performance and Analytics
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      

        <div>
          <div className="flex flex-col gap-6 mt-4">
            <div className="bg-black/[0.05] p-8 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[24px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Market Research and Consumer Insights
              </h2>

              <p className="text-[14px] text-black/70 leading-relaxed">
                We conduct structured research to uncover consumer behavior, competitive landscapes, and emerging market opportunities. Our insights-driven methodologies support confident decision-making and strategic expansion planning.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Market Feasibility Studies",
                  "Consumer Behavior Analysis",
                  "Competitor Analysis",
                  "Brand Perception Studies",
                  "Industry and Trends Reports",
                  "Customer Segmentation and Process Building",
                  "Customer Segmentation and Process Building",
                  " Product Testing and Feedback Loops",
                  " Geographical Market Entry Studies",
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-black/20 pt-5 mt-4">
                <button className="group flex items-center gap-2 bg-white px-3 lg:px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  <span className="relative">
                    Market Research and Consumer Insights
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;