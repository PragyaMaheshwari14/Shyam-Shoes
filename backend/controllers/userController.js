import userModel from "../models/userModel.js";
import { users } from "@clerk/clerk-sdk-node";

// ✅ Sync Clerk → MongoDB when frontend calls /profile
export const syncUser = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
      return res.status(401).json({ success: false, message: "Unauthenticated" });
    }

    const clerkUser = await users.getUser(clerkUserId);

    const email = clerkUser.emailAddresses[0]?.emailAddress;
    const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();
    const imageUrl = clerkUser.imageUrl;

    const user = await userModel.findOneAndUpdate(
      { clerkId: clerkUserId },
      { email, name, imageUrl },
      { new: true, upsert: true }
    );

    res.json({ success: true, user });
  } catch (err) {
    console.error("SyncUser Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to sync user" });
  }
};

// ✅ Admin: get all users
export const getAllUsers = async (req, res) => {
  try {
    const usersList = await userModel.find();
    res.json({ success: true, users: usersList });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};
