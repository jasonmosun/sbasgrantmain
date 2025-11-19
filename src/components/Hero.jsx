// components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-10 py-20 md:py-40 gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Make Your Financial Goals A Reality
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Get access to the best of{" "}
            <span className="text-white font-semibold">SBA GRANT FUNDING APPLICATION</span> and
            the tools and confidence to start withdrawals with cryptocurrencies and faster
            payment methods than ever before.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-3xl w-40 text-center"
            >
              Create Account
            </Link>
            {/* Optional secondary button */}
            {/* <a href="#plans" className="bg-white text-black px-6 py-3 rounded-3xl w-40 text-center hover:bg-gray-100 transition">View Plans</a> */}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/sbaPic.jpg"
            alt="hero"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
