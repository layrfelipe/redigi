import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    mail: {
      type: String,
      unique: true,
      required: true
    },
    walletId: {
      type: String,
      unique: true,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);