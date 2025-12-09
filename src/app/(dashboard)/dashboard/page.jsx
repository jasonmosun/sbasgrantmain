"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight,ArrowUp } from "lucide-react";


export default function Dashboard() {
  const [user,setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/me").then(r=>r.json()).then(j=>{
      if (!rOk(j)) return;
      setUser(j.user || j);
    }).catch(()=>{});
  }, []);

  function rOk(j){ return j && !j.message; }

  if (!user) {
    return <div className="mt-20 text-xl">Loading... hang there investor</div>;
  }

  return (
    <div className="space-y-6">
      <div className="  ">
        <div className="text-sm text-gray-600">Here's a summary of your account. Have fun!</div>
        <div className="mt-4 bg-white border-b-6 border-blue-500 shadow shadow-gray-500 rounded p-4">
          <div className="text-lg font-normal">Available Balance</div>
          <div className="text-3xl font-bold mt-3">{Number(user.availableBalance || 0).toLocaleString()} USD</div>
          <div className="mt-5 text-gray-500">Investments Account</div>
          <div className=""><span className="font-bold">0</span>   USD</div>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={()=>router.push('/deposit')}>Deposit →</button>
            <button className="px-4 py-2 bg-black text-white rounded" onClick={()=>router.push('/withdraw')}>Withdraw</button>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-4">
         {/* <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Investment Account</div>
          <div className="text-2xl font-bold">{Number(user.totalDeposit || 0).toLocaleString()} USD </div>
        </div>  */}
        <div className=" bg-white p-4 border-b-6 border-yellow-500 shadow shadow-gray-500 rounded">
          <div className="text-xl font-normal ">Total Deposit</div>
          <div className="text-2xl font-bold mt-3"> {Number(user.investmentAccountBalance || 0).toLocaleString()} USD</div>
           <div className="text-gray-500 text-lg mt-4">This month</div>
           <div className="flex gap-1">{Number(user.investmentAccountBalance || 0).toLocaleString()} USD <span className="text-green-400 flex"><ArrowUp/> 100%</span></div>
        </div>
        <div className=" bg-white p-4 border-b-6 border-red-500 shadow shadow-gray-500 rounded">
          <div className="text-xl font-normal">Total Withdraw</div>
          <div className="text-2xl font-bold">{Number(user.totalWithdraw || 0).toLocaleString()} USD</div>
          <div className="text-gray-500 text-lg mt-4">This month</div>
           <div>  <span className="font-bold">0</span> USD</div>
        </div>
        <div className=" bg-white p-4 border border-green-400 rounded">
          <div className="text-sm text-gray-500">User</div>
          <div className="text-lg ">{user.name} •<ArrowRight size={20}/> {user.email}</div>
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
