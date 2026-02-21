import React from 'react'
import { ChevronDown,MoveRight } from "lucide-react";


  
      function IndustryCard({ item, isOpen, onClick }) {
  return (
    <div className="bg-[#0000000D] w-[420px]  text-black rounded-[10px] p-[24px]  border border-black/5 transition-all duration-300">

     
      <div
        onClick={onClick}
        className="flex justify-between items-start cursor-pointer"
      >
        <div className='flex flex-col gap-[16px]'>
          <h3 className="font-semibold text-[16px] border-l-2 pl-2 border-[#00000026]">{item.title}</h3>
          <p className="text-[14px] text-black/60 mt-1">{item.desc}</p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

     
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[14px] text-black/70 mb-4">
          {item.content}
        </p>

        <div
                  className="
    flex items-center justify-center gap-2
    w-[140px] h-[37px]
    rounded-full
    bg-gradient-to-r from-[#E51F31] to-[#EE5125]
    text-white font-semibold text-sm
    cursor-pointer
    
    hover:scale-105
    transition-all duration-300
  "
                >
                  <span>Learn More</span>
                  <MoveRight size={16} />
                </div>
      </div>
    </div>
  );
}

  


export default IndustryCard
