import React from "react";
import google from "../assets/images/google.svg";
import upcity from "../assets/images/upcity.svg";
import star5 from "../assets/images/star5.svg";
import review from "../assets/images/review.svg";
import quo from "../assets/images/quots.svg";

function Testimonials() {
  return (
    <section className="bg-[#FFF9F6] text-black py-[80px]">
      <div className="max-w-[1440px] mx-auto w-[92%]">

        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium bg-white px-4 py-2 rounded-full w-fit">
              Testimonials
            </span>

            <h2 className="text-[32px] font-semibold">
              Hear From Our Clients
            </h2>
          </div>

          <div className="flex items-center gap-10">
            <img src={google} alt="Google" className="h-[70px] w-[82px]" />
            <img src={upcity} alt="Upcity" className="h-[70px] w-[82px]" />
            <img src={star5} alt="Stars" className="h-[70px] w-[106px]" />
            <img src={review} alt="Reviews" className="h-[70px] w-[132px]" />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">

          {/* LEFT LARGE CARD */}
          <div className="bg-white rounded-[14px] p-[40px] shadow-sm">
            <h3 className="text-[20px] font-semibold mb-6">
              Communication was very simple and easy with Marcamor.
            </h3>

            <div>
              <img src={quo} alt="Quotes" className="h-[34px] w-[36px] mb-4" />
            </div>

            <p className="text-[14px] text-black/70 leading-relaxed mb-8">
              Marcamor was able to successfully produce a requirement-accurate
              website and even deliver an animated logo as a sign of good
              gesture. The team was highly responsive, and internal stakeholders
              were particularly impressed with their deep knowledge of Website
              development.
            </p>

            <div>
              <p className="font-semibold text-[14px]">Jim Willis</p>
              <p className="text-[12px] text-black/50">
                CEO, KINSHASA LIFESTYLE
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">

            {/* TOP MEDIUM CARD */}
            <div className="bg-white rounded-[14px] p-[32px] shadow-sm">
              <h3 className="text-[16px] font-semibold mb-4">
                Communication was very simple and easy with Marcamor.
              </h3>

              <img src={quo} alt="Quotes" className="h-[34px] w-[36px] mb-4" />

              <p className="text-[13px] text-black/70 leading-relaxed mb-6">
                Marcamor was able to successfully produce a requirement-accurate
                website and even deliver an animated logo as a sign of good
                gesture.
              </p>

              <div>
                <p className="font-semibold text-[13px]">Jim Willis</p>
                <p className="text-[11px] text-black/50">
                  CEO, KINSHASA LIFESTYLE
                </p>
              </div>
            </div>

            {/* BOTTOM TWO SMALL CARDS */}
            <div className="grid grid-cols-2 gap-8">

              <div className="bg-white rounded-[14px] p-[28px] shadow-sm">
               <img src={quo} alt="Quotes" className="h-[24px] w-[24px] mb-4" />
                <p className="text-[12px] text-black/60 mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div>
                  <p className="font-semibold text-[12px]">Jim Willis</p>
                  <p className="text-[10px] text-black/50">
                    CEO, KINSHASA LIFESTYLE
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[14px] p-[28px] shadow-sm">
                <img src={quo} alt="Quotes" className="h-[34px] w-[36px] mb-4" />
                <p className="text-[12px] text-black/60 mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div>
                  <p className="font-semibold text-[12px]">Jim Willis</p>
                  <p className="text-[10px] text-black/50">
                    CEO, KINSHASA LIFESTYLE
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;