"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loginfooter from "@/components/Loginfooter";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);
      

      if (res.ok) {
        console.log("Login successful — redirecting...");
        router.push("/dashboard");
         
        
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1a2a] px-4">

      <div className="mb-6 pt-20">
        <h1 className="text-3xl text-white font-bold tracking-wide">
          <span className="text-red-500">S</span>
          <span className="text-blue-500">B</span>
          <span className="text-red-500">A</span>GRANT
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Login into Account
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Sign in into your account using your email and passcode.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your passcode"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium ${
              loading
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700 transition"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p className="text-center text-sm text-red-500 mt-2">
              {message}
            </p>
          )}
        </div>

        <p className="text-sm text-center mt-5 text-gray-700">
          New on our platform?{" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            Create an account
          </a>
        </p>
      </form>

      <Loginfooter />
    </div>
  );
}
