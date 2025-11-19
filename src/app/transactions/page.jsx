"use client";
import { useEffect, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function Transactions() {
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    fetch("/api/transactions").then(r=>r.json()).then(j=>{
      if (j.txs) setTxs(j.txs);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold mb-4 flex gap-4">All Transactions <ArrowLeftRight size={30} strokeWidth={4} className="mt-1 text-green-400"/></h2>
      {txs.length === 0 ? <div>No transactions yet.</div> : (
        <ul className="space-y-3">
          {txs.map(tx => (
            <li key={tx._id} className="flex justify-between items-center  shadow shadow-green-400 p-3 rounded">
              <div>
                <div className="font-semibold">{tx.type} • {tx.status}</div>
                <div className="text-sm text-gray-500">{new Date(tx.createdAt).toLocaleString()}</div>
              </div>
              <div className={`${tx.status === "confirmed" ? "text-green-600" : "text-yellow-600"} font-bold`}>+{tx.amountUSD} USD</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
