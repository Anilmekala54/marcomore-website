import React from "react";
import { Clock3, CalendarDays } from "lucide-react";
import insights1 from "../assets/images/insights1.svg"
import insights2 from "../assets/images/insights2.svg"
import insights3 from "../assets/images/insights3.svg"
import insights4 from "../assets/images/insights4.svg"



function Trending() {
  const cards = [
    {
      image:insights1,
      title:"Why Strong Brand Positioning Matters More Than Marketing Spend",
      type:" Marketing",
      date:" mar 07, 2025",
      time:"4 MIN",
      dec:"Many businesses believe growth comes from increasing marketing budgets. In reality, growth comes from clarity. When positioning, messaging, and audience alignment are defined correctly, marketing becomes far more effective and scalable."
    },
   
  ]
  const cards1=[
      {
      image:insights2,
      title:"The Rise of Performance Driven Marketing in Modern Businesses",
      type:" Marketing",
      date:" mar 07, 2025",
      time:"4 MIN",
      dec:"Many businesses believe growth comes from increasing marketing budgets. In reality, growth comes from clarity. When positioning, messaging, and audience alignment are defined correctly, marketing becomes far more effective and scalable."
    },
     {
      image:insights3,
      title:"Why Companies Are Investing More in Brand Strategy",
      type:" Business",
      date:" mar 07, 2025",
      time:"4 MIN",
      dec:"Many businesses believe growth comes from increasing marketing budgets. In reality, growth comes from clarity. When positioning, messaging, and audience alignment are defined correctly, marketing becomes far more effective and scalable."
    },
     {
      image:insights4,
      title:"How AI Is Changing Digital Marketing Workflows",
      type:" Technology",
      date:" mar 07, 2025",
      time:"4 MIN",
      dec:"Many businesses believe growth comes from increasing marketing budgets. In reality, growth comes from clarity. When positioning, messaging, and audience alignment are defined correctly, marketing becomes far more effective and scalable."
    },
  ]

  
  return (
    <section className="bg-black text-white py-[60px]">
      
      <div className="max-w-[1440px] mx-auto  w-[90%] ">

        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-[76px]">

      
          <div className="w-full lg:w-[745px]">

           
            
              {cards.map((item,index)=>(
             <div key={index}>
   <div  className="w-full h-[240px] sm:h-[320px] lg:h-[410px]  rounded-2xl" >
                 <img src= {item.image} alt= {item.image} className="rounded-[10px] " />

                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-6 text-sm font-semibold">

              <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs uppercase">
               {item.type}
              </span>

              <span className="flex items-center gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs text-white/70">
                <Clock3 size={14} />{item.time}
              </span>

              <span className="flex items-center uppercase gap-2 bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-xs text-white/70">
                <CalendarDays size={14} />
               {item.date}
              </span>

            </div>

          
            <h2 className="text-[18px] font-semibold mt-4 leading-snug">
              {item.title}
            </h2>

            
            <p className="text-[#FFFFFF80] text-[14px] mt-4 leading-relaxed">
              {item.dec}
            </p>

              </div>
              ))}
              </div>

            
            
          

          
          <div className="hidden lg:block w-px bg-white/10" />

  
          <div className="w-full lg:w-[600px]">

            <h3 className="text-sm tracking-wider text-white/50 mb-6">
              TRENDING
            </h3>

          
            {cards1.map((ele,index)=>(
              <div key={index} className="flex gap-4 mb-8">

                <div className="w-[130px]   rounded-lg flex-shrink-0" >
                  <img src={ele.image} className="rounded-[10px]" />
                  </div>

                <div>
                  <span className="bg-[#FFFFFF40] px-[12px] py-[6px] rounded-full text-[10px] uppercase font-semibold">
                   {ele.type}
                  </span>

                  <h4 className="text-[14px] font-semibold mt-3 leading-snug">
                   {ele.title}
                  </h4>
                </div>

              </div>
            ))}

            
            <div className="border-t border-white/10 pt-8 mt-8">

              <h4 className="text-sm text-[#FFFFFF80] mb-6">
                EXPLORE ALL INSIGHTS TOPIC
              </h4>

              <div className="
                grid
                grid-cols-2
               
                gap-y-4
                text-[14px]
                sm:text-[16px]
                font-semibold
                
              ">
                <span>Growth Strategy</span>
                <span>Branding</span>
                <span>SEO</span>
                <span>Performance Marketing</span>
                <span>Web Development</span>
                <span>Product Development</span>
                <span>Market Research</span>
                <span>Digital Marketing</span>
               
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Trending;