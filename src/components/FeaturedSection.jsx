import React from "react";
import { Clock3, CalendarDays } from "lucide-react";

const posts = [
  {
    category: "ENTERTAINMENT",
    title: "Top 10 Richest Comedians in the World (2025 Edition)",
  },
  {
    category: "BUSINESS",
    title: "How to Advertise on Google in 2025: Step-by-Step Guide",
  },
  {
    category: "ENTERTAINMENT",
    title:
      "Setting Sail on the Most Expensive Cruises in the World (2025 Edition)",
  },
  {
    category: "TECH",
    title:
      "Best Project Management Tools in 2025: Export Reviews and Comparisons",
  },
];

function InsightsSection() {
  return (
    <section className="bg-black text-white py-[60px]">

      {/* Global Container */}
      <div className="max-w-[1440px] mx-auto w-[90%]">

        {/* Grid */}
        <div className="grid gap-10
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-4">

          {posts.map((post, index) => (
            <article
              key={index}
              className="group space-y-5 cursor-pointer"
            >

              {/* Image Placeholder */}
              <div className="w-full aspect-[16/10] bg-white rounded-xl overflow-hidden">
                {/* Later replace with real image */}
              </div>

              {/* Meta Row */}
              <div className="flex items-center flex-wrap gap-3 text-[11px]">

                <span className="bg-white/10 text-[10px] px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </span>

                <span className="flex items-center text-[10px] gap-1 bg-white/10 px-3 py-1 rounded-full">
                  <Clock3 size={12} />
                  4 MIN
                </span>

                <span className="flex items-center text-[10px] gap-1 bg-white/10 px-3 py-1 rounded-full">
                  <CalendarDays size={12} />
                  JUN 12, 2025
                </span>

              </div>

              {/* Title */}
              <h3 className="text-[14px] font-medium leading-snug 
                             transition-colors 
                             group-hover:text-[#F05623]">
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