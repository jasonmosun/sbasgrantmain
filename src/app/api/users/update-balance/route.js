import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (!adminToken) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    await jwtVerify(adminToken, SECRET);

    const body = await req.json();
    const { userId, availableBalance, investmentAccountBalance, totalDeposit, totalWithdraw } = body;
    if (!userId) return new Response(JSON.stringify({ message: "Missing userId" }), { status: 400 });

    await dbConnect();
    const user = await User.findById(userId);
    if (!user) return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });

    if (availableBalance !== undefined) user.availableBalance = Number(availableBalance);
    if (investmentAccountBalance !== undefined) user.investmentAccountBalance = Number(investmentAccountBalance);
    if (totalDeposit !== undefined) user.totalDeposit = Number(totalDeposit);
    if (totalWithdraw !== undefined) user.totalWithdraw = Number(totalWithdraw);

    await user.save();
    return new Response(JSON.stringify({ message: "User balances updated", user }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
