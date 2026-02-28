import React, { useEffect, useRef, useState } from "react";
import member1 from "../../assets/images/member2.svg";
import member2 from "../../assets/images/member3.svg";
import member3 from "../../assets/images/member3.svg";
import member4 from "../../assets/images/member3.svg";
import member5 from "../../assets/images/member3.svg";

const teamMembers = [
  {
    img: member1,
    name: "Sandeep Tekkali",
    role: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: member2,
    name: "Marcus Williams",
    role: "Head of Product Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: member3,
    name: "Priya Sharma",
    role: "Operations Director",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: member4,
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: member5,
    name: "Sofia Reyes",
    role: "Creative Strategy Lead",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const cards = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Marcus Williams",
    role: "Head of Product Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "James Okonkwo",
    role: "Chief Technology Officer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function SeniorTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (currentIndex >= teamMembers.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex]);

  return (
    <section className="bg-[#FFF9F6] text-black py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-10">
          <span className="text-[14px] font-medium tracking-wide">
            Our Team
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16  mb-16">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] font-semibold leading-[1.1]">
            Meet Our <br /> Senior Team
          </h2>
          <p className="text-[15px] lg:text-[16px] font-medium leading-relaxed text-black/70 max-w-[480px]">
            At Marcamor, our goal is to create great things everyday. We do this
            by having an amazing team around us. Our team not only has an eye
            for design, creativity, and innovation, but they also love and take
            pride in what they do.
          </p>
        </div>

        <div
          className="relative overflow-hidden mb-6 lg:mb-16"
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3 group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 m-4 p-4 bg-black/50 backdrop-blur-[16px] border-2 border-white text-white">
                    <h3 className="text-[18px] font-semibold leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[14px] mt-1">{member.role}</p>
                    <div className="overflow-hidden max-h-0 opacity-0 mb-0 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mb-3 transition-all duration-500 ease-out">
                      <p className="text-[13px] leading-relaxed">
                        {member.desc}
                      </p>
                    </div>

                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-[#0000000D] gap-4 rounded-[10px]"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-[16px] font-semibold">{card.name}</h3>
                <span className="text-[14px] text-black/50 font-semibold">
                  {card.role}
                </span>
              </div>
              <div className="border-t border-black/10" />
              <p className="text-[14px] text-black/60 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeniorTeam;
