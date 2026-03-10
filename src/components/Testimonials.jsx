import React from "react";
import google from "../assets/images/google.svg";
import upcity from "../assets/images/upcity.svg";
import star5 from "../assets/images/star5.svg";
import review from "../assets/images/review.svg";
import quo from "../assets/images/quots.svg";
import emoji from "../assets/images/emoji.svg";
import star1 from "../assets/images/star1.svg";
import star2 from "../assets/images/star2.svg";
import { MoveUpRight } from "lucide-react";

function Testimonials() {
  return (
    <section className="bg-[#FFF9F6] text-black  py-10 ">
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
              <h3 className="text-xl lg:text-[24px] font-semibold leading-snug mb-6 text-black hidden">
                Communication was very simple and easy with Marcamor.
              </h3>

              <img src={quo} alt="Quotes" className="h-8 w-8 mb-6" />

              <p className="text-base lg:text-[18px] leading-relaxed text-black">
                Marcamor is the best digital marketing agency in India! They
                truly know how to grow brands with their creative and
                data-driven strategies. The team is professional, friendly, and
                always goes the extra mile to deliver great results. Our sales
                and customer engagement have improved a lot since working with
                them. I highly recommend Marcamor for any business looking to
                succeed online!
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-[18px] text-black">
                360 P Kirthi Tejesh Reddy
              </p>
              <div className="flex flex-col mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={star2}
                        alt="star"
                        className="w-[15px] h-[15px]"
                      />
                    ))}
                  </div>

                  <span className="text-sm font-semibold text-black">5</span>
                </div>
              </div>
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
                <h3 className="text-[16px] font-semibold mb-4 text-black hidden">
                  Communication was very simple and easy with Marcamor.
                </h3>

                <img src={quo} alt="Quotes" className="h-6 w-6 mb-4" />

                <p className="text-sm leading-relaxed text-black text-[12px]">
                  We saw real, measurable results within few days. Marcamor is
                  one of the few digital marketing companies in Hyderabad that
                  actually delivers great result for the client services.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-[14px] text-black">Veeru</p>
                <div className="flex flex-col mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star2}
                          alt="star"
                          className="w-[15px] h-[15px]"
                        />
                      ))}
                    </div>

                    <span className="text-sm font-semibold text-black">5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="bg-white rounded-[12px] shadow-sm
                             w-full xl:w-[263px]
                             xl:h-[263px]
                             p-6
                             flex flex-col justify-between shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] bg-white p-6"
              >
                <div>
                  <img src={quo} alt="Quotes" className="h-5 w-5 mb-4" />
                  <p className="text-[12px] leading-relaxed text-[#00000080] ">
                    Their SEO and ad strategies worked wonders for our local
                    business. Marcamor really is among the top digital
                    marketing companies in Hyderabad
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-black">Sai Dinesh</p>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star2}
                            alt="star"
                            className="w-[15px] h-[15px]"
                          />
                        ))}
                      </div>

                      <span className="text-sm font-semibold text-black">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-[12px] shadow-sm
                             w-full xl:w-[263px]
                             xl:h-[263px]
                             p-6
                             flex flex-col justify-between shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] bg-white p-6"
              >
                <div>
                  <img src={quo} alt="Quotes" className="h-5 w-5 mb-4" />
                  <p className="text-[12px] leading-relaxed text-[#00000080]">
                    Marcamor has been a game-changer for our online presence in
                    Hyderabad; their digital marketing expertise has helped us
                    reach new heights.{" "}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-black">
                    GNVSL.PAVANA BASAVYA
                  </p>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star2}
                            alt="star"
                            className="w-[15px] h-[15px]"
                          />
                        ))}
                      </div>

                      <span className="text-sm font-semibold text-black">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-16 py-6">
          <div className="">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[14px] font-medium text-black">
                1500 Satisfied Clients Love Our Services
              </p>

              <div className="flex items-center justify-between lg:flex-1 lg:ml-10">
                <div className="flex items-center gap-4">
                  <img src={emoji} alt="emoji" className="w-8 h-8" />

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

                <button className="group flex items-center gap-2 text-[10px] lg:text-[14px] font-medium bg-white lg:px-3 lg:py-2 rounded-full">
                  <span className="relative">
                    View All Reviews
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>

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
