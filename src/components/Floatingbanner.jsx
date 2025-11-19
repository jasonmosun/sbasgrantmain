"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";

export default function FloatingInvestmentBanner() {
  const countries = [
    "India",
    "Austria",
    "United States",
    "Germany",
    "United Kingdom",
    "Brazil",
    "Canada",
    "Australia",
    "France",
    "South Africa",
  ];

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const generateInvestment = () => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const amount = (
      Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500
    ).toLocaleString();

    setMessage(`Investor from ${country} invested $${amount}`);
  };

  useEffect(() => {
    const showBanner = () => {
      generateInvestment();
      setVisible(true);

      setTimeout(() => setVisible(false), 3000);
    };

    showBanner();
    const interval = setInterval(showBanner, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed transition-all duration-700 ease-in-out z-50 
      ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      right-4 sm:right-6`}
      style={{ top: "9rem" }}
    >
      <div
        className="
        bg-yellow-500 border border-gray-200 shadow-xl rounded-xl
        flex items-center gap-3
        px-3 py-2 sm:px-5 sm:py-3 
        w-fit max-w-[85vw] sm:max-w-xs
      "
      >
        <div className="p-2 bg-green-100 rounded-full">
          <Globe2 className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <div className="text-xs sm:text-sm leading-tight">
          <p className="font-semibold text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
}
