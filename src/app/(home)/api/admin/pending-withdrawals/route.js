import dbConnect from "@/lib/mongodb";
import Withdrawal from "@/models/Withdrawal";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;

    if (!adminToken) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    await jwtVerify(adminToken, SECRET);

    await dbConnect();

    const withdrawals = await Withdrawal.find({ status: "pending" })
      .sort({ createdAt: -1 })
      .lean();

    // ✅ attach user email (same pattern as yours)
    const withUser = await Promise.all(
      withdrawals.map(async (w) => {
        const u = await User.findById(w.userId).lean();
        return {
          ...w,
          userEmail: u?.email || "Unknown",
        };
      })
    );

    return new Response(JSON.stringify({ withdrawals: withUser }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}