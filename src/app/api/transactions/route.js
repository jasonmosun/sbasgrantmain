import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    await dbConnect();
    const txs = await Transaction.find({ user: userId }).sort({ createdAt: -1 }).lean();
    return new Response(JSON.stringify({ txs }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
