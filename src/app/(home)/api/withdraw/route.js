import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    await dbConnect();

    const body = await req.json();
    const { amount, bankName, accountNumber, firstName, lastName } = body;

    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ message: "Invalid amount" }), { status: 400 });
    }

    const user = await User.findById(userId);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    if (amount > user.availableBalance) {
      return new Response(JSON.stringify({ message: "Insufficient balance" }), { status: 400 });
    }

    // ✅ CREATE TRANSACTION ONLY
    const tx = await Transaction.create({
      user: user._id,
      type: "withdraw",
      amountUSD: amount,
      status: "pending",
      metadata: {
        bankName,
        accountNumber,
        firstName,
        lastName,
      },
    });

    // deduct balance
    user.availableBalance -= amount;
    await user.save();

    return new Response(JSON.stringify({ message: "Withdrawal request created", tx }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}