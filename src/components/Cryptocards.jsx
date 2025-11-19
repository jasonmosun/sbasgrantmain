// "use client";
// import React, { useEffect, useState } from "react";

// export default function CryptoCards() {
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false",
//           { cache: "no-store" } 
//         );
//         const data = await res.json();
//         setCoins(data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="w-full h-60 bg-black text-white py-10 mt-30">
//       <div className="flex justify-between items-stretch gap-4 w-full px-8 overflow-hidden">
//         {coins.map((coin) => (
//           <div
//             key={coin.id}
//             className="basis-[12.5%] bg-[#0B0D17] border border-grey-100 border-2 text-white rounded-xl p-5 text-center shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={coin.image}
//               alt={coin.name}
//               className="w-12 h-12 mx-auto mb-3"
//             />
//             <h2 className="text-lg font-semibold truncate">{coin.name}</h2>
//             <p className="text-gray-300">${coin.current_price.toLocaleString()}</p>
//             <p
//               className={`mt-2 px-2 py-1 text-sm rounded-md inline-block ${
//                 coin.price_change_percentage_24h >= 0
//                   ? "bg-green-600"
//                   : "bg-red-600"
//               }`}
//             >
//               {coin.price_change_percentage_24h.toFixed(2)}%
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
