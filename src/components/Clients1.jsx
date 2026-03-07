import React from 'react'
import Simplification from "../assets/images/Simplification.svg";
import simp2 from "../assets/images/simp2.svg";
import simp3 from "../assets/images/simp3.svg";

function Clients1() {
     const stats = [
        { image: Simplification, label: "1500+ Reviews" },
        { image: simp2, label: "200+ Clients" },
        { image: simp3, label: "8+ Years" },
      ];
  return (
    <section className="bg-[#FFF9F6] text-black lg:pb-20 pb-10">
      <div className="max-w-[90%] mx-auto ">
        <div className="flex justify-around flex-wrap items-center">
  {stats.map((item, index) => (
    <div key={index} className="flex flex-col items-center gap-4">
      <img
        src={item.image}
        alt={item.label}
        className="w-[80px] h-[80px] lg:w-[110px] lg:h-[110px]"
      />
      <p className="text-[16px] font-semibold">{item.label}</p>
    </div>
  ))}
</div>
    </div>
    </section>
  )
}


export default Clients1
