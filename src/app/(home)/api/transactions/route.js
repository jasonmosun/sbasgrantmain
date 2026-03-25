// import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import Withdrawal from "@/models/Withdrawal";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        { status: 401 }
      );
    }

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id; 

    await dbConnect();

    //  GET DEPOSITS
    const deposits = await Transaction.find({ user: userId })
      .sort({ createdAt: -1 })
      .lean();

    //  GET WITHDRAWALS
    const withdrawals = await Withdrawal.find({ userId })
      .sort({ createdAt: -1 })
      .lean();

    //  NORMALIZE DEPOSITS
    const depositTx = deposits.map((d) => ({
      _id: d._id,
      type: "deposit",
      status: d.status,
      amountUSD: d.amountUSD || d.amount,
      createdAt: d.createdAt,
    }));

    //  NORMALIZE WITHDRAWALS
    const withdrawTx = withdrawals.map((w) => ({
      _id: w._id,
      type: "withdrawal",
      status: w.status,
      amountUSD: w.amount,
      createdAt: w.createdAt,
    }));

    //  MERGE + SORT
    const txs = [...depositTx, ...withdrawTx].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return new Response(JSON.stringify({ txs }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}