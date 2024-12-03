import express from "express";
import {
  allOrders,
  placeOrder,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//ADMIN FEATURE
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//PAYMENT FEATURE
orderRouter.post("/place", authUser, placeOrder);

//USER FEATURE
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
