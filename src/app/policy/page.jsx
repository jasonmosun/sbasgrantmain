export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Privacy Policy
      </h1>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Privacy Policy for sbafundingwithdrawal.com.
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          At <strong>sbafundingwithdrawal.com</strong>, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by <strong>sbagrant</strong> and how we use it.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          sbaassistantanceinfo@gmail.com
        </p>
      </div>

      {/* Footer */}
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
