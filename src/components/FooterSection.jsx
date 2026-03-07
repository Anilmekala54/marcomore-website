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
import footerBg from "../assets/images/Footer.svg";
import footerMobileBg from "../assets/images/mobileBg1.svg";
import india from "../assets/icons/india.svg";
import usa from "../assets/icons/usa.svg";
import uk from "../assets/icons/uk.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full text-white">

        
      <div
        className="absolute inset-0 bg-cover  block lg:hidden"
        style={{ backgroundImage: `url(${footerMobileBg})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block "
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="relative max-w-[1440px] mx-auto w-[90%] pt-[90px] pb-[50px]">

      
        <div className="flex flex-col lg:flex-row justify-between gap-12">

        
          <div className="space-y-12 ">

            
            <div className="flex flex-wrap lg:flex-nowrap lg:justify-start gap-6">

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
                  className="w-[122px] h-[68px] absolute -bottom-8 left-1/2 -translate-x-1/2"
                />
              </div>

              <img
                src={star}
                alt="marcamore star logo"
                className="w-[108px] h-[52px] hidden"
              />
            </div>

            <p className="text-[17px] font-medium leading-relaxed">
              We are Marcamor, a media company and an award-winning <br />
              marketing and web design agency.
            </p>

          </div>

          
          <div className="flex flex-col items-start gap-6 text-center lg:text-left">
            <p className="font-semibold text-[17px]">
              Beware of Scammers Posing as Marcamor.
            </p>

          <button className="group bg-gradient-to-r from-[#E51F31] to-[#EE5125] uppercase px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
  <span className="relative">
    Learn More
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>
  <ChevronRight size={14} />
</button>
          </div>
        </div>
<div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between flex-wrap  mt-10">

  {/* Follow Us */}
  <div className="flex flex-col">
    <p className="text-[17px] mb-4 font-semibold">Follow Us:</p>

    <div className="flex gap-4">
      {[Facebook, Instagram, Linkedin].map((Icon, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full border border-[#8a8381] flex items-center justify-center hover:border-white transition"
        >
          <Icon size={20} className="text-[#8a8381]" />
        </div>
      ))}
    </div>
  </div>

  {/* Locations */}
  <div className="flex flex-wrap  items-center gap-10 lg:mt-0 mt-4">

    {/* India */}
    <div className="flex items-center gap-3 min-w-[220px]">
      <img src={india} alt="india" className="w-[38px] h-[38px]" />
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-[14px]">India</p>
        <p className="text-[13px] ">
          Hyderabad, Telangana 500081.
        </p>
      </div>
    </div>

    {/* USA */}
    <div className="flex items-center gap-3 min-w-[250px]">
      <img src={usa} alt="usa" className="w-[38px] h-[38px]" />
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-[14px]">United States</p>
        <p className="text-[13px] ">
          San Francisco, California 94108.
        </p>
      </div>
    </div>

    {/* UK */}
    <div className="flex items-center gap-3 min-w-[250px]">
      <img src={uk} alt="uk" className="w-[38px] h-[38px]" />
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-[14px]">United Kingdom</p>
        <p className="text-[13px] ">
          Harrow, Greater London HA1 2LW.
        </p>
      </div>
    </div>

  </div>

</div>
        <div className="border-t border-[#FFFFFF33] my-14" />

        
       <div className="grid max-[375px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-6 text-[14px] max-[375px]:text-center   ">

         
          <div>
            <h4 className="font-semibold text-[18px] mb-6 underline">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[16px]">
              <li><NavLink to="/" className="hover:text-[#EE5125]">Home</NavLink></li>
              <li><NavLink to="/work" className="hover:text-[#EE5125]">Our Work</NavLink></li>
              <li><NavLink to="/about Us" className="hover:text-[#EE5125]">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#EE5125]">Contact Us</NavLink></li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-[18px] mb-6 underline">
              Services
            </h4>
            <ul className="space-y-4 text-[16px]">
              <li><NavLink to="/services" className="hover:text-[#EE5125]">Digital Marketing</NavLink></li>
              <li><NavLink to="/web-design" className="hover:text-[#EE5125]">Branding and Design</NavLink></li>
              <li><NavLink to="/branding" className="hover:text-[#EE5125]">Business Consulting</NavLink></li>
              <li><NavLink to="/ui-ux" className="hover:text-[#EE5125]">Website & App Development</NavLink></li>
              <li><NavLink to="/consultation" className="hover:text-[#EE5125]">Technology & Product Development</NavLink></li>
              <li><NavLink to="/seo" className="hover:text-[#EE5125]">Performance & Analytics </NavLink></li>
              <li><NavLink to="/seo" className="hover:text-[#EE5125]">Market Research Consumer </NavLink></li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-[18px] mb-6 underline">
              Company
            </h4>
            <ul className="space-y-4 text-[16px]">
              <li><NavLink to="/insights" className="hover:text-[#EE5125]">Insights</NavLink></li>
              <li><NavLink to="/career" className="hover:text-[#EE5125]">Career</NavLink></li>
              <li><NavLink to="/frequentlyAskedQuestion" className="hover:text-[#EE5125]">FAQ</NavLink></li>
              <li><NavLink to="/privacy-policy" className="hover:text-[#EE5125]">Clientele</NavLink></li>
              <li><NavLink to="/franchising" className="hover:text-[#EE5125]">Franchising</NavLink></li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-[18px] mb-6 underline">
              Contacts
            </h4>

            <div className="space-y-4 text-[16px]">

              <div className="flex gap-3 items-start justify-center md:justify-start">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <a href="tel:+919985202223" className="hover:text-[#EE5125] min-w-0">
                  +91 99852 02223
                </a>
              </div>

              <div className="flex gap-3 items-start justify-center md:justify-start">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <a href="mailto:info@marcamor.com" className="hover:text-[#EE5125] min-w-0">
                  info@marcamor.com
                </a>
              </div>

              <div className="flex gap-1 md:gap-3 text-start items-start justify-center md:justify-start">
                <MapPin size={24} className="flex-shrink-0 mt-1" />
                <span className="min-w-0">
                  Ground Floor, Sai Sadan, Madhapur,
                  Hyderabad, Telangana 500081, India.
                </span>
              </div>

             <button className="group text-[#EE5125] text-[13px] lg:ml-9 ml-6 flex items-center justify-center md:justify-start uppercase gap-2 mt-2">
  <span className="relative">
    Get Direction
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#EE5125] transition-all duration-300 group-hover:w-full"></span>
  </span>
  <ArrowRight size={14} />
</button>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-14" />

        
        <div className="flex flex-wrap justify-center gap-8 text-white/50 text-[12px] uppercase tracking-wide">
          <span>India:</span>
          <span>Hyderabad</span>
          <span>Chennai</span>
          <span>Bengaluru</span>
          <span>Gurugram</span>
          <span>Mumbai</span>
        </div>

        <div className="border-t border-white/10 my-10" />

                
      

       

        <div className="text-center text-white/40 text-[12px]">
          © 2025 All Copyright Reserved by Marcamor.
        </div>

      </div>
    </footer>
  );
}

export default Footer;