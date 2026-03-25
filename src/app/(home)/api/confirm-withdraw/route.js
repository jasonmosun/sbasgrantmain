import dbConnect from "@/lib/mongodb";
import Withdrawal from "@/models/Withdrawal";
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

    const { withdrawalId } = await req.json();

    if (!withdrawalId) {
      return new Response(JSON.stringify({ message: "No withdrawal ID" }), { status: 400 });
    }

    await dbConnect();

    // ✅ FIND WITHDRAWAL
    const withdrawal = await Withdrawal.findById(withdrawalId);

    if (!withdrawal) {
      return new Response(JSON.stringify({ message: "Withdrawal not found" }), { status: 404 });
    }

    if (withdrawal.status !== "pending") {
      return new Response(JSON.stringify({ message: "Already processed" }), { status: 400 });
    }

    // ✅ FIND USER
    const user = await User.findById(withdrawal.userId);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    // ✅ CHECK BALANCE
    if (user.availableBalance < withdrawal.amount) {
      return new Response(JSON.stringify({ message: "Insufficient balance" }), { status: 400 });
    }

    // ✅ UPDATE USER BALANCE
    user.availableBalance -= withdrawal.amount;
    user.totalWithdraw += withdrawal.amount;

    await user.save();

    // ✅ UPDATE WITHDRAWAL
    withdrawal.status = "confirmed";
    await withdrawal.save();

    return new Response(JSON.stringify({ message: "Withdrawal approved" }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}