import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  bankName: String,
  accountName: String,
  accountNumber: String
}, { _id: false });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user","admin"], default: "user" },

  // balances
  availableBalance: { type: Number, default: 0 },
  investmentAccountBalance: { type: Number, default: 0 },
  totalDeposit: { type: Number, default: 0 },
  totalWithdraw: { type: Number, default: 0 },

  accounts: [AccountSchema],

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
