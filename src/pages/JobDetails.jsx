import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { MoveLeft, Share2 } from "lucide-react";
import ResumeUpload from "../components/ResumeUplod";
import FooterSection from "../components/FooterSection";
import bag from "../assets/icons/bag.svg";
import profile from "../assets/icons/pro.svg";
import map from "../assets/icons/map.svg";

function JobDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { state } = useLocation();

  return (
    <section className="bg-[#F8F6F4] py-10 lg:py-16">
      <div className="max-w-[1440px] w-[90%] mx-auto mb-10 lg:mb-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2  text-sm text-black font-semibold mb-6 hover:text-black transition"
        >
          <MoveLeft size={16} />
          <span className="hidden lg:block">Back to Careers</span>
        </button>

        <div className="bg-[#0000000D] rounded-[14px] p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <h1 className="text-[28px] lg:text-[44px] font-semibold text-[#EE5125] capitalize">
              {slug}
            </h1>

            <div className="flex  flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
                <img src={bag} alt="" className="w-[16px] h-[16px]" />
                <span>{state?.type}</span>
              </div>

              <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
                <img src={profile} alt="" className="w-[16px] h-[16px]" />
                <span>{state?.experience}</span>
              </div>

              <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
                <img src={map} alt="" className="w-[16px] h-[16px]" />
                <span>{state?.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-col flex  items-end gap-4 ">
            <button
              className="self-start lg:self-center
              bg-gradient-to-r from-[#E51F31] to-[#EE5125]
              text-white
              px-6 py-2
              rounded-full
              text-sm font-medium
              hover:opacity-90 transition"
            >
              APPLY NOW
            </button>
            <div className="bg-[#0000001A] px-3 py-1.5 rounded-[8px]">
              <Share2 />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-5 lg:mt-10">
        
          <div className="lg:col-span-2 bg-[#0000000D] rounded-[14px] p-6 lg:p-8">
            <h2 className="text-[30px] font-semibold mb-4">About the Role</h2>

            <p className="text-sm text-black leading-relaxed mb-6">
             {state.AboutRole}
            </p>

            <hr className="my-6 border-[#00000080] " />

            <SectionTitle title="Roles & Responsibilities:" />
            <ul className="list-disc pl-5 text-sm text-black space-y-2 mb-6">
              {state.RolesResponsibilities.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

            <SectionTitle title="Requirements:" />
            <ul className="list-disc pl-5 text-sm text-black space-y-2 mb-6">
               {state. Requirements.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

            <SectionTitle title="Benefits:" />
           <ul className="list-disc pl-5 text-sm text-black space-y-2 mb-6">
               {state.  Benefits.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
              </ul>
          </div>

          {/* RIGHT SIDE - APPLY FORM */}
          <div className="bg-[#0000000D] rounded-[14px] p-6 lg:p-8">
            <h2 className="text-lg font-semibold mb-6">Apply for this role:</h2>

            <form className="space-y-4">
              <Input label="Full Name" required />
              <Input label="Email" required />
              <Input label="Phone Number" required />

              <Select label="Experience (Years)" required />

              <Input label="Portfolio / LinkedIn URL" required />

              <ResumeUpload />

              <button
                type="submit"
                className="w-full
                  bg-gradient-to-r from-[#E51F31] to-[#EE5125]
                  text-white
                  py-3
                  rounded-[8px]
                  font-medium
                  hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />
    </section>
  );
}

export default JobDetails;

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-[#0000001A] px-3 py-1.5 rounded-[8px] text-sm font-medium">
      <img src={icon} alt="" className="w-[14px] h-[14px]" />
      <span>{text}</span>
    </div>
  );
}

function SectionTitle({ title }) {
  return <h3 className="text-sm font-semibold mb-3 ">{title}</h3>;
}

function Input({ label, required }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#797675]">
        {label}
        {required && <span className="text-[#EE5125] ml-1">*</span>}
      </label>
      <input className="w-full h-[44px] rounded-[8px] bg-[#0000000D] border-none  px-4 focus:outline-none" />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#797675]">
        {label}
      </label>
      <select className="w-full h-[44px] rounded-[8px] bg-[#0000000D] text-[#00000040] border border-black/10 px-4 focus:outline-none">
        <option>Please Select</option>
      </select>
    </div>
  );
}
