import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import bag from "../assets/icons/bag.svg";
import profile from "../assets/icons/pro.svg";
import map from "../assets/icons/map.svg";
import {MoveLeft,Share2} from "lucide-react"
import ResumeUpload from "../components/ResumeUplod";
import FooterSection from "../components/FooterSection";


function JobDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();

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
            <h1 className="text-[28px] lg:text-[44px] font-semibold text-[#EE5125]">
              {slug}
            </h1>

            <div className="flex  flex-wrap gap-3 mt-4">

              <Badge icon={bag} text="Full-Time" />
              <Badge icon={profile} text="2+ Years" />
              <Badge icon={map} text="Hyderabad" />

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

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-5 lg:mt-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-[#0000000D] rounded-[14px] p-6 lg:p-8">

            <h2 className="text-[30px] font-semibold mb-4">
              About the Role
            </h2>

            <p className="text-sm text-black leading-relaxed mb-6">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>

            <hr className="my-6 border-[#00000080] " />

            <SectionTitle title="Roles & Responsibilities:" />
            <ul className="list-disc pl-5 text-sm text-black space-y-2 mb-6">
              <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
              <li>Write clean, maintainable code.</li>
              <li>participate in code reviews and architectural code.</li>
              <li>Troubleshoot and debug issues in production environments.</li>
              <li>Mentor junior developers and foster a culture of learning.</li>
            </ul>

            <SectionTitle title="Requirements:" />
            <ul className="list-disc pl-5 text-sm text-black space-y-2 mb-6">
              <li>3+ years of professional experience in a similar role.</li>
              <li>Strong understanding of modern web technologies.</li>
              <li>Experience with cloud platforms (AWS/GCP/Azure). </li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>Strong communication skills in English.</li>
            </ul>

            <SectionTitle title="Benefits:" />
            <ul className="list-disc pl-5 text-sm text-black space-y-2">
              <li>Competitive salary and equity package.</li>
              <li>Comprehensive health, dental, and vision insurance.</li>
              <li>Unlimited PTO and flexible working hours.</li>
              <li>Annual learning and development budget.</li>
              <li>Remote-first culture with regular team retreats.</li>
            </ul>

          </div>

          {/* RIGHT SIDE - APPLY FORM */}
          <div className="bg-[#0000000D] rounded-[14px] p-6 lg:p-8">

            <h2 className="text-lg font-semibold mb-6">
              Apply for this role:
            </h2>

            <form className="space-y-4">

              <Input label="Full Name"  required/>
              <Input label="Email" required />
              <Input label="Phone Number" required/>

              <Select label="Experience (Years)"   required />

              <Input label="Portfolio / LinkedIn URL" required/>

             
            <ResumeUpload/>

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
      <FooterSection/>
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
  return (
    <h3 className="text-sm font-semibold mb-3 ">
      {title}
    </h3>
    
  );
}

function Input({ label , required }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#797675]">
        {label}
        {required && <span className="text-[#EE5125] ml-1">*</span>}
      </label>
      <input
        className="w-full h-[44px] rounded-[8px] bg-[#0000000D] border-none  px-4 focus:outline-none"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#797675]">
        {label}
      </label>
      <select
        className="w-full h-[44px] rounded-[8px] bg-[#0000000D] text-[#00000040] border border-black/10 px-4 focus:outline-none"
      >
        <option>Please Select</option>
      </select>
    </div>
  );
}

