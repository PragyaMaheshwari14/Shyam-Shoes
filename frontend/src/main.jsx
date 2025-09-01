import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import SyncUser from "./components/SyncUser.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <ShopContextProvider>
          <SyncUser />
          <App />
        </ShopContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
