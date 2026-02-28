import React from "react";
import { ArrowRight } from "lucide-react";

function Services() {
  return (
    <section className="bg-[#fff9f6] text-black py-10 lg:py-24">
      <div className="max-w-[1440px] mx-auto w-[90%]">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-28 mb-8 lg:mb-16">
          <h1 className="text-[42px] lg:text-[54px] font-semibold leading-tight">
            Our Services
          </h1>
          <p className="text-[16px] text-black/60 max-w-[420px]">
            Creative Solutions Crafted To Help You Achieve <br />
            The Perfect Digital Presence
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-start">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">

            {/* Web Design - Large Card */}
            <div className="bg-black/[0.05] p-6 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[22px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Web Design &amp; Development
              </h2>
              <p className="text-[14px] text-black/70 leading-relaxed">
                As an award-winning web design agency, our focus is on user experience strategy to custom design websites that deliver exceptional user experiences while achieving business objectives.
              </p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "Webflow", "UI/UX", "Custom Design", "Testing", "and more."].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-black/20 pt-5 mt-28">
                <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  Web Design Services <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* SEO - Small Card */}
            <div className="bg-black/[0.05] p-6 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[22px] font-semibold border-l-[3px] border-[#EE5125] pl-3">
                SEO
              </h2>
              <p className="text-[14px] text-black/70 leading-relaxed">
                Boost your online visibility with Brand Vision's premier SEO services.
              </p>
              <div className="border-t border-black/20 pt-5 mt-16">
                <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  See Plans <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">

            {/* Brand Research */}
            <div className="bg-black/[0.05] p-6 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[22px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Brand Research &amp; Strategy
              </h2>
              <p className="text-[14px] text-black/70 leading-relaxed">
                We analyze competitors, market trends, and target audiences to create a strategic framework for consistent brand communication.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Brand Position", "Competitor Analysis", "Market Trend Analysis", "Brand Messaging Framework", "Brand Voice & Tone", "Brand Value & Promise"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-black/20 pt-5 mt-2">
                <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Branding */}
            <div className="bg-black/[0.05] p-6 rounded-[12px] flex flex-col gap-5">
              <h2 className="text-[20px] lg:text-[22px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                Visual Branding
              </h2>
              <p className="text-[14px] text-black/70 leading-relaxed">
                We enhance your brand's visual identity by providing strategic guidance and establishing guidelines to maintain consistency.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Logo Design", "Typography", "Iconography", "Brand Style Guide", "Colour Palette", "Textures and Patterns"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black/[0.06] rounded-full text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-black/20 pt-5 mt-2">
                <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

       
          <div className="flex flex-col  gap-4 lg:gap-10">
            {["User Interface & User Experience", "Graphic Design", "Content Marketing", "Consultation & Audit"].map((title, i) => (
              <div key={i} className="bg-black/[0.05] p-6 rounded-[12px] flex flex-col gap-5">
                <h2 className="text-[18px] font-semibold border-l-[3px] border-[#EE5125] pl-3 leading-snug">
                  {title}
                </h2>
                <div className="border-t border-black/20 pt-5 mt-4">
                  <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-[14px] hover:text-[#EE5125] transition w-fit shadow-sm">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;