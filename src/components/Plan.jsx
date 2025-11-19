// components/Plans.jsx
import Link from "next/link";

export default function Plans({ plans = [] }) {
  return (
    <div id="plans" className="grid md:grid-cols-4 gap-6">
      {plans.map((plan) => (
        <div key={plan._id} className="border rounded p-6 bg-white shadow">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="text-3xl font-extrabold my-4">{plan.returnRate}%</p>
          <p>Min: ${plan.minAmount} — Max: ${plan.maxAmount}</p>
          <p className="mt-3">After {plan.duration} hours</p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">Select Plan</button>
        </div>
      ))}
    </div>
  );
}
