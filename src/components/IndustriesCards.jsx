import React, { useState } from "react";
import IndustryCard from "./IndustryCard";

const industriesData = [
  {
    title: "Not-For-Profit",
    desc: "All NFPs receive 10% discount as a token of our support",
    content:
      "We help non-profits build impactful digital experiences that increase donations and engagement.",
  },
  {
    title: "Real Estate & Construction",
    desc: "Pioneers in real estate web design and marketing",
    content:
      "We create high-converting websites for real estate brands with strong UX and lead generation.",
  },
  {
    title: "B2B",
    desc: "Custom web design & branding for B2B",
    content:
      "Professional branding and scalable web systems tailored for B2B companies.",
  },
  {
    title: "E-Commerce",
    desc: "Custom web design & branding for E-Commerce",
    content:
      "We build high-converting e-commerce websites with seamless user experiences.",
  },
  {
    title: "Education",
    desc: "Custom web design & branding for Education",
    content:
      "We create high-converting websites for educational institutions with strong UX and lead generation.",
  },
  {
    title: "Technology",
    desc: "Custom web design & branding for Technology",
    content:
      "Professional branding and scalable web systems tailored for technology companies.",
  },
  {
    title: "Business-to-Consumer",
    desc: "Custom web design & branding for Business-to-Consumer",
    content:
      "We build high-converting websites for B2C brands with strong UX and lead generation.",
  },
  {
    title: "Real Health & Wellness & Construction",
    desc: "Custom web design & branding for Real Health & Wellness & Construction",
    content:
      "We create high-converting websites for health, wellness, and construction brands.",
  },
  {
    title: "Law",
    desc: "Custom web design & branding for Law",
    content:
      "Professional branding and scalable web systems tailored for law firms.",
  },
  {
    title: "Food & Beverages",
    desc: "Custom web design & branding for Food & Beverages",
    content:
      "We build high-converting websites for food and beverage brands.",
  },
  {
    title: "Professional Services",
    desc: "Custom web design & branding for Professional Services",
    content:
      "We build high-converting websites for professional services brands.",
  },
  {
    title: "Entertainment & Media",
    desc: "Custom web design & branding for Entertainment & Media",
    content:
      "We build high-converting websites for entertainment and media brands.",
  },
  {
    title: "StartUps",
    desc: "Custom web design & branding for StartUps",
    content:
      "We help startups launch scalable, growth-focused digital platforms.",
  },
  {
    title: "Sports & Fitness",
    desc: "Custom web design & branding for Sports & Fitness",
    content:
      "We build high-converting websites for sports and fitness brands.",
  },
  {
    title: "Travel & Hospitality",
    desc: "Custom web design & branding for Travel & Hospitality",
    content:
      "We build high-converting websites for travel and hospitality brands.",
  },
];

function IndustriesCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF9F6] ">

     
      <div className="max-w-[90%] mx-auto w-full pb-20 ">

        <div
          className="
            grid
            gap-4
            lg:gap-6
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
           
          "
        >
          {industriesData.map((item, index) => (
            <IndustryCard
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustriesCards;