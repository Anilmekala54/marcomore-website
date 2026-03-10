import React, { useState, useRef } from "react";
import { ChevronRight, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Digital Marketing");
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const servicesData = {
    "Digital Marketing": [
      {name:"Digital Marketing", path:"/digitalmarketing"},
      { name: "SEO", path: "/searchengineoptimization" },
      { name: "Performance Marketing", path: "/performancemarketing" },
      { name: "Social Media Marketing", path: "/socialmediamarketing" },
      { name: "Email Marketing", path: "/emailmarketing" },
      { name: "Content Marketing", path: "/services/contentmarketing" },
      { name: "Affiliate Marketing", path: "/affiliatemarketing" },
      { name: "Influencer Marketing", path: "/influencermarketing" },
      { name: "YouTube Marketing", path: "/services/youtubemarketing" },
    ],

    "Branding & Design": [
      { name: "Logo Design", path: "/services/logo-design" },
      { name: "Brand Strategy", path: "/services/brand-strategy" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
    ],

    "Business Consulting": [
      { name: "Growth Strategy", path: "/services/growth-strategy" },
      { name: "Market Research", path: "/services/market-research" },
    ],

    "Web & App Development": [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
    ],

    "Technology & Product Development": [
      { name: "Video Production", path: "/services/video-production" },
      { name: "Photography", path: "/services/photography" },
      { name: "Copywriting", path: "/services/copywriting" },
    ],

    "Market Research & Consumer Insights": [
      { name: "Consumer Research", path: "/services/consumer-research" },
      { name: "Competitor Analysis", path: "/services/competitor-analysis" },
      { name: "Industry Insights", path: "/services/industry-insights" },
    ],

    "Performance & Analytics": [
      { name: "Analytics Setup", path: "/services/analytics-setup" },
      { name: "Conversion Tracking", path: "/services/conversion-tracking" },
      { name: "Data Reporting", path: "/services/data-reporting" },
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

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
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
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 z-40 w-[842px] left-[150px]">

          <div
            style={{
              backdropFilter: "blur(100px)",
              WebkitBackdropFilter: "blur(100px)",
              backgroundColor: "#313131"
            }}
            className="rounded-[20px] border-2 border-white shadow-2xl flex flex-col gap-[16px] text-black p-8"
          >

            <div className="flex gap-[16px]">

             
              <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">
                <h3 className="font-bold py-[16px] px-[12px] text-[18px]">
                  Services
                </h3>

                <ul>
                  {Object.keys(servicesData).map((category) => (
                    <li
                      key={category}
                      onMouseEnter={() => setActive(category)}
                      className="cursor-pointer flex justify-between items-center font-medium p-[14px] hover:bg-black/10 rounded-lg transition"
                    >
                      {category}
                      <ChevronRight size={18} />
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">
                <h3 className="font-bold py-[16px] px-[12px] text-[18px]">
                  {active}
                </h3>

                <ul>
                  {servicesData[active].map((item) => (
                    <li
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="cursor-pointer flex justify-between items-center font-medium p-[14px] hover:bg-black/10 rounded-lg transition"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-4">

              <div
                onClick={() => navigate("/contact")}
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
      )}
    </div>
  );
}

export default ServicesMegaMenu;