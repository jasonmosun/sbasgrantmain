import mongoose from "mongoose";

const WithdrawalSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    method:  {
  type: String,
  default: "bank",
}, // "bank" or "wallet"

    amount: Number,
    status: { type: String,enum: ["pending","confirmed","rejected"], default: "pending" },

    // BANK
    firstName: String,
    lastName: String,
    bankName: String,
    accountNumber: String,
    routingNumber: String,

    // WALLET
    walletAddress: String,
    walletName: String,
  },
  { timestamps: true }
);

export default mongoose.models.Withdrawal ||
  mongoose.model("Withdrawal", WithdrawalSchema);