import React, { useState } from "react";
import client1 from "../assets/images/client1.svg";
import client2 from "../assets/images/client2.svg";
import client3 from "../assets/images/client3.svg";
import client4 from "../assets/images/client4.svg";
import turito from "../assets/images/Turito-logo.svg";

import hyno from "../assets/images/hyno.svg";

import isha from "../assets/images/isha.svg";
import tata1 from "../assets/images/tata1.svg";
import tata2 from "../assets/images/tata2.svg";
import tdp from "../assets/images/tdp.svg";
import KMLlogo from "../assets/images/KMLogo.svg";
import ecl from '../assets/images/ECL1.svg'
import tsrtclogo from "../assets/images/tsrtclogo.svg";
import Congress from "../assets/images/Indian_National_Congress_hand_logo.svg";
import vedanth from '../assets/images/Vedantu.svg'
import vsparkel from '../assets/images/vsparkel.png'

import ekam from '../assets/images/EKAM.svg'
import kankatala from '../assets/images/kankatala1.svg'
import upgrad from '../assets/images/upGrad.svg'
import ThinkRight from '../assets/images/ThinkRight.svg'
import superk from '../assets/images/SUPERK.svg'
import biggarden from '../assets/images/biggarden.svg'
import garden from '../assets/images/garden.svg'

function Clients() {
  const [pause, setPause] = useState(false);

  const cardslog = [
    vedanth,
    isha,
    tata1,
    tata2,
    tdp,
    KMLlogo,
    ecl,
    tsrtclogo,
     vsparkel,
    Congress,
  ];

  const scrollLogos = [ekam, kankatala,upgrad, ThinkRight, superk, biggarden,garden];

  return (
    <section className="bg-black text-white py-[80px] overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-12 lg:gap-16">
          <div className="w-full lg:max-w-[420px]">
            <button className="text-[14px] mb-4 font-medium text-white/50 bg-white/10 py-[6px] px-[12px] rounded-2xl">
              Clients & Achievements
            </button>

            <div className="flex flex-col gap-[20px]">
              <h2 className="font-semibold text-[26px] lg:text-[32px]">
                Our Recent Clients
              </h2>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px]">
              {cardslog.map((card, index) => {
                const logos = [
                   vedanth,
                   isha,
                  tata1,
                  tata2,
                    ecl,
                  tdp,
                  KMLlogo,
                
                  tsrtclogo,
                   vsparkel,
                  Congress,
                  
                ];
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
                      src={logos[index % 10]}
                      alt=""
                      className="max-w-[100px] max-h-[100px] object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-[60px]">
          <div
            className="relative overflow-hidden w-full h-auto"
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
              className="scroll-track gap-12 lg:gap-16 "
              style={{ animationPlayState: pause ? "paused" : "running" }}
            >
              {[...scrollLogos, ...scrollLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className=" w-auto opacity-80 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>

            <div className="absolute left-0 top-0 h-full w-12 lg:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            <div className="absolute right-0 top-0 h-full w-12 lg:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
