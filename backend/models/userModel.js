import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: String,
    email: { type: String, required: true, unique: true },
    imageUrl: String,
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    cartData: { type: Object, default: {} },
  },
  { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
