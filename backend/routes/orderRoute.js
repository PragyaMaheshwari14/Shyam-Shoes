import express from "express";
import {
  allOrders,
  placeOrder,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const orderRouter = express.Router();

// 🔐 Admin routes
orderRouter.post("/list", ...adminAuth, allOrders);
orderRouter.post("/status", ...adminAuth, updateStatus);

// 👤 User routes
orderRouter.post("/place", ClerkExpressRequireAuth(), placeOrder);
orderRouter.post("/userorders", ClerkExpressRequireAuth(), userOrders);

export default orderRouter;
