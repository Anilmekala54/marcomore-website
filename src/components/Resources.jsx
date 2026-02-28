import React, { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

function Resources() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Latest Business Articles",
      articles: [
        "Business Ideas of 2025",
        "Business Niches Thriving in 2025",
        "How to Name Your Business",
      ],
      exploreText: "Explore All Business Articles",
    },
    {
      title: "Latest Marketing Articles",
      articles: [
        "Top Marketing Trends in 2025",
        "How to Build a Strong Brand",
        "Social Media Growth Strategies",
      ],
      exploreText: "Explore All Marketing Articles",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lg:py-20 py-5">
      
      <div className="max-w-[1440px] mx-auto w-[90%]">

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">

          
          <div className="flex flex-col gap-4 lg:w-[30%]">
            <span className="text-sm font-medium bg-neutral-100 px-4 py-2 rounded-full w-fit">
              Helpful Content
            </span>

            <h2 className="text-[28px] md:text-[32px] font-semibold">
              Resources
            </h2>
          </div>

         
          <div className="flex flex-col md:flex-row gap-2 lg:gap-8 lg:w-[70%]">

            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="flex-1">

                  
                  <div
                    onClick={() => toggle(index)}
                    className="h-[67px] px-6 flex items-center justify-between rounded-[10px] cursor-pointer transition-all duration-300 bg-[#F2F2F2] hover:bg-[#FEF4EE] border-b border-black/10"
                  >
                    <span
                      className={`text-[18px] font-medium transition ${
                        isOpen ? "text-[#F05623]" : "text-black"
                      }`}
                    >
                      {item.title}
                    </span>

                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>

                 
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden bg-[#F2F2F2] px-2 py-2 lg:px-6 lg:py-6 rounded-b-[10px]">

                      {item.articles.map((article, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center text-[18px] font-medium cursor-pointer hover:text-[#F05623] transition hover:bg-[#FEF4EE] p-[12px] rounded-lg"
                        >
                          <span>{article}</span>
                          <ChevronRight size={18} />
                        </div>
                      ))}

                      <button className="mt-4 bg-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:text-[#F05623] transition">
                        {item.exploreText}
                        <ChevronRight size={16} />
                      </button>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resources;