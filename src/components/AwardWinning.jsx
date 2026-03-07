import React from "react";
import { ChevronRight } from "lucide-react";

function AwardWinning() {
  return (
    <section className="bg-black text-white min-h-screen pt-5">

      <div className="max-w-[1440px] mx-auto w-[90%] lg:pt-[160px] pt-[200px] pb-10">

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-16 items-end lg:pb-20 xl:pb-0">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 min-w-0">

            <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-semibold leading-tight">
              Building Scalable <br />
              Brand Ecosystems
            </h1>

            <div className="flex flex-wrap gap-4 text-[12px] font-medium text-white tracking-wide">
              <span>Brand Strategy</span>
              <span>Performance Marketing</span>
              <span>SEO & Organic Growth</span>
              <span>Web & App Development</span>
              <span>Digital Consulting</span>
            </div>

            <div className="w-full max-w-[267px] h-px bg-white/25"></div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3">

              <button
                className="
                group
                relative
                h-[42px]
                min-w-[212px]
                px-6
                rounded-full
                text-[12px]
                font-semibold
                bg-gradient-to-r from-[#EE5125] to-[#E51F31]
                flex items-center justify-center gap-2
                text-white
              "
              >
                <span className="relative">
                  REQUEST A PROPOSAL
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>

                <ChevronRight size={16} />
              </button>

              <button
                className="
                group
                h-[42px]
                uppercase
                px-6
                rounded-full
                text-[12px]
                font-semibold
                border border-white/50
                flex items-center justify-center gap-2
                hover:bg-white/10
                transition-all duration-300
              "
              >
                <span className="relative">
                  Schedule a Strategy Call
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>

                <ChevronRight size={16} />
              </button>

            </div>

            <p className="font-medium text-[14px] mt-2 max-w-[520px]">
              8+ Years | Multi-Industry Expertise | Performance-Driven Systems | Scalable Operating Model
            </p>

          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
            flex flex-col gap-4
            max-w-[420px]
            lg:ml-auto
            text-center lg:text-left
            min-w-0
          "
          >
            <h2
              className="
              text-[16px] font-semibold
              border-b border-white/30
              inline-block w-fit
              mx-auto lg:mx-0
            "
            >
              Marcamor Consulting
            </h2>

            <p className="text-[14px] font-medium leading-relaxed">
              Marcamor is a growth-focused strategic organization integrating branding,
              digital marketing, technology, and consulting into one unified execution system.
            </p>

            <p className="text-[14px] font-medium leading-relaxed">
              We build scalable brand ecosystems designed for performance,
              expansion, and long-term enterprise value.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AwardWinning;