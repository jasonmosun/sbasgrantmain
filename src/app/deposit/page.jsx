"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Deposit() {
  const [amountUSD, setAmountUSD] = useState("");
  const [coinAmount, setCoinAmount] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setMsg("");
    const res = await fetch("/api/deposit", {
      method: "POST",
      body: JSON.stringify({ amountUSD: Number(amountUSD), coinAmount: Number(coinAmount) }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (!res.ok) {
      setMsg(data.message || "Error");
      return;
    }
    setMsg("Deposit request sent. Please pay to the BTC address below and once done click 'I have made the deposit'.");
  }

  async function iMadeDeposit(txId) {
    // deposit already created via submit — admin will confirm. For simplicity just route to transactions.
    router.push("/transactions");
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Deposit via Crypto Wallet</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={amountUSD} onChange={e=>setAmountUSD(e.target.value)} placeholder="Amount in USD" className="w-full p-2 border rounded" />
        <input value={coinAmount} onChange={e=>setCoinAmount(e.target.value)} placeholder="Coin amount (BTC)" className="w-full p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Create deposit request</button>
      </form>

      <div className="border p-4 rounded bg-gray-50">
        <div className="text-sm font-medium">Send BTC to this address:</div>
        <div className="mt-2 p-3 bg-white rounded shadow">{process.env.NEXT_PUBLIC_BTC_ADDRESS || "12qx8dqfZQm9VUutxa4zsyUuCWkFtFKAy4"}</div>
        <div className="text-xs text-gray-500 mt-2">After sending, click "I have made the deposit" to notify admin.</div>
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded" onClick={()=>iMadeDeposit()}>I have made the deposit</button>
      </div>

      {msg && <div className="text-green-700">{msg}</div>}

      <footer className="text-center mt-12 text-gray-600 text-sm space-y-4 pd-10 mt-70">
       <p> <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT </p>

        <div className="flex justify-center space-x-6">
          <a href="/faq" className="hover:underline">FAQs</a>
          <a href="/terms" className="hover:underline">Terms and Condition</a>
          <a href="/policy" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
