import React from "react";

import google from "../../assets/images/google.svg";
import upcity from "../../assets/images/upcity.svg";
import star5 from "../../assets/images/star5.svg";
import review from "../../assets/images/review.svg";
import Contactbg from "../../assets/images/contact-bg3.png";
import Contactbgmb from "../../assets/images/contact-mb-bg.png";
import contactLogo from "../../assets/images/contact-bg-logo1.svg"

function YourVision() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${Contactbgmb})` }}
    >
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Contactbg})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-360 mx-auto w-[90%] py-20">
        <div className="flex flex-col gap-2 xl:gap-6 items-center relative">

          <h2 className="text-[22px] lg:text-[54px] font-semibold text-center">
            Let's get started with #YourVision
          </h2>

          <p className="font-medium text-center">
            Contact us to discuss your inquiry, and we'll get back to you shortly.
          </p>
<div className="
  w-[170px] h-[170px]
  xl:w-[310px] xl:h-[310px]
  xl:absolute
  xl:right-0
  xl:top-18
">
  <img src={contactLogo} alt="logo" className="w-full h-full object-contain" />
</div>
          <div className="bg-white rounded-[14px] px-6 sm:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">

              {/* Left Group */}
              <div className="flex justify-center lg:justify-start gap-6 flex-wrap">
                <img src={google} alt="Google Reviews" className="h-[70px]" />
                <img src={upcity} alt="Upcity Reviews" className="h-[70px]" />
              </div>

              {/* Right Group */}
              <div className="flex justify-center lg:justify-end gap-6 flex-wrap">
                <img src={review} alt="Review Badge" className="h-[70px]" />
                <img src={star5} alt="5 Star Rating" className="h-[70px]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default YourVision;