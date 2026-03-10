import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "../components/FooterSection";

function FrequentlyAskedQuestion() {

  const [activeId, setActiveId] = useState(null);
const faqs = [
  {
    id: 1,
    question: "What does Marcamor specialize in?",
    answer:
      "We build scalable brand ecosystems through branding, digital marketing, technology, and strategic consulting.",
  },
  {
    id: 2,
    question: "Do you offer end to end services?",
    answer:
      "Yes. We provide complete solutions from brand strategy to performance execution and analytics.",
  },
  {
    id: 3,
    question: "Which industries do you work with?",
    answer:
      "We work across technology, wellness, education, transport, D2C, services, and enterprise sectors.",
  },
  {
    id: 4,
    question: "Do you work with startups or established companies?",
    answer:
      "Both. We support early stage growth and large scale expansion.",
  },
  {
    id: 5,
    question: "How do you measure success?",
    answer:
      "Through defined KPIs such as traffic growth, conversion rates, acquisition cost, and revenue impact.",
  },
  {
    id: 6,
    question: "Do you offer franchise partnerships?",
    answer:
      "Yes. We are expanding through structured regional partnerships.",
  },
  {
    id: 7,
    question: "Do you operate internationally?",
    answer:
      "Yes. We serve clients across India, the United States, and the United Kingdom.",
  },
  {
    id: 8,
    question: "How can I start working with Marcamor?",
    answer:
      "Submit your requirements through our contact page and our team will review and respond.",
  },
  {
    id: 9,
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope and complexity. Most engagements begin within a few weeks after strategy alignment.",
  },

  {
    id: 10,
    question: "Do you provide customized solutions?",
    answer:
      "Yes. Every solution is tailored to the client’s industry, objectives, and growth stage.",
  },
  {
    id: 11,
    question: "Can I hire Marcamor for a single service?",
    answer:
      "Yes. Clients can engage us for specific services or complete ecosystem development.",
  },
  {
    id: 12,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes. We offer long term support, optimization, and performance monitoring.",
  },
  {
    id: 13,
    question: "How do you ensure quality control?",
    answer:
      "Through senior level oversight, structured workflows, and defined performance benchmarks.",
  },
  {
    id: 14,
    question: "Do you work with international clients?",
    answer:
      "Yes. We collaborate with clients across multiple global markets.",
  },
  {
    id: 15,
    question: "What is your onboarding process?",
    answer:
      "We begin with strategic consultation, define objectives, align scope, and then initiate structured execution.",
  },
  {
    id: 16,
    question: "Do you sign NDAs and confidentiality agreements?",
    answer:
      "Yes. Client confidentiality and data protection are strictly maintained.",
  },
  {
    id: 17,
    question: "How do you handle performance reporting?",
    answer:
      "We provide structured reports with measurable metrics aligned to business goals.",
  },
  {
    id: 18,
    question: "Can Marcamor handle large scale enterprise projects?",
    answer:
      "Yes. Our frameworks are designed to support scalable and enterprise level engagements.",
  }
];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  return (
    <section className="bg-gradient-to-b from-[#FDE6D7] to-white text-black">

      <div className="max-w-[1440px] mx-auto w-[90%] py-20">

        
        <div className="flex flex-col items-center gap-4 mb-16 max-w-[900px] mx-auto">
          <h1 className="text-[60px] font-semibold">FAQs</h1>
          <p className="font-medium text-center">
            Answers to Frequently Asked Questions
          </p>
          <p className="font-medium text-center">
           Explore how Marcamor operates across branding, digital growth, technology, and consulting. Our structured processes, performance systems, and scalable frameworks ensure clarity, consistency, and measurable outcomes.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                activeId={activeId}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

          <div className="space-y-6">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                activeId={activeId}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </section>
  );
}

export default FrequentlyAskedQuestion;



function FaqItem({ faq, activeId, toggleFAQ }) {

  const isOpen = activeId === faq.id;

  return (
    <div className="border-b border-black/10 pb-6">

      <div
        onClick={() => toggleFAQ(faq.id)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="text-[18px] font-medium">{faq.question}</h3>

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
}