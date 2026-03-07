import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Resources from "./Resources";

function Fqa() {
  const [activeId, setActiveId] = useState(null);

  const leftFaqs = [
    {
      id: "l1",
      question: "What does Marcamor specialize in?",
      answer:
        "We build scalable brand ecosystems through branding, digital marketing, technology, and strategic consulting.",
    },
    {
      id: "l2",
      question: "Do you offer end to end services?",
      answer:
        "Yes. We provide complete solutions from brand strategy to performance execution and analytics.",
    },
    {
      id: "l3",
      question: "Which industries do you work with?",
      answer:
        "We work across technology, wellness, education, transport, D2C, services, and enterprise sectors.",
    },
    {
      id: "l4",
      question: "Do you work with startups or established companies?",
      answer:
        "Both. We support early stage growth and large scale expansion.",
    },
    {
      id: "l5",
      question: "How do you measure success?",
      answer:
        "Through defined KPIs such as traffic growth, conversion rates, acquisition cost, and revenue impact.",
    },
     {
      id: "l6",
      question: "Do you offer franchise partnerships?",
      answer:
        "Yes. We are expanding through structured regional partnerships.",
    },
     {
      id: "l7",
      question: "Do you operate internationally?",
      answer:
        "Yes. We serve clients across India, the United States, and the United Kingdom.",
    },
     {
      id: "l8",
      question: "How can I start working with Marcamor?",
      answer:
        "TSubmit your requirements through our contact page and our team will review and respond.",
    },
      {
      id: "l9",
      question: "How long does a typical project take?",
      answer:
        "TProject timelines depend on scope and complexity. Most engagements begin within a few weeks after strategy alignment.",
    },
  ];

  const rightFaqs = [
    {
      id: "r1",
      question: "Do you provide customized solutions?",
      answer:
        "Yes. Every solution is tailored to the client’s industry, objectives, and growth stage.",
    },
    {
      id: "r2",
      question: "Can I hire Marcamor for a single service?",
      answer:
        "Yes. Clients can engage us for specific services or complete ecosystem development.",
    },
    {
      id: "r3",
      question: " Do you provide ongoing support after project completion?",
      answer:
        "Yes. We offer long term support, optimization, and performance monitoring.",
    },
    {
      id: "r4",
      question: "How do you ensure quality control?",
      answer:
        "Through senior level oversight, structured workflows, and defined performance benchmarks.",
    },
    {
      id: "r5",
      question: "Do you work with international clients?",
      answer:
        "Yes. We collaborate with clients across multiple global markets.",
    },
     {
      id: "r6",
      question: "What is your onboarding process?",
      answer:
        "We begin with strategic consultation, define objectives, align scope, and then initiate structured execution.",
    },
    
     {
      id: "r7",
      question: "Do you sign NDAs and confidentiality agreements?",
      answer:
        "Yes. Client confidentiality and data protection are strictly maintained.",
    },
    
     {
      id: "r8",
      question: "How do you handle performance reporting?",
      answer:
        "We provide structured reports with measurable metrics aligned to business goals.",
    },
     {
      id: "r9",
      question: "Can Marcamor handle large scale enterprise projects?",
      answer:
        "Yes. Our frameworks are designed to support scalable and enterprise level engagements.",
    },
    
    
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20  bg-gradient-to-b from-[#FDE6D7] to-white text-black">

     
      <div className="max-w-[1440px] mx-auto w-[90%]">

       
        <div className="mb-10">
          <button className="text-sm font-medium bg-white px-4 py-2 rounded-full uppercase tracking-wide">
            FAQ'S
          </button>
        </div>

      
        <div className="grid gap-8 lg:grid-cols-3">

          
          <div className="flex flex-col gap-6">

            <h2 className="text-[22px] lg:text-[28px] md:text-[34px] font-semibold leading-tight">
              Answers To Frequently Asked Questions
            </h2>

            <p className="text-[#00000080] text-[15px] leading-relaxed">
          Explore how Marcamor operates across branding, digital growth, technology, and consulting. Our structured processes, performance systems, and scalable frameworks ensure clarity, consistency, and measurable outcomes.
            </p>

           <button
  className="group h-[44px] w-fit px-6 rounded-full text-sm font-semibold border border-black/40 flex items-center gap-2 uppercase transition-all duration-300"
>
  <span className="relative">
    Schedule a Strategy Call
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </span>

  <ChevronRight size={16} />
</button>
          </div>

         
          <div className="lg:col-span-2 grid gap-10 md:grid-cols-2">

            {[leftFaqs, rightFaqs].map((group, colIndex) => (
              <div key={colIndex} className="space-y-6">

                {group.map((faq) => {
                  const isOpen = activeId === faq.id;

                  return (
                    <div key={faq.id} className="border-b border-black/10 pb-6">

                     
                      <div
                        onClick={() => toggleFAQ(faq.id)}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <h3 className="text-[14px] font-medium">
                          {faq.question}
                        </h3>

                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                     
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

      

    </section>
  );
}

export default Fqa;