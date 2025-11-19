"use client";
import { useEffect, useState } from "react";

export default function AccountSummary() {
  const [balances, setBalances] = useState({
    availableBalance: 0,
    investmentAccount: 0,
    totalDeposit: 0,
    totalWithdraw: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("balances");
    if (saved) setBalances(JSON.parse(saved));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      <div className="bg-white p-4 rounded shadow border">
        <h3 className="font-semibold">Available Balance</h3>
        <p className="text-2xl font-bold">${balances.availableBalance}</p>
        <p className="text-sm text-gray-500">
          Investment: ${balances.investmentAccount}
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow border">
        <h3 className="font-semibold">Total Deposit</h3>
        <p className="text-2xl font-bold">${balances.totalDeposit}</p>
        <p className="text-sm text-gray-500">Withdrawn: ${balances.totalWithdraw}</p>
      </div>

    </div>
  );
}
