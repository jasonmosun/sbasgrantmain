"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Numberstat() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="mt-20" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[90%] mx-auto">
        {/* Registered Users */}
        <div className="p-4 shadow rounded-lg bg-gray-200 flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            {inView ? <CountUp end={36000} duration={3} separator="," /> : "0"}K
          </h3>
          <p className="text-base sm:text-lg mt-2 text-gray-900 text-center">
            Registered users
          </p>
        </div>

        {/* Countries Supported */}
        <div className="p-4 shadow rounded-lg bg-white flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            {inView ? <CountUp end={110} duration={3} /> : "0"}
          </h3>
          <p className="text-base sm:text-lg mt-2 text-blue-500 text-center">
            Countries supported
          </p>
        </div>

        {/* Withdrawn Each Month */}
        <div className="p-4 shadow rounded-lg bg-gray-200 flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            ${inView ? <CountUp end={50} duration={3} /> : "0"}M
          </h3>
          <p className="text-base sm:text-lg mt-2 text-gray-900 text-center">
            Withdrawn each month
          </p>
        </div>

        {/* Active Investors Daily */}
        <div className="p-4 shadow rounded-lg bg-white flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            {inView ? <CountUp end={15000} duration={3} separator="," /> : "0"}K
          </h3>
          <p className="text-base sm:text-lg mt-2 text-blue-500 text-center">
            Active investors daily
          </p>
        </div>
      </div>
    </section>
  );
}
