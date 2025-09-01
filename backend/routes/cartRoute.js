import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const cartRouter = express.Router();

// ✅ All cart routes require login
cartRouter.post("/get", ClerkExpressRequireAuth(), getUserCart);
cartRouter.post("/add", ClerkExpressRequireAuth(), addToCart);
cartRouter.post("/update", ClerkExpressRequireAuth(), updateCart);

export default cartRouter;
