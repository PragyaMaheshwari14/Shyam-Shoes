import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { syncUser, getAllUsers } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

// Clerk → Mongo sync (customers)
userRouter.get("/profile", ClerkExpressRequireAuth(), syncUser);

// Admin: get all users
userRouter.get("/all", ...adminAuth, getAllUsers);

export default userRouter;
