import { SignJWT } from "jose";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ message: "Missing credentials" }, { status: 400 });

    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });

    const payload = { id: user._id.toString(), email: user.email, role: user.role };

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .sign(secret);

    const res = NextResponse.json({ message: "Login successful", user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      availableBalance: user.availableBalance,
      investmentAccountBalance: user.investmentAccountBalance,
      totalDeposit: user.totalDeposit,
      totalWithdraw: user.totalWithdraw,
      accounts: user.accounts || []
    }});

    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      // maxAge: 60 * 60 * 24 * 7
    });

    return res;
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
