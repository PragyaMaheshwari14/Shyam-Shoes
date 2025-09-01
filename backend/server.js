import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Prevent server crash on Clerk auth errors
app.use((err, req, res, next) => {
  if (err.message === "Unauthenticated") {
    return res.status(401).json({ success: false, message: "Unauthenticated" });
  }
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Server error" });
});

app.listen(port, () => console.log("✅ Server started on Port:", port));
