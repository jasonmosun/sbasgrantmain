import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (!adminToken) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    await jwtVerify(adminToken, SECRET); // if invalid throws

    const { txId } = await req.json();
    if (!txId) return new Response(JSON.stringify({ message: "Missing txId" }), { status: 400 });

    await dbConnect();
    const tx = await Transaction.findById(txId);
    if (!tx) return new Response(JSON.stringify({ message: "Tx not found" }), { status: 404 });

    if (tx.status === "confirmed") {
      return new Response(JSON.stringify({ message: "Already confirmed" }), { status: 400 });
    }

    // Update tx status
    tx.status = "confirmed";
    await tx.save();

    // Update user balances
    const user = await User.findById(tx.user);
    user.availableBalance = (user.availableBalance || 0) + tx.amountUSD;
    user.totalDeposit = (user.totalDeposit || 0) + tx.amountUSD;
    await user.save();

    return new Response(JSON.stringify({ message: "Deposit confirmed" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
