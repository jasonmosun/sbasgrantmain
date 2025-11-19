// components/Footer.jsx
export default function Footerl() {
  return (
    <footer className="bg-slate-100 mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT. All rights reserved.</p>
      </div>
    </footer>
  );
}
