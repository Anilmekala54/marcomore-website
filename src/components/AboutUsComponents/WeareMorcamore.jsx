import React from "react";
import app from "../../assets/images/ap-logo.svg";
import business from "../../assets/images/business-text.svg";
import AboutBg from "../../assets/images/About-bg.png";
import AboutBgmb from "../../assets/images/Aboutmb-bg.png";

function WeareMorcamore() {
  return (
    <section className="relative min-h-screen pt-[120px] overflow-hidden">
    {/* Mobile Background */}
<div  
  className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-bgReveal md:hidden "
  style={{ backgroundImage: `url(${AboutBgmb})` }} 
/>

{/* Desktop Background */}
<div
  className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-bgReveal hidden md:block"
  style={{ backgroundImage: `url(${AboutBg})` }}
/>

  {/* Overlay (Opacity 70%) */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-[90%] mx-auto w-[90%] pt-[160px] text-white">
        <div className="grid lg:grid-cols-2 gap-6 py-4 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.1] animate-content delay-2">
              We are Marcamor.
            </h1>

            <p className="text-[16px] animate-content delay-2">
              An award-winning web design and branding agency headquartered in
              Toronto and Chicago.
            </p>

            <div className="w-full h-px bg-white animate-content delay-3"></div>

            <div className="flex items-center gap-6 pt-2 animate-content delay-4">
              <span className="text-[14px] tracking-wide">FEATURED ON</span>

              <img src={app} alt="AP" className="h-[40px]" />
              <img src={business} alt="Business Insider" className="h-[16px]" />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:max-w-[440px] lg:ml-auto text-left mt-10 lg:mt-0">
            <p className="text-[14px] lg:text-[16px] leading-relaxed text-white/90 animate-content delay-4">
              At Marcamor, our primary goal is achieving outstanding results for
              our clients. Our adaptive team offers a broad range of marketing
              services, custom-tailored to each client's unique needs. By
              continuously updating our strategies with the latest marketing
              trends, we ensure effective engagement with various customer
              groups. Our dedicated approach often surpasses client
              expectations, fostering a tradition of success and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeareMorcamore;
