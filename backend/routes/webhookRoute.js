import express from "express";
import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const webhookRouter = express.Router();

webhookRouter.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!SIGNING_SECRET) {
      return res.status(500).json({ error: "Missing CLERK_WEBHOOK_SECRET" });
    }

    const wh = new Webhook(SIGNING_SECRET);

    let evt;
    try {
      evt = wh.verify(req.body, req.headers);
    } catch (err) {
      console.error("Webhook verification failed:", err.message);
      return res.status(400).json({ error: "Invalid webhook" });
    }

    const { type, data } = evt;

    try {
      if (type === "user.created" || type === "user.updated") {
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses[0]?.email_address,
            name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            imageUrl: data.image_url,
          },
          { new: true, upsert: true }
        );
      }

      if (type === "user.deleted") {
        await userModel.findOneAndDelete({ clerkId: data.id });
      }

      res.json({ success: true });
    } catch (err) {
      console.error("Webhook processing error:", err.message);
      res.status(500).json({ error: "Failed to handle webhook" });
    }
  }
);

export default webhookRouter;
