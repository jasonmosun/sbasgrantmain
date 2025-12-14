export default function FAQPage() {
  const faqs = [
    {
      q: "How can we help you?",
      a: "Do you have any questions? We strongly recommend that you start searching for the necessary information in the FAQ section."
    },
    {
      q: "What is sbafundingwithdrawal.com company?",
      a: "sbagrant platform is an international investment company. The activity of our company is aimed at the cryptocurrency trading, forex, stocks and providing investment services worldwide."
    },
    {
      q: "How to create an account?",
      a: "The registration process on the website is quite simple. You need to fill out the fields of the registration form, which include full name, email address and password."
    },
    {
      q: "Which payment methods do you accept?",
      a: "At the moment we work with PayPal, Wire Transfer, Bitcoin, Ethereum, Litecoin, Binance Coin."
    },
    {
      q: "I want to reinvest the funds received, is it possible?",
      a: "Of course. You have the right to reinvesting your profits again and again."
    },
  ];

  return (
    <div>
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        {faqs.map((item, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{item.q}</h2>
            <p className="text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
    <footer className="text-center mt-12 text-gray-600 text-sm space-y-4 pd-10">
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

