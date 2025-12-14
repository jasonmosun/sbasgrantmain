"use client";
import { useEffect, useState } from "react";


export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    fetch("/api/admin/users").then(r => r.json()).then(j => { if (j.users) setUsers(j.users); });
    fetch("/api/admin/pending-deposits").then(r => r.json()).then(j => { if (j.txs) setTxs(j.txs); });
  }, []);

  async function saveBalance(userId, idx) {
    const u = users[idx];
    const res = await fetch("/api/users/update-balance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId,
        availableBalance: u.availableBalance,
        investmentAccountBalance: u.investmentAccountBalance,
        totalDeposit: u.totalDeposit,
        totalWithdraw: u.totalWithdraw
      }),
      headers: { "Content-Type": "application/json" }
    });
    const j = await res.json();
    if (res.ok) alert("Saved");
    else alert(j.message || "Error");
  }

  async function confirm(txId) {
    const res = await fetch("/api/confirm-deposit", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ txId }),
      headers: { "Content-Type": "application/json" }
    });
    const j = await res.json();
    if (res.ok) {
      alert("Confirmed");
      // refresh
      const r1 = await fetch("/api/admin/pending-deposits");
      const j1 = await r1.json();
      setTxs(j1.txs || []);
    } else alert(j.message || "Error");
  }

  return (
    <div className="space-y-6">
      {/* <img src="/server down image.png" class="w-full h-screen object-contain" /> */}

       <div className="text-center text-2xl text-red-500 font-bold mt-6">Welcome to the power-house</div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 text-green-700">Pending Deposits</h2>
        {txs.length === 0 ? <div className="text-green-500">No pending deposits</div> :
          <ul>
            {txs.map(t => (
              <li key={t._id} className="border border-green-500 shadow shadow-green-500 p-3 mt-3 flex justify-between">
                <div>
                  <div className="font-semibold">{t.userEmail || t.user}</div>
                  <div className="text-sm text-gray-500">{t.amountUSD} USD • {new Date(t.createdAt).toLocaleString()}</div>
                </div>
                <div>
                  <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={() => confirm(t._id)}>Confirm</button>
                </div>
              </li>
            ))}
          </ul>}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-3 text-blue-500">Users</h2>
        {users.length === 0 ? <div className="text-blue-500">No users</div> :
          <div className="space-y-3">
            {users.map((u, idx) => (
              <div key={u._id} className="border border-blue-500 p-3 rounded grid md:grid-cols-5 gap-2">
                <div className="md:col-span-2">
                  <div className="font-semibold">{u.name}</div>
                  <div className="text-sm">{u.email}</div>
                </div>
                <input value={u.availableBalance} onChange={e => { const copy = [...users]; copy[idx].availableBalance = e.target.value; setUsers(copy); }} className="p-2 border rounded" />
                <input value={u.investmentAccountBalance} onChange={e => { const copy = [...users]; copy[idx].investmentAccountBalance = e.target.value; setUsers(copy); }} className="p-2 border rounded" />
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => saveBalance(u._id, idx)}>Save</button>
                </div>
              </div>
            ))}
          </div>
        }
      </div> 
    </div>
  );
}
