import React from "react";
import google from "../assets/images/google.svg";
import upcity from "../assets/images/upcity.svg";
import star5 from "../assets/images/star5.svg";
import review from "../assets/images/review.svg";
import quo from "../assets/images/quots.svg";
import emoji from "../assets/images/emoji.svg";
import star1 from "../assets/images/star1.svg";
import { MoveUpRight } from "lucide-react";

function Testimonials() {
  return (
    <section className="bg-[#FFF9F6] text-black  py-10 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="space-y-4 flex flex-col gap-6">
            <span className="text-sm font-medium bg-[#0000000D] px-4 py-2 rounded-full w-fit ">
              Testimonials
            </span>

            <h2 className="text-3xl lg:text-[32px] font-semibold text-black">
              Hear From Our Clients
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <img
              src={google}
              alt="Google"
              className="h-[60px] object-contain"
            />
            <img
              src={upcity}
              alt="Upcity"
              className="h-[60px] object-contain"
            />
            <img src={star5} alt="Stars" className="h-[60px] object-contain" />
            <img
              src={review}
              alt="Reviews"
              className="h-[60px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center gap-8">
          <div
            className="bg-white rounded-[12px] shadow-sm
                          w-full xl:w-[547px]
                          xl:h-[547px]
                          p-8 lg:p-10
                          flex flex-col justify-between shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] bg-white p-6"
          >
            <div>
              <h3 className="text-xl lg:text-[24px] font-semibold leading-snug mb-6 text-black">
                Communication was very simple and easy with Marcamor.
              </h3>

              <img src={quo} alt="Quotes" className="h-8 w-8 mb-6" />

              <p className="text-base lg:text-[18px] leading-relaxed text-black">
                Marcamor was able to successfully produce a requirement-accurate
                website and even deliver an animated logo as a sign of good
                gesture. The team was highly responsive, and internal
                stakeholders were particularly impressed with their deep
                knowledge of Website development.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-[16px] text-black">Jim Willis</p>
              <p className="text-sm text-black/50">CEO, KINSHASA LIFESTYLE</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="bg-white rounded-[12px] shadow-sm
                            w-full xl:w-[547px]
                            xl:h-[264px]
                            p-6 lg:p-8
                            flex flex-col justify-between shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] bg-white p-6"
            >
              <div>
                <h3 className="text-[16px] font-semibold mb-4 text-black">
                  Communication was very simple and easy with Marcamor.
                </h3>

                <img src={quo} alt="Quotes" className="h-6 w-6 mb-4" />

                <p className="text-sm leading-relaxed text-black">
                  Marcamor was able to successfully produce a
                  requirement-accurate website and even deliver an animated logo
                  as a sign of good gesture.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-sm text-black">Jim Willis</p>
                <p className="text-xs text-black/50">CEO, KINSHASA LIFESTYLE</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[12px] shadow-sm
                             w-full xl:w-[263px]
                             xl:h-[263px]
                             p-6
                             flex flex-col justify-between shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] bg-white p-6"
                >
                  <div>
                    <img src={quo} alt="Quotes" className="h-5 w-5 mb-4" />
                    <p className="text-sm leading-relaxed text-black">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="font-semibold text-sm text-black">
                      Jim Willis
                    </p>
                    <p className="text-xs text-black/50">
                      CEO, KINSHASA LIFESTYLE
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

<div className="px-6 lg:px-16 py-6">
 <div className="">
  <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    {/* LEFT TEXT */}
    <p className="text-[14px] font-medium text-black">
      1500 Satisfied Clients Love Our Services
    </p>

    {/* MOBILE ROW + DESKTOP RIGHT SIDE */}
    <div className="flex items-center justify-between lg:flex-1 lg:ml-10">

      {/* EMOJI + RATING */}
      <div className="flex items-center gap-4">
        <img
          src={emoji}
          alt="emoji"
          className="w-8 h-8"
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={star1}
                  alt="star"
                  className="w-[15px] h-[15px]"
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-black">
              4.9
            </span>
          </div>

          <p className="lg:text-[14px] text-[12px]  font-medium text-black">
            Based On 1.5k Reviews
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <button className="flex items-center gap-2 text-[10px] lg:text-[14px] font-medium bg-white  lg:px-3 lg:py-2 rounded-full hover:shadow-md transition duration-300">
        View All Reviews
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-black/30">
          <MoveUpRight className="w-4 h-4" />
        </span>
      </button>

    </div>
  </div>
</div>
</div>
      </div>
    </section>
  );
}

export default Testimonials;
