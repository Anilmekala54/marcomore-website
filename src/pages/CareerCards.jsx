import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Clock, MapPin } from "lucide-react";
import bag from "../assets/icons/bag.svg";
import profile from "../assets/icons/pro.svg";
import map from "../assets/icons/map.svg";

function CareerCards() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const jobs = [
    {
      title: "UI/UX Designer",
      type: "Full-Time",
      experience: "2+ Years",
      location: "Hyderabad",
      slug: "ui-ux-designer",
    },
    {
      title: "Graphic Designer",
      type: "Full-Time",
      experience: "2+ Years",
      location: "Hyderabad",
      slug: "graphic-designer",
    },
    {
      title: "Web Developer",
      type: "Full-Time",
      experience: "2+ Years",
      location: "Hyderabad",
      slug: "web-developer",
    },
    {
      title: "Social Media Marketing",
      type: "Full-Time",
      experience: "2+ Years",
      location: "Hyderabad",
      slug: "social-media-marketing",
    },
  ];

  return (
    <section className="py-8 lg:py-16 bg-[#F8F6F4]">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        
        <div className="text-center flex flex-col gap-6 items-center">
          <h1
            className="
            text-[32px]
            sm:text-[42px]
            md:text-[52px]
            lg:text-[60px]
            font-semibold
            bg-gradient-to-r
            from-[#E51F31]
            to-[#EE5125]
            bg-clip-text
            text-transparent
          "
          >
            Join Our Team
          </h1>

          <p className="text-black font-medium max-w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          
          <div className="flex text-[14px] lg:text-[16px] gap-4 mt-4 w-full max-w-[760px] justify-center">
            <SelectBox
              value={role}
              onChange={setRole}
              options={["UI/UX Designer", "Graphic Designer", "Web Developer"]}
              placeholder="Select your role"
            />

            <SelectBox
              value={location}
              onChange={setLocation}
              options={["Hyderabad", "Remote", "Toronto"]}
              placeholder="All Locations"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-16">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onApply={() => navigate(`/careers/${job.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerCards;



function SelectBox({ value, onChange, options, placeholder }) {
  return (
    <div className="relative w-full sm:w-[370px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          appearance-none
          w-full
          h-[54px]
          px-4
          pr-12
          rounded-[8px]
          bg-[#0000001A]
          border-none
          text-black/80
          focus:outline-none
         
        "
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-black/60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

function JobCard({ job, onApply }) {
  return (
    <div
      className="
      bg-[#0000000D]
      rounded-[14px]
      lg:p-6
p-4
      
    "
    >
      <div className="flex justify-between items-start flex-wrap gap-4">
        <h2 className="text-[30px] font-semibold text-black">{job.title}</h2>

        <button
          onClick={onApply}
          className="
            bg-gradient-to-r from-[#E51F31] to-[#EE5125]
            text-white
            text-sm
            px-5
            py-2
            rounded-full
            font-medium
            hover:opacity-90
            transition
          "
        >
          APPLY NOW
        </button>
      </div>

      <div className="flex flex-wrap items-center   gap-1 lg:gap-3 mt-4">
        <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
          <img src={bag} alt="" className="w-[16px] h-[16px]" />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
          <img src={profile} alt="" className="w-[16px] h-[16px]" />
          <span>{job.experience}</span>
        </div>

        <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
          <img src={map} alt="" className="w-[16px] h-[16px]" />
          <span>{job.location}</span>
        </div>
      </div>

      <p className="mt-4 text-black/70 text-sm leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </p>
    </div>
  );
}
