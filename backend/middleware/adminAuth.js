import { ClerkExpressRequireAuth, users } from "@clerk/clerk-sdk-node";

const adminAuth = [
  ClerkExpressRequireAuth(),
  async (req, res, next) => {
    try {
      const clerkUser = await users.getUser(req.auth.userId);

      if (!clerkUser || clerkUser.publicMetadata.role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Admins only! Access denied.",
        });
      }

      // ✅ Attach admin info for logging/debugging
      req.admin = {
        id: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
      };

      next();
    } catch (err) {
      console.error("AdminAuth Error:", err.message);
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  },
];

export default adminAuth;
