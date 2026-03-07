import React from "react";
import certification1 from "../../assets/images/certification1.svg";
import certification2 from "../../assets/images/certification2.svg";
import certification3 from "../../assets/images/certification3.svg";
import badge from "../../assets/images/badge.svg";
import badge1 from "../../assets/images/badge1.svg";
import badge2 from "../../assets/images/badge2.svg";
import badge3 from "../../assets/images/badge3.svg";
import badge4 from "../../assets/images/badge4.svg";
import badge5 from "../../assets/images/badge5.svg";

function AwardAndCertification() {
  return (
    <section className="bg-black text-white py-10 lg:py-20 hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col items-center text-center  gap-12">

         
          <div className="px-5 py-2 bg-white/10 rounded-full">
            <span className="text-[14px] font-medium tracking-wide">
              Awards & Certifications
            </span>
          </div>

         
          <h2 className="
            text-[34px]
            sm:text-[44px]
            lg:text-[64px]
            font-semibold
            leading-[1.1]
          ">
            Recognized Globally
          </h2>

          
          <div className="
            flex 
            flex-col 
            sm:flex-row 
            flex-wrap 
            justify-center 
            items-center 
            gap-10
          ">
            {[certification1, certification2, certification3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="certification"
                className="
                 
                  :w-[278px] 
                  h-[156px]
                  object-contain
                "
              />
            ))}
          </div>

        
          <div className="w-full border-t border-white/20 my-10"></div>

         
          <div className="
            grid 
            
            grid-cols-3 
            lg:grid-cols-6 
            gap-8 
            justify-items-center
          ">
            {[badge, badge4, badge5, badge3, badge1, badge2].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="badge"
                  className="
                    w-[80px] 
                    sm:w-[90px] 
                    lg:w-[100px] 
                    h-auto 
                    object-contain
                  "
                />
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AwardAndCertification;