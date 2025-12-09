
import InsideNavbar from "@/components/InsideNavbar";
import "../globals.css" 

export const metadata = { title: "SBAgrant" };

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <InsideNavbar />
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
