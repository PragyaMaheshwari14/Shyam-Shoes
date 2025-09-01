import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";

const SyncUser = () => {
  const { isSignedIn, getToken } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getToken();
        if (!token) return;

        await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (err) {
        console.error("SyncUser failed:", err.message);
      }
    };

    if (isSignedIn) {
      syncUser();
    }
  }, [isSignedIn, getToken]);

  return null;
};

export default SyncUser;
