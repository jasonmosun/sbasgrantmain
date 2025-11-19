"use client";
import React from "react";

const deposits = [
  { name: "Sigmund Schaden", amount: 6716 },
  { name: "Miss Matilde Reinger", amount: 9658 },
  { name: "Prof. Rosemarie Hegmann", amount: 9823 },
  { name: "Prof. Adelle Yundt", amount: 7849 },
  { name: "Mrs. Madie Oberbrunner", amount: 5422 },
  { name: "Raheem Reichel Sr.", amount: 4772 },
  { name: "Lucy Spencer", amount: 8831 },
  { name: "Daphnee Davis", amount: 8352 },
  { name: "Mr. Amari Terry", amount: 1428 },
  { name: "Prof. Karl Kuhn Sr.", amount: 6311 },
];

const withdrawals = [
  { name: "Prof. Loy Shanahan DDS", amount: 7949 },
  { name: "Dylan Roob", amount: 7853 },
  { name: "Harry Parisian II", amount: 2756 },
  { name: "Dr. Will Aufderhar", amount: 1541 },
  { name: "Norbert Stracke DDS", amount: 3451 },
  { name: "Lilliana Bartell Sr.", amount: 4793 },
  { name: "Vesta Skiles II", amount: 7682 },
  { name: "Laurie Terry", amount: 3298 },
  { name: "Dr. Teresa Hilpert", amount: 5859 },
  { name: "Chloe Cislasen", amount: 4111 },
];

export default function RecentTransactions() {
  return (
    <section className="bg-black text-white py-16 px-6 ">


        <div className="text-center">
            <h2 className="text-4xl md:text-4xl font-bold mb-10 text-yellow-400">OUR INVESTMENT PACKS</h2>
        </div>
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        



        {/* Recent Deposits */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-purple-400">
            Recent Deposits
          </h2>
          <div className="overflow-x-auto border border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-sm uppercase">
                  <th className="px-6 py-3 border border-gray-700">Account Names</th>
                  <th className="px-6 py-3 border border-gray-700">Amount USD</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((d, idx) => (
                  <tr key={idx} className="border-t border-gray-700">
                    <td className="px-6 py-3 border border-gray-700">{d.name}</td>
                    <td className="px-6 py-3 border border-gray-700 text-green-500 font-semibold">
                      ${d.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Withdrawals */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-purple-400">
            Recent Withdrawals
          </h2>
          <div className="overflow-x-auto border border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-sm uppercase">
                  <th className="px-6 py-3 border border-gray-700">Account Names</th>
                  <th className="px-6 py-3 border border-gray-700">Amount USD</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((w, idx) => (
                  <tr key={idx} className="border-t border-gray-700">
                    <td className="px-6 py-3 border border-gray-700">{w.name}</td>
                    <td className="px-6 py-3 border border-gray-700 text-red-500 font-semibold">
                      ${w.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
