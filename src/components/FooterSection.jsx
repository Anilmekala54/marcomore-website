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

function Footer() {
  return (
    <footer className="bg-black text-white max-w-[1440px] mx-auto w-[90%] pt-[90px] pb-[50px]">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="max-w-[420px] space-y-6">
          <div className="flex items-center gap-6">
            <div className=" ">
              <img
                src={logo}
                alt="marcamore logo"
                className="w-[212px] h-[48px]"
              />
            </div>
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

            <div className=" ">
              <img
                src={star}
                alt="marcamore star logo"
                className="w-[108px] h-[52px]"
              />
            </div>
          </div>

          <p className="text-white text-[17px] font-medium leading-relaxed">
            We are Marcamor, a media company and an award-winning marketing and
            web design agency.
          </p>

          <div>
            <p className="text-[17px] mb-4 font-semibold">Follow Us:</p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
          <p className="text-white font-semibold text-[17px]">
            Beware of Scammers Posing as Marcamor.
          </p>

          <button className="bg-gradient-to-r from-[#E51F31] to-[#EE5125] uppercase transition px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
            Learn More <ChevronRight size={14} />
          </button>
        </div>
      </div>

      
      <div className="border-t border-white/10 my-14" />

   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[14px]">
       
        <div>
          <h4 className="font-semibold text-[18px] mb-6 underline">Quick Links</h4>
          <ul className="space-y-4  text-[16px] text-white">
            <li>Home</li>
            <li>Our Work</li>
            <li>About</li>
            <li>Content</li>
          </ul>
        </div>

     
        <div>
          <h4 className="font-semibold text-[18px] mb-6 underline">Services</h4>
          <ul className="space-y-4  text-[16px] text-white">
            <li>All Services</li>
            <li>Web Design</li>
            <li>Branding</li>
            <li>UI UX</li>
            <li>Consultation & Audit</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-[18px] mb-6 underline">Company</h4>
          <ul className="space-y-4  text-[16px] text-white">
            <li>Insights</li>
            <li>Career</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-[18px] mb-6 underline">Contacts</h4>

          <div className="space-y-4 text-white text-[16px]">
            <div className="flex gap-3">
              <Phone size={16} />
              <span>+91 99852 02223</span>
            </div>

            <div className="flex gap-3">
              <Mail size={16} />
              <span>info@marcamor.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin  />
              <span>
                Ground Floor, Sai Sadan, Survey Of India Ayyappa Society,
                Madhapur, Hyderabad, Telangana 500081, India.
              </span>
            </div>

            <button className="text-[#EE5125] text-[13px] flex items-center uppercase gap-2 mt-2">
              Get Direction <ArrowRight size={14} />
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

     
      <div className="text-center text-white/40 text-[12px]">
        © 2025 All Copyright Reserved by Marcamor.
      </div>
    </footer>
  );
}

export default Footer;
