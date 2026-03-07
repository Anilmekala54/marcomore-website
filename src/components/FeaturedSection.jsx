import React from "react";
import { Clock3, CalendarDays } from "lucide-react";
import insights5 from "../assets/images/insights5.svg";
import insights6 from "../assets/images/insights6.svg";
import insights7 from "../assets/images/insights7.svg";
import insights8 from "../assets/images/insights8.svg";

const posts = [
  {
    image: insights5,
    title: "Why Branding Is a Long Term Business Asset",
    type: "Branding",
    date: "Mar 07, 2025",
    time: "15 min",
  },
  {
    image: insights6,
    title: "Understanding the Difference Between Traffic and Revenue Growth",
    type: "Marketing",
    date: "Mar 07, 2025",
    time: "20 min",
  },
  {
    image: insights7,
    title: "How Digital Infrastructure Impacts Business Scalability",
    type: "Business",
    date: "Mar 07, 2025",
    time: "30 min",
  },
  {
    image: insights8,
    title: "Why Businesses Are Rebuilding Their Digital Platforms",
    type: "Technology",
    date: "Mar 07, 2025",
    time: "40 min",
  },
];

function InsightsSection() {
  return (
    <section className="bg-black text-white py-[60px]">
      <div className="max-w-[1440px] mx-auto w-[90%]">

        <div
          className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
        "
        >
          {posts.map((post, index) => (
            <article
              key={index}
              className="group space-y-5 cursor-pointer"
            >

              {/* Image */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center flex-wrap gap-2 text-[10px]">

                <span className="bg-white/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.type}
                </span>

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full uppercase">
                  <Clock3 size={12} />
                  {post.time}
                </span>

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full uppercase">
                  <CalendarDays size={12} />
                  {post.date}
                </span>

              </div>

              {/* Title */}
              <h3
                className="
                text-[14px]
                font-medium
                leading-snug
                transition-colors
                group-hover:text-[#F05623]
              "
              >
                {post.title}
              </h3>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InsightsSection;