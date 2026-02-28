import React, { useState, useRef } from "react";
import { ChevronRight, MoveRight, Dot } from "lucide-react";
import line from "../assets/images/line1.svg";

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Digital Marketing");
  const timeoutRef = useRef(null);

  const servicesData = {
    "Digital Marketing": [
      "SEO",
      "Performance Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Affiliate Marketing",
      "Influencer Marketing",
      "YouTube Marketing",
    ],
    "Branding & Design": ["Logo Design", "Brand Strategy", "UI/UX Design"],
    "Business Consulting": ["Growth Strategy", "Market Research"],
    "Web & App Development": [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
    ],
    "Technology & Product Development": [
      "Video Production",
      "Photography",
      "Copywriting",
    ],
    "Market Research & Consumer Insights": [
      "Video Production",
      "Photography",
      "Copywriting",
    ],
    "Performance & Analytics": [
      "Video Production",
      "Photography",
      "Copywriting",
    ],
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center justify-center gap-2 text-white font-semibold hover:text-gray-300 transition">
        Services
        <span className="w-[5px] h-[5px] bg-[#EE5125] rounded-full"></span>
      </button>

      
      {open && (
        <div className="flex flex-col">
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-10 z-40 w-[842px] h-[550px] left-[100px] ">
            <div
              className=" rounded-[20px] border-2 border-white shadow-2xl  flex flex-col gap-[16px] text-black 
      bg-[#00000059] 
    p-8"
            >
              <div className="flex gap-[16px] ">
                <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]   ">
                  <h3 className="font-bold py-[16px] px-[12px] text-[18px] cursor-pointer flex justify-between items-center px-[12px]">
                    Services
                  </h3>
                  <ul className="">
                    {Object.keys(servicesData).map((category) => (
                      <li
                        key={category}
                        onMouseEnter={() => setActive(category)}
                        className="cursor-pointer flex justify-between items-center font-medium p-[12px]"
                      >
                        {category}
                        <span>
                          <ChevronRight />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">
                  <h3 className="font-bold py-[16px] px-[12px] text-[18px] cursor-pointer flex justify-between items-center px-[12px]">
                    {active}
                  </h3>
                  <ul className="">
                    {servicesData[active].map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer flex justify-between items-center font-medium p-[12px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div
                  className="
    flex items-center justify-center gap-2
    w-[140px] h-[37px]
    rounded-full
    bg-gradient-to-r from-[#E51F31] to-[#EE5125]
    text-white font-semibold text-sm
    cursor-pointer
    
    hover:scale-105
    transition-all duration-300
  "
                >
                  <span>Get Started</span>
                  <MoveRight size={16} />
                </div>
                <div className="flex items-center gap-6 text-white/50 text-sm font-medium">
                  <span className="cursor-pointer hover:text-white transition">
                    Facebook
                  </span>

                  <div className="w-px h-4 bg-white/40"></div>

                  <span className="cursor-pointer hover:text-white transition">
                    Instagram
                  </span>

                  <div className="w-px h-4 bg-white/40"></div>

                  <span className="cursor-pointer hover:text-white transition">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesMegaMenu;
