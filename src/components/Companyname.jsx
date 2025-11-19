// Header.jsx
import React from "react";

export default function Companyname() {
  // Logo bar that appears on all pages
  return (
    <header className=" bg-gray-300 text-black ">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <button className="hidden p-2 rounded-md text-slate-200" aria-label="menu">
            ☰
          </button> */}
          <h1 className="font-bold text-2xl tracking-tight">
           <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT
          </h1>
        </div>

        <div className="md:flex items-center gap-3">
          {/* <button className="rounded-full bg-sky-600 px-3 py-1 text-xs font-medium">
            Profile
          </button> */}
          <img className="w-30 h" src="/sbalogomain.png" alt="logo" />
        </div>
      </div>
    </header>
  );
}
