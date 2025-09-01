import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

// ✅ Place Order
export const placeOrder = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    // Find user by Clerk ID
    const user = await userModel.findOne({ clerkId: clerkUserId });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const { items, amount, address, paymentMethod } = req.body;

    // Create new order
    const newOrder = new orderModel({
      userId: user._id,
      items,
      amount,
      address,
      paymentMethod: paymentMethod || "cod", // ✅ ensure default
      date: new Date(), // ✅ add date
      status: "pending",
    });

    await newOrder.save();

    // ✅ Empty cart after placing order
    user.cartData = {};
    await user.save();

    res.json({ success: true, order: newOrder });
  } catch (err) {
    console.error("PlaceOrder Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get all orders of current user
export const userOrders = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    const user = await userModel.findOne({ clerkId: clerkUserId });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const orders = await orderModel.find({ userId: user._id }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error("UserOrders Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Admin: get all orders
export const allOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("userId", "email name")
      .sort({ date: -1 });

    res.json({ success: true, orders });
  } catch (err) {
    console.error("AllOrders Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};

// ✅ Admin: update order status
export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Order status updated" });
  } catch (err) {
    console.error("UpdateStatus Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to update status" });
  }
};
