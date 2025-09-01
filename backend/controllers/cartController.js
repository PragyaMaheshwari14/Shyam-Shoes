import userModel from "../models/userModel.js";

// ✅ Add to cart
export const addToCart = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const { itemId, size } = req.body;

    let user = await userModel.findOne({ clerkId: clerkUserId });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = { ...user.cartData };

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    user.cartData = cartData;
    await user.save();

    res.json({ success: true, cartData: user.cartData });
  } catch (err) {
    console.error("AddToCart Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get user cart
export const getUserCart = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    let user = await userModel.findOne({ clerkId: clerkUserId });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, cartData: user.cartData });
  } catch (err) {
    console.error("GetUserCart Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Update cart quantity
export const updateCart = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const { itemId, size, quantity } = req.body;

    let user = await userModel.findOne({ clerkId: clerkUserId });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = { ...user.cartData };

    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      cartData[itemId][size] = quantity;
    }

    user.cartData = cartData;
    await user.save();

    res.json({ success: true, cartData: user.cartData });
  } catch (err) {
    console.error("UpdateCart Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
