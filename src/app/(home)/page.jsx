// app/page.jsx
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";

import Navbar from "@/components/Navbar";



import Numberstat from "@/components/Numberstat";
import CryptoTicker from "@/components/Cryptoslider";
import Marketcrypto from "@/components/Marketcrypto";
import Link from "next/link";
// import CryptoCards from "@/components/cryptocards";
import InvestmentPlans from "@/components/Packages";
import CryptoTable from "@/components/Cryptotable";
import RecentTransactions from "@/components/Transactiontable";
import TeamSection from "@/components/Teamsection";
import Landingfooter from "@/components/Landingfooter";
import FloatingInvestmentBanner from "@/components/Floatingbanner"

export default async function Home() {


  return (
    <div>
      <img src="/server down image.png" class="w-full h-screen object-contain" />
    </div>
    // <div className="">
      

    //   <Navbar />
    //   <FloatingInvestmentBanner />
    //   <Hero />

    //   < CryptoTicker />
    //   <Numberstat />
    //   <Marketcrypto />





    //   <section id="about">
    //     <div className="bg-black">
    //       {/* Header */}
    //       <div className="mx-auto text-center pt-20 text-lg text-orange-500 font-semibold">
    //         <h3>HOME OF CRYPTO INVESTMENTS</h3>
    //       </div>

    //       {/* Who We Are Section */}
    //       <div className="flex flex-col md:flex-row pt-10 gap-6 px-6 md:px-10 items-center">
    //         {/* Image */}
    //         <div className="w-full md:w-1/2 flex justify-center">
    //           <img
    //             src="/btcinvest1.png"
    //             alt="people investing on bitcoin"
    //             className="rounded-lg shadow-lg max-w-full h-auto"
    //           />
    //         </div>

    //         {/* Text */}
    //         <div className="w-full md:w-1/2 text-white">
    //           <h4 className="text-orange-500 font-semibold">WHO WE ARE & WHAT WE DO</h4>
    //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 md:mt-7 leading-snug">
    //             We’re empowering teams to achieve greatness together.
    //           </h1>
    //           <p className="mt-5 text-base sm:text-lg leading-relaxed">
    //             SBA GRANT makes it safe and easy to withdraw. This new program was established
    //             by the Federal Government for those who need assistance paying bills, buying
    //             a home, starting their own business, going to school, or helping raise children
    //             with old or disabled relatives. It’s government tax-free money given to individuals
    //             or companies that does not need to be paid back. Earning the trust of our clients
    //             has always been our highest priority. We earn that trust through the best security
    //             in the business — our digital assets are held safely in cold wallets. We also pair
    //             our global 24/7/365 live chat with an extensive support center to ensure your
    //             questions are answered around the clock.
    //           </p>
    //           <div className="mt-5">
    //             <Link
    //               href="/signup"
    //               className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-3xl shadow-md inline-block"
    //             >
    //               Get Started
    //             </Link>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Stats Section */}
    //       <div className="bg-yellow-400 mt-12 py-8">
    //         <div className="flex justify-between items-center w-[90%] mx-auto text-center gap-4">
    //           <div className="flex-1">
    //             <h3 className="font-semibold text-sm sm:text-base">TOTAL DEPOSIT</h3>
    //             <p className="text-xl sm:text-2xl md:text-3xl font-bold">$600M</p>
    //           </div>
    //           <div className="flex-1">
    //             <h3 className="font-semibold text-sm sm:text-base">TOTAL WITHDRAW</h3>
    //             <p className="text-xl sm:text-2xl md:text-3xl font-bold">$980M</p>
    //           </div>
    //           <div className="flex-1">
    //             <h3 className="font-semibold text-sm sm:text-base">ACTIVE INVESTOR</h3>
    //             <p className="text-xl sm:text-2xl md:text-3xl font-bold">30,000</p>
    //           </div>
    //           <div className="flex-1">
    //             <h3 className="font-semibold text-sm sm:text-base">ACTIVE COUNTRIES</h3>
    //             <p className="text-xl sm:text-2xl md:text-3xl font-bold">110 +</p>
    //           </div>
    //         </div>
    //       </div>


    //       {/* Original Investors Section */}
    //       <div className="flex flex-col md:flex-row gap-6 mt-20 px-6 md:px-10 items-center">
    //         {/* Text */}
    //         <div className="w-full md:w-2/5 bg-blue-500 text-white p-6 rounded-xl">
    //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
    //             We are the original crypto Investors.
    //           </h1>
    //           <p className="text-base sm:text-lg mt-4 leading-relaxed">
    //             We put the power in your hands to trade and invest in digital currency. With
    //             our proven track record and mature approach to the industry, we provide reliable
    //             trading and investment of cryptocurrencies for both individuals and institutions
    //             all around the globe. Our platform gives you the power to kick start your crypto
    //             journey, no matter your experience level. Set up your own free Investment account
    //             to get started.
    //           </p>
    //         </div>

    //         {/* Video */}
    //         <div className="w-full md:w-3/5">
    //           <video
    //             src="https://sbafundingwithdrawal.com/video/vid.mp4"
    //             className="w-full h-full object-cover rounded-xl"
    //             autoPlay
    //             muted
    //             loop
    //             playsInline
    //             controls
    //           />
    //         </div>
    //       </div>
    //       {/* <CryptoCards/>  */}
    //     </div>
    //   </section>
    //   <section id="packages">
    //     <div>
    //       < InvestmentPlans />

    //     </div>
    //   </section>
    //   <section id="offers">
    //     <CryptoTable />

    //     <RecentTransactions />
    //   </section>
    //   <section id="support">
    //     <TeamSection />

    //     <div className="">
    //       <img src="/sponsor2.png" alt="sponsors" />
    //     </div>
    //     <div className="bg-black pt-20 px-5 md:px-20">
    //       {/* Hero Section */}
    //       <div className="bg-black px-5 md:px-20 pt-20">
    //         {/* Hero Section */}
    //         <div className="flex flex-col md:flex-row items-center gap-10">
    //           {/* Text Section */}
    //           <div className="md:w-1/2 flex flex-col justify-center">
    //             <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
    //               We Are a Multi-Coin Investment Platform
    //             </h1>
    //             <p className="text-base md:text-xl font-medium mt-4 text-white">
    //               Our vision is to be the world leader in cryptocurrency mining and trading by offering a unique program and unmatched customer service.
    //             </p>
    //             <div className="mt-6">
    //               <Link
    //                 href="/signup"
    //                 className="bg-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-3xl shadow-md shadow-gray-500 inline-block text-center"
    //               >
    //                 Get Started
    //               </Link>
    //             </div>
    //           </div>

    //           {/* Images Section */}
    //           <div className="md:w-1/2 grid grid-cols-2 gap-5">
    //             <img
    //               className="border-4 border-white rounded-3xl p-4 w-full"
    //               src="/teambitcoin1.png"
    //               alt=""
    //             />
    //             <img
    //               className="border-4 border-white rounded-3xl p-4 w-full"
    //               src="/teambitcoin2.png"
    //               alt=""
    //             />
    //             <img
    //               className="border-4 border-white rounded-3xl p-4 w-full"
    //               src="/teamcone.png"
    //               alt=""
    //             />
    //             <img
    //               className="border-4 border-white rounded-3xl p-4 w-full"
    //               src="/coin04.png"
    //               alt="lcoin"
    //             />
    //           </div>
    //         </div>

    //         {/* About Section */}
    //         <div className="flex flex-col md:flex-row items-center gap-10 mt-20 pb-10">
    //           <div className="md:w-1/2">
    //             <img className="w-full rounded-xl" src="/sbaabout.jpeg" alt="about" />
    //           </div>
    //           <div className="md:w-1/2">
    //             <h1 className="text-3xl md:text-5xl font-bold text-yellow-500">
    //               Join Over 2 Million Investors
    //             </h1>
    //             <p className="text-base md:text-2xl font-semibold mt-4 text-white">
    //               Our expert team has worked all over the world for top tech and finance companies such as Google, Amazon, Morgan Stanley and Barclays. Plus we’re backed by some of the world's top investors.
    //             </p>
    //           </div>
    //         </div>
    //       </div>


    //     </div>

    //   </section>

    //   <section>
    //     <Landingfooter />
    //   </section>





    // </div>
  );
}

