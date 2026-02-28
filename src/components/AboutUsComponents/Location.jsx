import React from "react";
import global from "../../assets/images/global.svg";
import canada from "../../assets/images/canada.svg";
import usa from "../../assets/images/toranto.png";
import { ExternalLink } from "lucide-react";

function Location() {
  const cities = [
    "New York",
    "Houston",
    "Montreal",
    "Vancouver",
    "Los Angeles",
    "Washington",
    "Dallas",
    "San Francisco",
  ];

  return (
    <section className="bg-black text-white py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto w-[90%]">
        {/* ===== Badge ===== */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white/10 rounded-full text-[14px] font-medium">
            Locations
          </span>
        </div>

        {/* ===== Heading ===== */}
       <div className="text-center max-w-[1000px] mx-auto px-4">
  <h2 className="font-semibold leading-[1.1] tracking-[-0.5px]">

    {/* First Line */}
    <span className="block
      text-[26px]
      sm:text-[40px]
      md:text-[48px]
      lg:text-[60px]">
      Collaborating With Clients
    </span>

    {/* Second Line */}
    <span className="mt-3 flex items-center justify-center gap-4
      text-[26px]
      sm:text-[40px]
      md:text-[48px]
      lg:text-[60px]">

      <span>Across</span>

      {/* Badge */}
      <span className="inline-flex items-center gap-3
        bg-white/10
        px-5
        py-2
        rounded-full
        backdrop-blur-sm">

        <img
          src={global}
          alt="global"
          className="w-[20px] sm:w-[24px] md:w-[26px]"
        />

        <span className="whitespace-nowrap">
          North America
        </span>

      </span>
    </span>
  </h2>

  {/* Paragraph */}
  <p className="mt-8 text-white/60
    text-[15px]
    sm:text-[16px]
    max-w-[760px]
    mx-auto
    leading-relaxed">
    With headquarters in Toronto and Chicago, our collaborative reach
    extends across North America. Our diverse team of designers,
    developers, and strategists are located across Canada and the US,
    enabling seamless communication with clients worldwide.
  </p>
</div>

        {/* ===== Image Cards ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Canada */}
          <div className="relative rounded-[12px] overflow-hidden group">
            <img
              src={usa}
              alt="Canada HQ"
              className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
              Canada Headquarter
            </div>

            <div
              className="
  absolute 
  bottom-8
  left-6 
  right-6
  flex  justify-between   
  
  gap-6
"
            >
              <h3 className="text-[24px] font-semibold">
                Toronto
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                  Suite 120 - 2005 Sheppard Ave E,
                  <br />
                  North York, ON M2J5B4
                </p>

                <button
                  className="
      mt-4 
      px-4 
      py-2 
      bg-white/20 
      text-[13px] 
      sm:text-[14px]
      font-bold 
      text-white 
      flex 
      items-center 
      gap-2 
      rounded-full
      backdrop-blur-sm
   
    "
                >
                  Visit Us
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* USA */}
            <div className="relative rounded-[12px] overflow-hidden group">
            <img
              src={canada}
              alt="Canada HQ"
              className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30 "></div>

            <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
              USA Headquarter
            </div>

            <div
              className="
  absolute 
  bottom-8
  left-6 
  right-6
  flex  justify-between   
  
  gap-6
"
            >
              <h3 className="text-[24px] font-semibold">
               Chicago
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                 30 N Michigan Ave, Suite 504
Chicago, Il 60602
                </p>

                <button
                  className="
      mt-4 
      px-4 
      py-2 
      bg-white/20 
      text-[13px] 
      sm:text-[14px]
      font-bold 
      text-white 
      flex 
      items-center 
      gap-2 
      rounded-full
      backdrop-blur-sm
   
    "
                >
                  Visit Us
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
          



        </div>

       
       <div className="
  grid 
  
  grid-cols-2 
   
  lg:grid-cols-4 
  gap-6 
  mt-12
">
  {cities.map((city, index) => (
    <div
      key={index}
      className="
        bg-[#FFFFFF26]
        h-[70px] sm:h-[80px] md:h-[84px]
        rounded-[12px]
        flex
        items-center
        justify-center
        text-center
        text-[16px] sm:text-[18px] md:text-[20px]
        font-medium
        hover:bg-white/20
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {city}
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Location;
