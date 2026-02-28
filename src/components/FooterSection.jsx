import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import logo from "../assets/images/marcamore-logo.svg";
import insight from "../assets/images/insight-logo.svg";
import star from "../assets/images/star-logo.svg";
import footerBg from "../assets/images/footerimage.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full text-white">

     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})`  }}
      />

     
      <div className="absolute inset-0 " />

     
      <div className="relative max-w-[1440px] mx-auto w-[90%] pt-[90px] pb-[50px]">

        
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className=" space-y-12">
            <div className="lg:flex lg:items-center gap-6 flex flex-wrap">

              <img
                src={logo}
                alt="marcamore logo"
                className="w-[212px] h-[48px]"
              />

              <div className="relative">
                <img
                  src={logo}
                  alt="Marcamor Insights logo"
                  className="w-[140px] h-[32px]"
                />
                <img
                  src={insight}
                  alt="Insight badge"
                  className="w-[122px] h-[68px] absolute -bottom-14 left-1/2 -translate-x-1/2"
                />
              </div>

              <img
                src={star}
                alt="marcamore star logo"
                className="w-[108px] h-[52px]"
              />
            </div>

            <p className="text-[17px] font-medium leading-relaxed ">
              We are Marcamor, a media company and an award-winning <br></br> marketing and
              web design agency.
            </p>

            <div>
              <p className="text-[17px] mb-4 font-semibold">Follow Us:</p>

              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-[#8a8381]  flex items-center justify-center hover:border-white transition p-2"
                  >
                    <Icon size={22}  className="text-[#8a8381]"/>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 text-left">
            <p className="font-semibold text-[17px]">
              Beware of Scammers Posing as Marcamor.
            </p>

            <button className="bg-gradient-to-r from-[#E51F31] to-[#EE5125] uppercase px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
              Learn More <ChevronRight size={14} />
            </button>
          </div>
        </div>

    
        <div className="border-t border-white/10 my-14" />

   
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[14px]">

  
  <div>
    <h4 className="font-semibold text-[18px] mb-6 underline">
      Quick Links
    </h4>
    <ul className="space-y-4 text-[16px]">
      <li>
        <NavLink to="/" className="hover:text-[#EE5125] transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-work" className="hover:text-[#EE5125] transition">
          Our Work
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-[#EE5125] transition">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/content" className="hover:text-[#EE5125] transition">
          Content
        </NavLink>
      </li>
    </ul>
  </div>

  {/* Services */}
  <div>
    <h4 className="font-semibold text-[18px] mb-6 underline">
      Services
    </h4>
    <ul className="space-y-4 text-[16px]">
      <li>
        <NavLink to="/services" className="hover:text-[#EE5125] transition">
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/web-design" className="hover:text-[#EE5125] transition">
          Web Design
        </NavLink>
      </li>
      <li>
        <NavLink to="/branding" className="hover:text-[#EE5125] transition">
          Branding
        </NavLink>
      </li>
      <li>
        <NavLink to="/ui-ux" className="hover:text-[#EE5125] transition">
          UI UX
        </NavLink>
      </li>
      <li>
        <NavLink to="/consultation" className="hover:text-[#EE5125] transition">
          Consultation & Audit
        </NavLink>
      </li>
      <li>
        <NavLink to="/seo" className="hover:text-[#EE5125] transition">
          SEO
        </NavLink>
      </li>
    </ul>
  </div>

  {/* Company */}
  <div>
    <h4 className="font-semibold text-[18px] mb-6 underline">
      Company
    </h4>
    <ul className="space-y-4 text-[16px]">
      <li>
        <NavLink to="/insights" className="hover:text-[#EE5125] transition">
          Insights
        </NavLink>
      </li>
      <li>
        <NavLink to="/career" className="hover:text-[#EE5125] transition">
          Career
        </NavLink>
      </li>
      <li>
        <NavLink to="/frequentlyAskedQuestion" className="hover:text-[#EE5125] transition">
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/privacy-policy" className="hover:text-[#EE5125] transition">
          Privacy Policy
        </NavLink>
      </li>
      <li>
        <NavLink to="/sitemap" className="hover:text-[#EE5125] transition">
          Sitemap
        </NavLink>
      </li>
    </ul>
  </div>

  {/* Contacts (unchanged) */}
  <div>
    <h4 className="font-semibold text-[18px] mb-6 underline">
      Contacts
    </h4>

    <div className="space-y-4 text-[16px]">
      <div className="flex gap-3">
        <Phone size={16} className="mt-1" />
  <a
    href="tel:+919985202223"
    className="hover:text-[#EE5125] transition"
  >
    +91 99852 02223
  </a>
      </div>

      <div className="flex gap-3">
        <Mail size={16} />
         
  <a
    href="mailto:info@marcamor.com"
    className="hover:text-[#EE5125] transition"
  >
    info@marcamor.com
  </a>
      </div>

      <div className="flex gap-3">
        <MapPin size={24} />
        <span>
          Ground Floor, Sai Sadan, Madhapur,
          Hyderabad, Telangana 500081, India.
        </span>
      </div>

      <button className="text-[#EE5125] text-[13px] flex items-center uppercase gap-2 mt-2">
        Get Direction <ArrowRight size={14} />
      </button>
    </div>
  </div>
</div>

        {/* Divider */}
        <div className="border-t border-white/10 my-14" />

        {/* Cities */}
        <div className="flex flex-wrap justify-center gap-8 text-white/50 text-[12px] uppercase tracking-wide">
          <span>India:</span>
          <span>Hyderabad</span>
          <span>Chennai</span>
          <span>Bengaluru</span>
          <span>Gurugram</span>
          <span>Mumbai</span>
        </div>

        <div className="border-t border-white/10 my-10" />

        {/* International Links */}
        <div className="flex flex-wrap justify-center items-center gap-10 text-white/40 text-[11px] uppercase tracking-wide">
          <span>Web Design Toronto</span>
          <span>Web Design San Diego</span>
          <span>Web Design San Francisco</span>
          <span>Web Design Chicago</span>
          <span>Web Design New York</span>
          <span>Web Design Houston</span>
          <span>Web Design Montreal</span>
        </div>

        <div className="border-t border-white/10 my-10" />

        {/* Copyright */}
        <div className="text-center text-white/40 text-[12px]">
          © 2025 All Copyright Reserved by Marcamor.
        </div>

      </div>
    </footer>
  );
}

export default Footer;