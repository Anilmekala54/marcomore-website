import React from "react";
import IndustriesCards from "./IndustriesCards";

function Industries() {
  return (
    <>
      <section className="bg-[#FFF9F6] text-black ">
        
       
        <div className="max-w-[1440px] mx-auto w-[90%] pb-8">

          
          <div className="flex justify-center gap-10">
            <div className="inline-flex items-center justify-center bg-white rounded-full px-[12px] py-[6px] mb-4">
              <span className="text-[14px] font-medium text-black/60 tracking-wide ">
                Industries
              </span>
            </div>
          </div>

         
          <h1 className=" text-[24px] lg:text-[32px] md:text-[44px] font-semibold text-center mb-6 leading-tight">
            Industries We Collaborate With
          </h1>

         
          <p className="text-center text-[16px] md:text-[18px] font-medium text-[#00000080] max-w-[800px] mx-auto leading-relaxed">
            As a company with over a decade of experience, we at Brand Vision are
            proud to have worked with many outstanding businesses and industries
            worldwide. These partnerships have allowed us to expand our
            knowledge, skills, and expertise, and have helped us to continuously
            improve our services and deliver excellent results for our clients.
          </p>

        </div>
      </section>

      <IndustriesCards />
    </>
  );
}

export default Industries;