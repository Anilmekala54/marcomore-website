import React from 'react'
import insight from "../assets/images/insight-logo.svg";
import logo from "../assets/images/marcamore-logo.svg";
import { ChevronRight } from "lucide-react";

function VisitInsights() {
  return (
    <div className='px-[74px] py-10'>
      <div className='flex justify-between items-center  '>
         <div className='relative '>
            <img src={logo} alt="marcamore logo" className='w-[140px] h-[32px]' />
        <img src={insight} alt="insight" className='w-[122px] h-[68px] absolute bottom-[-50px]'/>
         </div>
        <button className="h-[42px]  px-6 rounded-full text-[12px] font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31] flex items-center gap-2 text-white">
            visit insights
            <ChevronRight size={16} />
          </button>
      </div>
    </div>
  )
}

export default VisitInsights
