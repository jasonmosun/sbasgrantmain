import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (!adminToken) return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    await jwtVerify(adminToken, SECRET);

    await dbConnect();
    const users = await User.find().lean();
    return new Response(JSON.stringify({ users }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
