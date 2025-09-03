import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

const App = () => {
  return (
    <div className="bg-[#faf9f8] min-h-screen">
      <ToastContainer />

      {/* 🔹 If signed out → show Clerk login form */}
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      {/* 🔹 If signed in → show full admin panel */}
      <SignedIn>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/edit/:id" element={<Add />} />
              <Route path="*" element={<Navigate to="/orders" />} />
            </Routes>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default App;
