import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Resources from "./Resources";

function Fqa() {
  const [activeId, setActiveId] = useState(null);

  const leftFaqs = [
    {
      id: "l1",
      question: "Why choose Marcamor?",
      answer:
        "We combine creativity and strategy to deliver award-winning digital experiences.",
    },
    {
      id: "l2",
      question: "How long will a web design project take?",
      answer:
        "Typically 4–8 weeks depending on complexity and scope.",
    },
    {
      id: "l3",
      question: "Do you offer copywriting services?",
      answer:
        "Yes, we provide copywriting as part of our marketing solutions.",
    },
    {
      id: "l4",
      question: "Do you offer marketing audit & consultation service?",
      answer:
        "Yes, we help businesses optimize their strategies with audits and consultation.",
    },
    {
      id: "l5",
      question: "What clientele or industries do you work with?",
      answer:
        "We work across technology, healthcare, finance, e-commerce, and more.",
    },
  ];

  const rightFaqs = [
    {
      id: "r1",
      question: "What services do you offer?",
      answer:
        "We offer web design, branding, SEO, and marketing services.",
    },
    {
      id: "r2",
      question: "How big is your team?",
      answer:
        "Our team consists of 50+ professionals across multiple disciplines.",
    },
    {
      id: "r3",
      question: "What is included in a branding package?",
      answer:
        "Logo, brand guidelines, typography, color palette, and marketing assets.",
    },
    {
      id: "r4",
      question: "Do you offer SEO services?",
      answer:
        "Yes, SEO is part of our digital marketing offering.",
    },
    {
      id: "r5",
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we ensure websites stay updated and optimized.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-[100px] bg-gradient-to-b from-[#FDE6D7] to-white text-black">

      {/* Global Container */}
      <div className="max-w-[1440px] mx-auto w-[90%]">

        {/* Badge */}
        <div className="mb-10">
          <button className="text-sm font-medium bg-white px-4 py-2 rounded-full uppercase tracking-wide">
            FAQ'S
          </button>
        </div>

        {/* Layout */}
        <div className="grid gap-16 lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">
              Answers To Frequently Asked Questions
            </h2>

            <p className="text-black/70 text-[15px] leading-relaxed">
              Curious about how Marcamor operates? Explore our FAQ section
              for a comprehensive understanding of our services.
            </p>

            <button className="h-[44px] w-fit px-6 rounded-full text-sm font-semibold border border-black/40 flex items-center gap-2 uppercase hover:bg-black hover:text-white transition-all duration-300">
              Let’s Discuss
              <ChevronRight size={16} />
            </button>
          </div>

          {/* RIGHT FAQ GRID */}
          <div className="lg:col-span-2 grid gap-12 md:grid-cols-2">

            {[leftFaqs, rightFaqs].map((group, colIndex) => (
              <div key={colIndex} className="space-y-6">

                {group.map((faq) => {
                  const isOpen = activeId === faq.id;

                  return (
                    <div key={faq.id} className="border-b border-black/10 pb-6">

                      {/* Question */}
                      <div
                        onClick={() => toggleFAQ(faq.id)}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <h3 className="text-[18px] font-medium">
                          {faq.question}
                        </h3>

                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Answer */}
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-black/70 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>
            ))}

          </div>

        </div>

      </div>

      <Resources />

    </section>
  );
}

export default Fqa;