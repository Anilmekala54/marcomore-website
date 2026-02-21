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
    <section className="py-[80px]">

      {/* Proper Container */}
      <div className="max-w-[1440px] mx-auto w-[92%]">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT */}
          <div>
            <button className="text-[14px] mb-4 font-medium text-white/50 bg-white/10 py-[6px] px-[12px] rounded-2xl">
              Clients & Achievements
            </button>

            <div className="flex flex-col gap-[20px]">
              <h2 className="font-semibold text-[32px]">
                Our Recent Clients
              </h2>

              <div className="flex gap-[24px] mt-4">
                <img src={client1} alt="" className="w-[150px] h-[24px]" />
                <img src={client2} alt="" className="w-[82px] h-[24px]" />
              </div>

              <div className="flex gap-[64px] mt-4">
                <img src={client4} alt="" className="w-[82px] h-[64px]" />
                <img src={client3} alt="" className="w-[130px] h-[64px]" />
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="flex flex-col gap-[10px]">

            {[0, 1].map((row) => (
              <div key={row} className="flex gap-[10px] flex-wrap">
                {[turito, kanakatala, hyno, hyno, hyno].map((logo, index) => (
                  <div
                    key={index}
                    className="w-[160px] h-[100px] rounded-[6px] bg-white/10 flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="max-w-[120px] max-h-[50px] object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

        {/* CAROUSEL */}
        <div className="flex justify-end mt-[40px]">
          <div
            className="relative overflow-hidden w-full max-w-[840px] h-[48px]"
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
              className="scroll-track gap-16"
              style={{ animationPlayState: pause ? "paused" : "running" }}
            >
              {[...scrollLogos, ...scrollLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="h-[32px] w-auto opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>

            {/* Fade Left */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            {/* Fade Right */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;