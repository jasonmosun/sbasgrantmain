"use client";
import { useState, useEffect } from "react";

export default function AddAccount() {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("/api/accounts").then(r=>r.json()).then(j=> {
      if (j.accounts) setAccounts(j.accounts);
    });
  }, []);

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/accounts", {
      method: "POST",
      body: JSON.stringify({ bankName, accountName, accountNumber }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok) {
      setAccounts(data.accounts || []);
      setBankName(""); setAccountName(""); setAccountNumber("");
    } else {
      alert(data.message || "Error");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add account</h2>
      <form onSubmit={submit} className="space-y-3 mb-4">
        <input value={bankName} onChange={e=>setBankName(e.target.value)} placeholder="Bank name" className="w-full p-2 border rounded"/>
        <input value={accountName} onChange={e=>setAccountName(e.target.value)} placeholder="Account name" className="w-full p-2 border rounded"/>
        <input value={accountNumber} onChange={e=>setAccountNumber(e.target.value)} placeholder="Account number" className="w-full p-2 border rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save account</button>
      </form>

      <div>
        <h3 className="font-semibold">Saved accounts</h3>
        {accounts.length === 0 ? <div className="text-sm text-gray-500">No accounts yet</div> : (
          <ul className="space-y-2 mt-2">
            {accounts.map((a,i)=>(
              <li key={i} className="border p-3 rounded">
                <div className="font-medium">{a.bankName}</div>
                <div className="text-sm">{a.accountName} • {a.accountNumber}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
