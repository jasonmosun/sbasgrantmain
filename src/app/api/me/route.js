import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });

    const { payload } = await jwtVerify(token, SECRET);
    await dbConnect();
    const user = await User.findById(payload.id).lean();
    if (!user) return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    const { password, ...safe } = user;
    return new Response(JSON.stringify({ user: safe }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
