import dbConnect from "@/lib/mongodb";
import Withdrawal from "@/models/Withdrawal";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    // 🔐 1. AUTH
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        { status: 401 }
      );
    }

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    // 🔌 2. CONNECT DB
    await dbConnect();

    // 📦 3. GET BODY
    const body = await req.json();
    const { amount, bankName, accountNumber, firstName, lastName } = body;

    if (!amount || amount <= 0) {
      return new Response(
        JSON.stringify({ message: "Invalid amount" }),
        { status: 400 }
      );
    }

    // 👤 4. GET USER
    const user = await User.findById(userId);

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // 💰 5. CHECK BALANCE (CRITICAL)
    if (amount > user.availableBalance) {
      return new Response(
        JSON.stringify({ message: "Insufficient balance" }),
        { status: 400 }
      );
    }

    // 🧾 6. CREATE WITHDRAWAL RECORD
    const withdrawal = await Withdrawal.create({
      userId: user._id,
      amount,
      bankName,
      accountNumber,
      firstName,
      lastName,
      status: "pending",
    });

    // 📊 7. CREATE TRANSACTION (THIS FIXES YOUR HISTORY ISSUE)
    await Transaction.create({
      user: user._id,
      type: "withdraw", // MUST match your schema
      amountUSD: amount,
      status: "pending",
      metadata: {
        withdrawalId: withdrawal._id,
      },
    });

    // 💸 8. DEDUCT BALANCE (optional but recommended)
    user.availableBalance -= amount;
    await user.save();

    return new Response(
      JSON.stringify({
        message: "Withdrawal request created",
        withdrawal,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}