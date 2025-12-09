export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Terms and Condition
      </h1>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4">Terms and condition</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          These terms and conditions outline the rules and regulations for the
          use of sbafunds&apos;s Website.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use <span className="text-red-500">S</span><span className="text-blue-500">B</span><span className="text-red-500">A</span>GRANT if you do
          not agree to take all of the terms and conditions stated on this page.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you have additional questions or require more information, do not
          hesitate to contact us through email at sbaassistantanceinfo@gmail.com.
        </p>
      </div>

      {/* Footer (matching screenshot style) */}
      <footer className="text-center mt-12 text-gray-600 text-sm space-y-4">
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
