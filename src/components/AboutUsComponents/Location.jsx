import React from "react";
import global from "../../assets/images/global.svg";
import canada from "../../assets/images/office3.svg";
import usa from "../../assets/images/office2.svg";
import india from "../../assets/images/office1.svg";
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
       
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white/10 rounded-full text-[14px] font-medium">
            Locations
          </span>
        </div>

        
       <div className="text-center max-w-[1000px] mx-auto px-4">
  <h2 className="font-semibold leading-[1.1] tracking-[-0.5px]">

   
    <span className="block
      text-[26px]
      sm:text-[40px]
      md:text-[48px]
      lg:text-[60px]">
      Collaborating With Clients
    </span>

    
    <span className="mt-3 flex items-center justify-center gap-4
      text-[26px]
      sm:text-[40px]
      md:text-[48px]
      lg:text-[60px]">

      <span>Across</span>

     
      <span className="inline-flex items-center gap-3
        bg-white/10
        px-5
        py-2
        rounded-full
        backdrop-blur-sm">

        <img
          src={global}
          alt="global"
          className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
        />

        <span className="whitespace-nowrap">
          The Globe
        </span>

      </span>
    </span>
  </h2>

  
  <p className="mt-8 text-white/60
    text-[15px]
    sm:text-[16px]
    max-w-[760px]
    mx-auto
    leading-relaxed">
    Operating across India, the United States, and the United Kingdom, Marcamor collaborates with ambitious companies worldwide. Our cross-functional team works seamlessly across time zones to build scalable brands, digital platforms, and performance-driven growth systems.
  </p>
</div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div className="relative rounded-[12px] overflow-hidden group">
            <img
              src={india}
              alt="Canada HQ"
              className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute top-0 blur-6 right-4 bg-[#00000080] text-[17px] font-semibold px-[12px] py-[6px] rounded-bl-2xl rounded-br-2xl">
              India Headquarter
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
               Hyderabad
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                 
                 Hyderabad, Telangana 500081.
                </p>

               <button
  className="
    group
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
    transition-all duration-300
  "
>
  <span className="relative">
    Visit Us
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ExternalLink size={18} />
</button>
              </div>
            </div>
          </div>
        
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
               California
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
                 San Francisco, California 94108.
                </p>

              <button
  className="
    group
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
    transition-all duration-300
  "
>
  <span className="relative">
    Visit Us
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>

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
             London
              </h3>

              <div className="max-w-[300px]">
                <p className="text-[16px]  font-semibold text-white/90 leading-relaxed">
               Harrow, Greater London HA1 2LW.
                </p>

               <button
  className="
    group
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
    transition-all duration-300
  "
>
  <span className="relative">
    Visit Us
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ExternalLink size={18} />
</button>
              </div>
            </div>
          </div>
          



        </div>

       
       <div className=" hidden
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
