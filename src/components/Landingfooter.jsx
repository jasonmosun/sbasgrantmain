"use client";

import React from "react";
import Footerl from "./Footer";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "#about" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Our features", href: "#offers" },
      { name: "Investment Plans", href: "#packages" },
    ],
  },
  {
    title: "Policy",
    links: [
      { name: "Create Account", href: "/signup" },
      { name: "Login", href: "/login" },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        name: "admin@sbafundingwithdrawal.com",
        href: "mailto:sbaassistantanceinfo@gmail.com",
      },
      {
        name: "support@sbafundingwithdrawal.com",
        href: "mailto:support@sbafundingwithdrawal.com",
      },
    ],
  },
];

const Landingfooter = () => {
  return (
    <footer className="bg-black text-white  px-6 pt-30 ">
      <div className="max-w-7xl mx-auto">
        {/* Top text */}
        <p className="text-center text-2xl mb-10">
          Make Your Financial Goals A Reality
        </p>

        {/* Footer sections dynamically mapped */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {footerData.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-3 text-xl">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language Selector */}
        {/* <div className="mt-10 text-center text-gray-400 text-sm">
          <select className="bg-black border border-gray-600 text-white px-2 py-1 rounded">
            <option>Select Language</option>
          </select>
          <p className="mt-2">Powered by Google Translate</p>
        </div> */}

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>


         
            <footer className="bg-slate-100 mt-45 py-8">
      <div className="container mx-auto  text-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} SBAgrant. All rights reserved.</p>
      </div>
    </footer>
         
    </footer>
  );
};

export default Landingfooter ;
