"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WithdrawPage() {
  const [form, setForm] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
  fetch("/api/me")
    .then((r) => r.json())
    .then((j) => {
      if (!j || j.message) return;
      setUser(j.user || j);
    })
    .catch(() => {})
    .finally(() => setLoading(false));
}, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const disabled =
  loading ||
  !form.amount ||
  Number(form.amount) > (user?.availableBalance ?? 0);

  async function submit() {
    await fetch("/api/withdraw/create", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        userId: user._id,
        method: "bank",
        amount: Number(form.amount)
      })
    });

    alert("Withdrawal sent for processing,check history to know the status of your withdrawal");
    router.push('/dashboard/dashboard')
  }
  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded shadow">
      
      <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">Bank Withdrawal</h1>
        <p className="mb-4">Please provide your bank details to request a withdrawal.</p>

        <div className="grid grid-cols-2 gap-3">
          <input name="firstName" placeholder="First Name" onChange={handleChange} className="input border border-gray-500 p-3 rounded" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} className="input border border-gray-500 p-3 rounded" />
        </div>

        <input name="bankName" placeholder="Bank Name" onChange={handleChange} className="input mt-3 border border-gray-500 p-3 rounded" />
        <input name="accountNumber" placeholder="Account Number" onChange={handleChange} className="input mt-3 border border-gray-500 p-3 rounded" />
        <input name="routingNumber" placeholder="Routing Number" onChange={handleChange} className="input mt-3 border border-gray-500 p-3 rounded" />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          className="input mt-3 border border-gray-500 p-3 rounded"
        />

        <p className="text-sm text-gray-500 mt-2">
  Available: {loading ? "Loading..." : `$${user?.availableBalance ?? 0}`}
     </p>

        {!loading && (
  <button
    disabled={disabled}
    onClick={submit}
    className={`btn mt-4 ${disabled ? "bg-gray-300" : "bg-blue-600 text-white p-2 rounded"}`}
  >
    Submit Withdrawal
  </button>
)}

        {form.amount && Number(form.amount) > (user?.availableBalance ?? 0) && (
  <p className="text-red-500 text-sm mt-2">
    Amount exceeds available balance
  </p>
)}
      </div>
    </div>


      
      <footer className="text-center mt-12 text-gray-600 text-sm space-y-4 pd-10 mt-105">
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
