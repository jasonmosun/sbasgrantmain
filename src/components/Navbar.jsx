// components/Navbar.jsx
"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) setUserEmail(email);
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    localStorage.removeItem("user_email");
    router.push("/login");
  }

  return (
    <nav
      className={`bg-slate-900 fixed w-full text-white transition-all z-50 -mt-2 ${
        scrolled ? "bg-gray-500 shadow-lg shadow-blue-200" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {/* LOGO */}
        <img src="/sbalogomain.png" alt="logo" className="h-16" />

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={40} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg font-bold pr-10">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#packages">Packages</Link>
          <Link href="#offers">Offers</Link>
          <Link href="/support">Support</Link>
          <Link href="/admin/login">Admin</Link>

          {userEmail ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="px-3 py-1 rounded" href="/login">
                Login
              </Link>
              <Link
                className="bg-blue-600 px-6 py-3 rounded-3xl"
                href="/signup"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-5 bg-black px-6 py-6 md:hidden text-lg font-bold">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="#about">About</Link>
          <Link onClick={() => setOpen(false)} href="#packages">Packages</Link>
          <Link onClick={() => setOpen(false)} href="#offers">Offers</Link>
          <Link onClick={() => setOpen(false)} href="/support">Support</Link>
          <Link onClick={() => setOpen(false)} href="/admin/login">Admin</Link>

          {userEmail ? (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="bg-red-600 px-3 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded"
                href="/login"
              >
                Login
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="bg-blue-600 px-5 py-3 rounded-3xl"
                href="/signup"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
