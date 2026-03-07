import React from "react";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import contact from "../assets/images/contact-logos.svg";

function ContactUs() {
  return (
    <section className="bg-[#FFF9F6] text-black pb-20 py-10">
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-[130px]">
          
          
          <div className="bg-white rounded-[14px] p-6  md:p-[44px] shadow-sm relative flex flex-col justify-between min-h-[600px]">
            
            <div>
              <span className="inline-block text-[13px] font-medium bg-black/5 px-4 py-2 rounded-full mb-6">
                Let's Talk
              </span>

              <h2 className="lg:text-[30px] text-[20px] font-semibold mb-5 leading-tight">
               Start the Conversation
              </h2>

              <p className="text-[16px] text-black/60 leading-[1.6] max-w-[300px] mb-8">
               We collaborate with growth-focused businesses ready to build structured, scalable, and market-defining brands. Share your vision, and our team will evaluate how we can support your next phase of expansion.
              </p>

              
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[17px] font-semibold">Or, Call Us at</h3>

              <a
                href="tel:+919985202223"
                className="flex items-center gap-2 text-[14px] font-semibold text-[#E74C3C] hover:opacity-80 transition"
              >
                <PhoneCall className="w-[15px] h-[15px]" />
                +91 99852 02223
              </a>

              <a
                href="mailto:info@marcamor.com"
                className="flex items-center gap-2 text-[14px] font-semibold text-[#E74C3C] hover:opacity-80 transition"
              >
                <Mail className="w-[15px] h-[15px]" />
                info@marcamor.com
              </a>
            </div>

            <img
              src={contact}
              alt="contact decorative"
              className="absolute bottom-6 right-6 w-[143px] h-[143px] pointer-events-none"
            />
          </div>

          
          <form className="space-y-2 md:space-y-6 max-[375px]:space-y-4">

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-[375px]:gap-3">
    <Input label="First Name" required />
    <Input label="Last Name" required />
  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-[375px]:gap-3">
    <Input label="Email" required />
    <Input label="Phone Number" required />
  </div>

 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-[375px]:gap-3">
    <Select label="What services are you looking for?" required />
    <Select label="Where did you hear about us?" required />
  </div>

  <Select label="What is your budget?" required />

 
  <div>
    <Label text="Tell us more about your project" required />
    <textarea className="w-full min-h-[120px] rounded-lg bg-[#0000000D] border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 resize-none" />
  </div>

 
  <div>
    <Label text="File upload" />
    <input
      type="file"
      className="
        w-full
        file:mr-2
        file:px-3
        file:py-1.5
        file:rounded-[4px]
        file:border
        file:border-[#000000]
        file:bg-[#0000000D]
        file:text-black
        file:text-sm
        hover:file:bg-black/5
      "
    />
  </div>

  
  <button
    type="submit"
    className="w-full h-[48px] rounded-lg bg-gradient-to-r from-[#E51F31] to-[#EE5125] text-white font-semibold hover:opacity-90 transition"
  >
    Submit
  </button>

</form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;


/* ============================= */
/* REUSABLE COMPONENTS */
/* ============================= */

function Label({ text, required }) {
  return (
    <label className="block text-[14px] font-medium mb-2 text-[#7f7c7b]">
      {text}
      {required && <span className="text-[#EE5125] ml-1">*</span>}
    </label>
  );
}

function Input({ label, required }) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        className="w-full h-[44px] rounded-lg bg-[#0000000D] border-none px-4 focus:outline-none focus:ring-2 focus:ring-black/20"
      />
    </div>
  );
}

/* ✅ FIXED SELECT WITH CUSTOM ARROW */

function Select({ label, required }) {
  return (
    <div>
      <Label text={label} required={required} />

      <div className="relative">
        <select
          className="
            w-full h-[44px]
            rounded-lg bg-[#0000000D]
            border-none
            px-4 pr-10
            text-[#00000080]
            appearance-none
            focus:outline-none
            focus:ring-2 focus:ring-black/20
          "
        >
          <option>Please Select</option>
          <option>Web Design</option>
          <option>Marketing</option>
          <option>Branding</option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
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
    </div>
  );
}