import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });

    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    const { bankName, accountName, accountNumber } = await req.json();
    if (!bankName || !accountName || !accountNumber) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    await dbConnect();
    const user = await User.findById(userId);
    user.accounts = user.accounts || [];
    user.accounts.push({ bankName, accountName, accountNumber });
    await user.save();

    return new Response(JSON.stringify({ message: "Account saved", accounts: user.accounts }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    const { payload } = await jwtVerify(token, SECRET);
    const userId = payload.id;

    await dbConnect();
    const user = await User.findById(userId);
    return new Response(JSON.stringify({ accounts: user.accounts || [] }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
