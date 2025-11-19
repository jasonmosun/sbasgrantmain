import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    const body = await req.json();
    const { amountUSD, coinAmount } = body;
    if (!amountUSD) return new Response(JSON.stringify({ message: "Missing amount" }), { status: 400 });

    await dbConnect();
    const tx = await Transaction.create({
      user: userId,
      type: "deposit",
      amountUSD,
      coinAmount: coinAmount || 0,
      status: "pending"
    });

    return new Response(JSON.stringify({ message: "Deposit request created", tx }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
