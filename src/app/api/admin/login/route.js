import { SignJWT } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  const { password } = await req.json();
  if (!password) return NextResponse.json({ message: "Missing password" }, { status: 400 });

  if (password !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ message: "Invalid admin password" }, { status: 401 });
  }

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("15m")
    .sign(secret);

  const res = NextResponse.json({ message: "Admin logged in" });
  res.cookies.set({
    name: "admin_token",
    value: token,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    // maxAge: 60 * 60 * 24 * 7
  });

  return res;
}
