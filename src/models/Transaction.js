import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["deposit","withdraw"], required: true },
  amountUSD: { type: Number, required: true },
  coinAmount: { type: Number, default: 0 },
  status: { type: String, enum: ["pending","confirmed","rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
  metadata: {} // any extra info
});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
