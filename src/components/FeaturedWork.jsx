import React from "react";
import { ChevronRight } from "lucide-react";

function FeaturedWork() {
  return (
    <div className="py-[80px] px-[74px] bg-[#FFF9F6] text-black flex justify-between relative ">
      <div className="w-[400px] flex flex-col gap-[24px] sticky top-[120px] self-start h-fit">
        <div className="bg-white rounded-[100px] w-[130px] h-[30px]">
          <p className="text-[14px] font-medium text-[#00000080]/50 px-[12px] py-[6px]">
            Featured Work
          </p>
        </div>
        <h2 className="text-[24px] font-medium capitalize">
          Our goal is to nurture your vision and provide innovative, custom
          solutions for all your marketing needs.
        </h2>
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
     <div className="flex flex-col gap-[54px]">
         <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
            Safeway <br />
            (Albertsons)
          </h2>

         
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
              Website Redesign & B2B Customer Experience for a National Grocery
              Brand
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
       <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
        <div className="flex gap-[12px]">
              <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>
            <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
           BRANDING
          </button>
        </div>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
            Mostardi Platt
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
             Website Design & Brand Refresh for an Environmental Consultancy
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
           ArcelorMittal
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
            Website Design for the World’s Leading Steel Manufacturer
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
           Flipp
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
             Web Design and Development for a Professional Business
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
           Directed IRA
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
           Website Redesign & UIUX for Financial Institution
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            BRANDING
          </button>

          
          <h2 className="font-semibold text-[34px] leading-tight">
            2992 Sheppard
          </h2>

          
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
             Branding for Real Estate Project
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
            Safeway <br />
            (Albertsons)
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
              Website Redesign & B2B Customer Experience for a National Grocery
              Brand
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
        <div className="w-[800px] h-[480px] bg-[#A9A9A9] text-white rounded-[10px] relative overflow-hidden">
        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-[34px] flex flex-col gap-6">
          {/* Tag */}
          <button className="uppercase font-semibold text-[12px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full w-fit">
            Website
          </button>

          {/* Title */}
          <h2 className="font-semibold text-[34px] leading-tight">
            Safeway <br />
            (Albertsons)
          </h2>

          {/* Description + Button Row */}
          <div className="flex justify-between items-end gap-6">
            <p className="font-medium text-[16px] leading-relaxed max-w-[60%]">
              Website Redesign & B2B Customer Experience for a National Grocery
              Brand
            </p>

            <button className="h-[42px] px-6 rounded-full text-[12px] font-semibold bg-white text-black flex items-center gap-2 hover:scale-105 transition-all duration-300">
              READ OUR CASE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default FeaturedWork;
