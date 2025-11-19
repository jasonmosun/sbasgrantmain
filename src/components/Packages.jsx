"use client";
import React from "react";

const plans = [
  {
    title: "STARTER PLAN",
    percentage: "100%",
    min: "$100",
    max: "$499",
    duration: "After 24 hours",
    stars: 3,
  },
  {
    title: "AMATEUR PLAN",
    percentage: "500%",
    min: "$500",
    max: "$999",
    duration: "After 24 hours",
    stars: 4,
  },
  {
    title: "PROFESSIONAL PLAN",
    percentage: "1000%",
    min: "$1,000",
    max: "$4,999",
    duration: "After 24 hours",
    stars: 4,
  },
  {
    title: "EXPERT PLAN",
    percentage: "1500%",
    min: "$5,000",
    max: "$50,000",
    duration: "After 48 hours",
    stars: 5,
  },
];

export default function InvestmentPlans() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mt-20 text-center ">
        <h2 className="text-4xl md:text-4xl font-bold mb-10 text-yellow-400">Our Investment Packages</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-black text-lg font-semibold mb-3">{plan.title}</h3>
                <div className="bg-white h-[1px] mb-5"></div>
                <h1 className="text-6xl font-bold text-white mb-4">{plan.percentage}</h1>
                <div className="text-black mb-4">
                  <p>Min. Invest: {plan.min}</p>
                  <p>Max. Invest: {plan.max}</p>
                </div>
                <div className="bg-white h-[0.5px] mb-3"></div>
                <p className="text-black font-semibold mb-4">{plan.duration}</p>
                <p className="text-black text-sm mb-8">Smart Auto Withdraw</p>
              </div>
                <div className="bg-white h-[0.5px] mb-5"></div>
              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full font-semibold transition-all">
                  SELECT PLAN
                </button>

                <div className="mt-6 flex justify-center">
                  {[...Array(plan.stars)].map((_, i) => (
                    <span key={i} className="text-black text-4xl">★</span>
                  ))}
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
      <div className="w-full h-25 !bg-white mt-30">
        <img className=" h-25" src="/sponsors.png" alt="our sponsors" />
      </div>

      <div className="mt-20 flex flex-row flex-nowrap items-center gap-4 px-4 sm:px-8">
  {/* Text */}
  <div className="flex-1 min-w-[130px] sm:min-w-[150px] md:min-w-[200px]">
    <h1 className="text-yellow-400 font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl leading-snug">
      User-friendly and efficient
    </h1>
    <p className="text-xs sm:text-sm md:text-base mt-2 font-medium leading-relaxed">
      Your investments are managed by intelligent crypto experts, investors, crypto forecasters
      and analysts in order to yield the best possible return for you. Our customer base ranges
      from single individuals to corporate firms and organisations. We offer cryptocurrency
      investment without risk. In order to get the maximum profit, modern technologies and the
      best analytical minds are used in our company.
    </p>
  </div>

  {/* Image */}
  <div className="flex-1 min-w-[120px]">
    <img
      src="bitcoin-farm.png"
      alt="btc"
      className="w-full h-auto object-contain"
    />
  </div>
</div>


    </section>
  );
}
