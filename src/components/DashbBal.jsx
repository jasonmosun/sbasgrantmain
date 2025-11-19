// StatCard.jsx
import React from "react";

export default function StatCard({ title, amount, hint, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-5 w-full">
      <h3 className="text-slate-700 text-sm font-semibold">{title}</h3>
      <div className="mt-3 text-2xl font-bold text-slate-900">
        {amount.toLocaleString()} USD
      </div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
      {children && <div className="mt-3 flex flex-wrap gap-2">{children}</div>}
    </div>
  );
}
