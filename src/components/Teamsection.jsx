"use client";
import React from "react";

export default function TeamSection() {
  const team = [
    {
      role: "Managing Director (M.D)",
      name: "Freddie Connor",
      image: "/team1.jpg",
    },
    {
      role: "Administrator",
      name: "Donald Stewart",
      image: "/team2.jpg",
    },
    {
      role: "VIP Clients Manager",
      name: "Gordon Wilson",
      image: "/team3.jpg",
    },
    {
      role: "P.R.O.",
      name: "James Walters",
      image: "/team4.jpg",
    },
    {
      role: "Head of Operations",
      name: "Jack Mathew",
      image: "/team5.jpg",
    },
  ];

  return (
    <section className=" bg-black text-white py-16 pt-20 text-center overflow-hidden">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-yellow-500 mb-12">OUR TEAM</h2>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-10 px-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[180px] md:w-[200px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-800 mb-4 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm text-gray-300">{member.role}</p>
            <h3 className="text-md font-semibold text-purple-400 mt-1">
              {member.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-10 py-3 rounded-full shadow-md hover:opacity-90 transition">
          REGISTER
        </button>
      </div>
    </section>
  );
}
