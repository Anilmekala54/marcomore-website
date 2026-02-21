import React from "react";
import IndustriesCards from "./IndustriesCards";

function Industries() {
  return (
    <>
      <section className="bg-[#FFF9F6] text-black py-[80px]">
        
        {/* Global Container */}
        <div className="max-w-[1440px] mx-auto w-[92%]">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center bg-white rounded-full px-5 py-2">
              <span className="text-[14px] font-medium text-black/60 tracking-wide uppercase">
                Industries
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-[44px] font-semibold text-center mb-6 leading-tight">
            Industries We Collaborate With
          </h1>

          {/* Paragraph */}
          <p className="text-center text-[16px] md:text-[18px] font-medium text-black/70 max-w-[800px] mx-auto leading-relaxed">
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