import React, { useState } from "react";
import client1 from "../assets/images/client1.svg";
import client2 from "../assets/images/client2.svg";
import client3 from "../assets/images/client3.svg";
import client4 from "../assets/images/client4.svg";
import turito from "../assets/images/Turito-logo.svg";
import kanakatala from "../assets/images/kanakatala-logo.svg";
import hyno from "../assets/images/hyno.svg";

function Clients() {
  const [pause, setPause] = useState(false);

  const scrollLogos = [
    turito,
    kanakatala,
    hyno,
    turito,
    kanakatala,
    hyno,
  ];

  return (
    <section className="bg-black text-white py-[80px] overflow-hidden">

      <div className="max-w-[90%] mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="w-full lg:max-w-[420px]">

            <button className="text-[14px] mb-4 font-medium text-white/50 bg-white/10 py-[6px] px-[12px] rounded-2xl">
              Clients & Achievements
            </button>

            <div className="flex flex-col gap-[20px]">

              <h2 className="font-semibold text-[26px] lg:text-[32px]">
                Our Recent Clients
              </h2>

              {/* Awards Row 1 */}
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <img src={client1} alt="" className="h-[24px] w-auto" />
                <img src={client2} alt="" className="h-[24px] w-auto" />
              </div>

              {/* Awards Row 2 */}
              <div className="flex flex-wrap items-center gap-10 mt-4">
                <img src={client4} alt="" className="h-[64px] w-auto" />
                <img src={client3} alt="" className="h-[64px] w-auto" />
              </div>

            </div>
          </div>

          {/* ================= RIGHT GRID ================= */}
          <div className="w-full">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px]">

              {[...Array(10)].map((_, index) => {
                const logos = [turito, kanakatala, hyno, hyno, hyno];
                return (
                  <div
                    key={index}
                    className="
                      h-[100px]
                      rounded-[6px]
                      bg-white/10
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={logos[index % 5]}
                      alt=""
                      className="max-w-[120px] max-h-[50px] object-contain"
                    />
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="mt-[40px]">

          <div
            className="relative overflow-hidden w-full h-[48px]"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >

            <style>
              {`
              .scroll-track {
                display: flex;
                align-items: center;
                height: 100%;
                width: max-content;
                animation: scrollLeft 20s linear infinite;
              }

              @keyframes scrollLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
            </style>

            <div
              className="scroll-track gap-12 lg:gap-16"
              style={{ animationPlayState: pause ? "paused" : "running" }}
            >
              {[...scrollLogos, ...scrollLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="h-[28px] lg:h-[32px] w-auto opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>

            {/* Fade Left */}
            <div className="absolute left-0 top-0 h-full w-12 lg:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            {/* Fade Right */}
            <div className="absolute right-0 top-0 h-full w-12 lg:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;