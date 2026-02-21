import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

function BreakingNews() {
  const scrollRef = useRef(null);

  const newsItems = [
    "Tesla Unveils Upgraded Model S and X With Long Range,...",
    "Oilers Stanley Cup Final, Panthers One Win Away From...",
    "Mattel Taps Open AI: First AI-Powered Barbie Toy Arrives...",
    "WhatsApp to Start Showing Ads in App for the First Time",
    "Kering Names Renault’s Luca de Meo as New CEO in Bold Bid...",
  ];

  const scrollNext = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.6;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-[60px]">

      {/* Global Container */}
      <div className="max-w-[1440px] mx-auto w-[90%]">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-6">
            <span className="bg-gradient-to-r from-[#E51F31] to-[#EE5125] text-white font-semibold text-[12px] py-[4px] px-[8px] rounded-[6px] uppercase tracking-wide">
              Breaking News
            </span>

            <button className="text-[15px] font-semibold flex items-center gap-2 uppercase hover:text-[#F05623] transition">
              View All
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Scroll Area */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="snap-start min-w-[260px] md:min-w-[320px] border-l-2 border-white/20 pl-6"
              >
                <p className="text-[12px] text-white/50 mb-3 uppercase font-semibold tracking-wide">
                  3 Days Ago
                </p>

                <h4 className="text-[14px] font-semibold leading-snug hover:text-[#F05623] transition">
                  {item}
                </h4>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
          >
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default BreakingNews;