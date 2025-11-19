"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Companyname from "@/components/Companyname";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);   // ✅ added
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setMessage("");

    if (!agreed) {
      setMessage("You must agree to the Terms & Conditions.");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);

    if (!res.ok) return;

    router.push("/login");
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md mx-auto p-6 pt-10">
      <Companyname />

      <h2 className="text-xl font-semibold text-slate-800 mb-2 pt-4">
        Create an Account
      </h2>

      <p className="text-sm text-slate-500 mb-4">
        Sign up with your email and get started with your free account.
      </p>

      <p className="text-lg mt-3 text-red-600">{message}</p>

      <form onSubmit={submit} className="space-y-4">
        <label className="block">
          <span className="text-sm text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </span>
          <input
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">
            Email Address <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">
            Password <span className="text-red-500">*</span>
          </span>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            placeholder="Create password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </label>

        {/* ✅ Checkbox with state */}
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-sky-600 underline">
              Terms &amp; Condition
            </a>
          </span>
        </label>

        {/* ✅ Disabled submit button until agreed */}
        <button
          type="submit"
          disabled={!agreed}
          className={`w-full py-3 rounded-lg text-sm font-medium
            ${agreed
              ? "bg-sky-600 hover:bg-sky-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}
          `}
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <a href="/login" className="text-sky-600 underline">
          Sign in instead
        </a>
      </p>
    </div>
  );
}
