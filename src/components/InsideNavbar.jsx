"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CircleUser } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  useEffect(() => {
    // close on route change
    const handle = () => setOpen(false);
    // no event in app router easily; leaving simple
  }, []);

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-18">
            <div className=" flex items-center gap-3">
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-3xl">☰</button>
          <Link href="/" className="font-bold text-3xl"><span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT</Link>
            </div>  
            <div>
                < CircleUser size={38} strokeWidth={3} className="text-blue-500 font-black text-5xl"/>
                </div>     
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/transactions">Transactions</Link>
          <Link href="/deposit">Deposit</Link>
          <Link href="/support">Support</Link>
          <Link href="/add-account">Add Account</Link>
          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded" onClick={logout}>Logout</button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white p-4 border-t">
          <Link href="/dashboard" className="block py-2">Dashboard</Link>
          <Link href="/transactions" className="block py-2">Transactions</Link>
          <Link href="/deposit" className="block py-2">Deposit</Link>
          <Link href="/support" className="block py-2">Support</Link>
          <Link href="/add-account" className="block py-2">Add Account</Link>
          <button onClick={logout} className="block w-full text-left py-2">Logout</button>
        </div>
      )}
    </nav>
  );
}
