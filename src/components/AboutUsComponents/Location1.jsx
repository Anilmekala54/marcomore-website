import React from 'react'


import canada from "../../assets/images/canada.svg";
import usa from "../../assets/images/toranto.png";
import { ExternalLink } from "lucide-react";
function Location1() {
  return (
        <section className=" text-white bg-black py-10 ">
      <div className="max-w-[1440px] mx-auto w-[90%]">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Canada */}
          <div className="relative rounded-[12px] overflow-hidden group">
            <img
              src={usa}
              alt="Canada HQ"
              className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
            />

            <div className="absolute inset-0 "></div>

            <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
              Canada Headquarter
            </div>

            <div
              className="
  absolute 
  bottom-8
  left-6 
  right-6
  flex  justify-between   
  
  gap-6
"
            >
              <h3 className="text-[24px] font-semibold">
                Toronto
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                  Suite 120 - 2005 Sheppard Ave E,
                  <br />
                  North York, ON M2J5B4
                </p>

                <button
                  className="
      mt-4 
      px-4 
      py-2 
      bg-white/20 
      text-[13px] 
      sm:text-[14px]
      font-bold 
      text-white 
      flex 
      items-center 
      gap-2 
      rounded-full
      backdrop-blur-sm
   
    "
                >
                  Visit Us
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* USA */}
            <div className="relative rounded-[12px] overflow-hidden group">
            <img
              src={canada}
              alt="Canada HQ"
              className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
            />

            <div className="absolute inset-0 "></div>

            <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
              USA Headquarter
            </div>

            <div
              className="
  absolute 
  bottom-8
  left-6 
  right-6
  flex  justify-between   
  
  gap-6
"
            >
              <h3 className="text-[24px] font-semibold">
               Chicago
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                 30 N Michigan Ave, Suite 504
Chicago, Il 60602
                </p>

                <button
                  className="
      mt-4 
      px-4 
      py-2 
      bg-white/20 
      text-[13px] 
      sm:text-[14px]
      font-bold 
      text-white 
      flex 
      items-center 
      gap-2 
      rounded-full
      backdrop-blur-sm
   
    "
                >
                  Visit Us
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
          



        </div>
    </div>
    </section>
  )
}

export default Location1
