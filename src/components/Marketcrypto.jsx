"use client";

import { useEffect, useState } from "react";

export default function MarketTicker() {
    const [rates, setRates] = useState({});

    useEffect(() => {
        async function fetchRates() {
            try {
                const res = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
                const data = await res.json();
                setRates(data.rates);
            } catch (err) {
                console.error("Error fetching market data", err);
            }
        }
        fetchRates();
        const interval = setInterval(fetchRates, 120000);
        return () => clearInterval(interval);
    }, []);
    function getFlagUrl(code) {
  const map = {
    usd: "us",
    eur: "eu",
    gbp: "gb",
    jpy: "jp",
    ngn: "ng",
    cad: "ca",
    aud: "au",
    chf: "ch",
    inr: "in",
    cny: "cn",
  };

  const countryCode = map[code.toLowerCase()];
  // Use a default "world" flag if not found
  const defaultFlag = "https://flagcdn.com/w20/un.png"; // UN flag (un.png) works as global default

  return `https://flagcdn.com/w20/${countryCode || "un"}.png`;
}

    return (
        <div className="overflow-hidden mt-20 whitespace-nowrap border-t border-gray-300 bg-gray-900 text-gray-200 text-sm sm:text-base">
            <div className="animate-marquee-slow flex gap-10 py-2">
                {Object.entries(rates).map(([key, value]) => (
                    <span key={key} className="flex items-center gap-2">
                        {getFlagUrl(key) && (
                            <img src={getFlagUrl(key)} alt={key} className="w-5 h-4 rounded-sm" />
                        )}
                        {value.name} ({key.toUpperCase()}): {value.value.toFixed(4)}
                    </span>

                ))}
            </div>
        </div>
    );
}
