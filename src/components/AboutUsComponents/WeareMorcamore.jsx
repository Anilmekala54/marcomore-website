import React from "react";
import app from "../../assets/images/ap-logo.svg";
import business from "../../assets/images/business-text.svg";
import AboutBg from "../../assets/images/About-bg.png";
import AboutBgmb from "../../assets/images/Aboutmb-bg.png";

function WeareMorcamore() {
  return (
    <section className="relative min-h-screen lg:pt-20 overflow-hidden h-[200px]">

     
  <div className="lg:hidden relative mt-20">
  <img
    src={AboutBgmb}
    alt="About Background Mobile"
    className="w-full h-auto"
  />

  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent via-black/70 to-black"></div>
</div>

     
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-bgReveal hidden md:block"
        style={{ backgroundImage: `url(${AboutBg})` }}
      />

      
      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="relative z-10 max-w-[90%] mx-auto w-[90%] pt-10 lg:pt-[160px] text-white">
        <div className="grid lg:grid-cols-2 gap-6 py-4 lg:gap-12 items-start">

        
          <div className="flex flex-col gap-6">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.1] animate-content delay-2">
              We are Marcamor.
            </h1>

            <p className="text-[16px] animate-content delay-2">
              Building Scalable Brand Ecosystems Across Global Markets.
            </p>

            <div className="w-full h-px bg-white animate-content delay-3"></div>

            <div className="flex items-center gap-4 lg:gap-6 pt-2 animate-content delay-4">
              <span className="text-[14px] tracking-wide">FEATURED ON</span>

              <img src={app} alt="AP" className="h-[40px]" />
              <img
                src={business}
                alt="Business Insider"
                className="h-[16px]"
              />
            </div>
          </div>

          
          <div className="w-full lg:max-w-[440px] lg:ml-auto text-left mt-10 lg:mt-0">
            <p className="text-[14px] lg:text-[16px] leading-relaxed text-white/90 animate-content delay-4">
             Marcamor is a strategic growth company integrating brand positioning, digital infrastructure, performance systems, and business expansion frameworks. We partner with ambitious businesses to build structured ecosystems designed for long-term scale.
            </p>
          </div>

        </div>
      </div>

      
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent via-black/70 to-black"></div>

    </section>
  );
}

export default WeareMorcamore;