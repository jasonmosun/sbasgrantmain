"use client";
export default function WithdrawPage() {
  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Withdraw</h2>
      <p className="mb-4">Please provide your bank details to request a withdrawal. Currently the withdraw service is unavailable.</p>

      <div className="p-4 bg-yellow-50 border rounded">
        <h3 className="font-semibold">Unable to make withdraw service!</h3>
        <p className="text-sm mt-2">Sorry, at the moment our withdraw service is unavailable. Check back soon.</p>
        <a className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded" href="mailto:sbaassistantanceinfo@gmail.com">Contact us</a>
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
