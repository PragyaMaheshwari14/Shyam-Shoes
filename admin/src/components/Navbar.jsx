import React from "react";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold">Admin Panel</h1>

      {/* Clerk User Avatar + Dropdown (includes Logout option) */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
