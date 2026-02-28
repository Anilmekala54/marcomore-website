import React from "react";

function Deliver() {
  return (
    <section className="bg-black text-white pt-10 lg:pt-[140px] pb-10 lg:pb-[120px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
       
        <h1
          className="
          text-[34px]
          sm:text-[42px]
          lg:text-[60px]
          font-semibold
          leading-[1.1]
          lg:mb-16 mb-6
        "
        >
          Here To Deliver <br />
          Perfection
        </h1>

        <div className="flex flex-col gap-4  lg:gap-16">
          {/* ROW 1 */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full">
                <span className="text-[14px] text-white/80">Who Are We?</span>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] lg:text-[24px] font-semibold">
                Our Commitment to Client <br />
                Satisfaction at Marcamor
              </h3>
            </div>

            <div>
              <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                At Marcamor, we ensure our clients are never disappointed with
                their projects. With more than 250 5-star reviews, client
                satisfaction is our top priority. We assign a dedicated account
                manager to each client for clear communication, aiming to always
                deliver great results.
              </p>
            </div>
          </div>

         
          <div className="grid lg:grid-cols-3">
            <div></div>
            <div className="col-span-2 border-t border-white/10"></div>
          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div></div>

            <div>
              <h3 className="text-[24px] lg:text-[24px] font-semibold">
                With More Than <br />
                500 Projects Done
              </h3>
            </div>

            <div>
              <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                Having completed 500 projects, at Marcamor, we now only take on
                projects we are truly passionate about and sure we can add value
                in. Our experienced team understands various industries well,
                helping us tailor solutions to your brand and ensure great
                results. Our selective approach ensures that our enthusiasm
                drives success in every project we undertake.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="grid lg:grid-cols-3">
            <div></div>
            <div className="col-span-2 border-t border-white/10"></div>
          </div>

          {/* ROW 3 */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div></div>

            <div>
              <h3 className="text-[24px]  font-semibold">
                A Decade of Marketing <br />
                Excellence at Marcamor
              </h3>
            </div>

            <div>
              <p className="text-[16px] text-white leading-relaxed">
                With over a decade of experience, Marcamor operates globally,
                delivering outstanding marketing materials in branding, web
                design, and more. Our skilled team works closely with clients to
                create memorable brand identities and engaging websites. Our
                long-standing expertise helps us understand and meet the unique
                needs of businesses worldwide, ensuring they stand out in the
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deliver;
