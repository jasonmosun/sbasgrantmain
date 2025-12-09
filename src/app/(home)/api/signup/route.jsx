import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    await dbConnect();
    const exists = await User.findOne({ email });
    if (exists) {
      return new Response(JSON.stringify({ message: "User exists" }), { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });

    const { password: _p, ...userSafe } = user.toObject();
    return new Response(JSON.stringify({ message: "Signup successful", user: userSafe }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
