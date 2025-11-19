// components/CryptoTable.js
"use client";
import React from "react";
import Image from "next/image";
import {  
  Sparklines,  
  SparklinesLine  
} from "react-sparklines";

const cryptoData = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "/bitcoin.jpg",
    price: "€90,773.01",
    usdPrice: "$104,929",
    marketCap: "€1.81 T",
    volume: "€0",
    volumeSymbol: "Ƀ 0",
    change: "-5.00%",
    changePositive: false,
    history: [95, 92, 90, 91, 89, 90, 90.7]  // sample sparkline data
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "/ethereum.png",
    price: "€3,067.32",
    usdPrice: "XLM 11,953.86",
    marketCap: "€375.36 B",
    volume: "€0",
    volumeSymbol: "ETH 0",
    change: "-12.38%",
    changePositive: false,
    history: [3400, 3300, 3200, 3100, 3000, 3050, 3067]
  },
  {
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    icon: "/tether.png",
    price: "€0.86",
    usdPrice: "USDC 1.00",
    marketCap: "€59.03 B",
    volume: "€0",
    volumeSymbol: "USDT 0",
    change: "-9.12%",
    changePositive: false,
    history: [0.88, 0.87, 0.86, 0.86, 0.85, 0.86, 0.86]
  },
  {
    rank: 4,
    name: "Binance Coin",
    symbol: "BNB",
    icon: "/binance.png",
    price: "€844.95",
    usdPrice: "Ƀ 0.0093",
    marketCap: "€142.07 B",
    volume: "€0",
    volumeSymbol: "BNB 0",
    change: "+21.89%",
    changePositive: true,
    history: [700, 750, 800, 830, 820, 840, 845]
  },
  {
    rank: 5,
    name: "USCoin",
    symbol: "USDC",
    icon: "/uscoin.png",
    price: "€0.86",
    usdPrice: "€25.35 B",
    marketCap: "€25.35 B",
    volume: "€0",
    volumeSymbol: "USDC 0",
    change: "-9.04%",
    changePositive: false,
    history: [0.90, 0.89, 0.87, 0.86, 0.85, 0.86, 0.86]
  },
];

export default function CryptoTable() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-sm uppercase tracking-wider">
                <th className="px-6 py-3">Rank</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Market Cap</th>
                <th className="px-6 py-3">Volume</th>
                <th className="px-6 py-3 text-right">Last 24h</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((coin, idx) => (
                <tr
                  key={idx}
                  className="bg-white text-gray-900 border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4 font-medium">{coin.rank}</td>

                  <td className="px-6 py-4 flex items-center space-x-3">
                    {/* <Image
                      src={coin.icon}
                      alt={coin.name}
                      width={28}
                      height={28}
                      className="rounded-full"
                    /> */}
                    <div>
                      <p className="text-blue-600 font-semibold hover:underline cursor-pointer">
                        {coin.name}
                      </p>
                      <p className="text-xs text-gray-500">[{coin.symbol}]</p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p>{coin.price}</p>
                    <p className="text-xs text-gray-500">{coin.usdPrice}</p>
                  </td>

                  <td className="px-6 py-4">{coin.marketCap}</td>

                  <td className="px-6 py-4">
                    <p>{coin.volume}</p>
                    <p className="text-xs text-gray-500">{coin.volumeSymbol}</p>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <span
                      className={`font-semibold ${
                        coin.changePositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {coin.change}
                    </span>
                    <div className="mt-1">
                      <Sparklines
                        data={coin.history}
                        width={80}
                        height={20}
                        margin={2}
                      >
                        <SparklinesLine
                          color={coin.changePositive ? "#22c55e" : "#dc2626"}
                          style={{ strokeWidth: 1, fill: "none" }}
                        />
                      </Sparklines>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
