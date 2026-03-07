import React from "react";

import india from "../../assets/images/office1.svg";
import usa from "../../assets/images/office2.svg";
import canada from "../../assets/images/office3.svg";

import { ExternalLink } from "lucide-react";
function Location1() {
  return (
    <section className=" text-white bg-black py-10 lg:mb-20 mb-10  ">
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    <div className="relative rounded-[12px] overflow-hidden group">
                    <img
                      src={india}
                      alt="Canada HQ"
                      className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
                    />
        
                    <div className="absolute inset-0 bg-black/30"></div>
        
                    <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
                      India Headquarter
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
                       Hyderabad
                      </h3>
        
                      <div className="max-w-[300px]">
                        <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                         
                         Hyderabad, Telangana 500081.
                        </p>
        
                        <button
                          className="
              group
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
                          <span className="relative">
                          Visit Us
                          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                
                  <div className="relative rounded-[12px] overflow-hidden group">
                    <img
                      src={usa}
                      alt="Canada HQ"
                      className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
                    />
        
                    <div className="absolute inset-0 bg-black/30"></div>
        
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
                       California
                      </h3>
        
                      <div className="max-w-[300px]">
                        <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                         San Francisco, California 94108.
                        </p>
        
                        <button
                          className="
              group
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
                          <span className="relative">
                          Visit Us
                          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </span>
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
        
                    <div className="absolute inset-0 bg-black/30 "></div>
        
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
                     London
                      </h3>
        
                      <div className="max-w-[300px]">
                        <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                       Harrow, Greater London HA1 2LW.
                        </p>
        
                        <button
                          className="
              group
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
                          <span className="relative">
                          Visit Us
                          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
      </div>
    </section>
  );
}

export default Location1;