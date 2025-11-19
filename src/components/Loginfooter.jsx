"use client";

export default function Loginfooter() {
  return (
    <footer className="w-full bg-[#0f1a2a] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 px-4">

        {/* Copyright */}
        <p className="text-sm text-gray-300 text-center">
          <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT © {new Date().getFullYear()}. All Rights Reserved.
        </p>

        {/* Bottom Links */}
        <div className="flex items-center gap-8 text-sm">
          <a href="/faq" className="text-gray-300 hover:text-white">FAQs</a>
          <a href="/terms" className="text-gray-300 hover:text-white">Terms and Condition</a>
          <a href="/policy" className="text-gray-300 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
