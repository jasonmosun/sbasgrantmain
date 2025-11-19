import dbConnect from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (!adminToken) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    await jwtVerify(adminToken, SECRET);

    await dbConnect();
    const txs = await Transaction.find({ type: "deposit", status: "pending" }).sort({ createdAt: -1 }).lean();
    // attach user email
    const withUser = await Promise.all(txs.map(async t => {
      const u = await User.findById(t.user).lean();
      return { ...t, userEmail: u?.email || "Unknown" };
    }));
    return new Response(JSON.stringify({ txs: withUser }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

