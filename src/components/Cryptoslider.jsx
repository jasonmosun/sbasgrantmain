"use client";

import { useEffect, useState } from "react";

export default function CryptoTicker() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching crypto data", err);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" ">
    <div className="overflow-hidden  whitespace-nowrap border-y border-gray-200 bg-black text-white">
      <div className="animate-marquee flex gap-10 py-2">
        {coins.map((coin) => (
          <span key={coin.id} className="flex items-center gap-2">
            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
            {coin.symbol.toUpperCase()}: ${coin.current_price.toLocaleString()}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
