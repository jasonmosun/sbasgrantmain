"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password: pass }),
      headers: { "Content-Type": "application/json" }
    });
    const j = await res.json();
    if (!res.ok) return setErr(j.message || "Error");
    router.push("/admin/dashboard");
  }

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Admin password" type="password" className="w-full p-2 border rounded"/>
        {err && <div className="text-red-600">{err}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
