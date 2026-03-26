import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    // ✅ ADMIN AUTH
    const adminToken = req.cookies.get("admin_token")?.value;

    if (!adminToken) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    await jwtVerify(adminToken, SECRET);

    // ✅ FIXED: use txId
    const { txId } = await req.json();

    if (!txId) {
      return new Response(JSON.stringify({ message: "No transaction ID" }), { status: 400 });
    }

    await dbConnect();

    // ✅ FIND TRANSACTION
    const tx = await Transaction.findById(txId);

    if (!tx) {
      return new Response(JSON.stringify({ message: "Transaction not found" }), { status: 404 });
    }

    if (tx.status !== "pending") {
      return new Response(JSON.stringify({ message: "Already processed" }), { status: 400 });
    }

    if (tx.type !== "withdraw") {
      return new Response(JSON.stringify({ message: "Not a withdrawal" }), { status: 400 });
    }

    // ✅ FIND USER
    const user = await User.findById(tx.user);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    // ✅ UPDATE USER TOTAL WITHDRAW ONLY (DO NOT deduct again)
    user.totalWithdraw += tx.amountUSD;
    await user.save();

    // ✅ CONFIRM TRANSACTION
    tx.status = "confirmed";
    await tx.save();

    return new Response(JSON.stringify({ message: "Withdrawal approved" }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}