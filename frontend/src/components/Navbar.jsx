import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ShopContext } from "../context/ShopContext";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart state from context
  const { getCartCount } = useContext(ShopContext);

  // Reference for navbar
  const navContainerRef = useRef(null);

  // Hook for scroll position
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Manage navbar visibility
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false); // Hide on scroll down
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true); // Show on scroll up
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Animate with GSAP
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 bg-[#111111] rounded-lg my-4 mx-4 z-50 h-16 transition-all duration-700"
    >
      <header className="w-full">
        <nav className="flex items-center justify-between px-4 h-16">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 sm:w-34" />
          </Link>

          <div
            className={`absolute top-16 left-0 w-full bg-[#111111] flex flex-col items-center md:static md:flex-row md:bg-transparent md:w-auto md:flex rounded-lg ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-4 md:flex-row md:gap-8 py-4 items-center ">
              <NavLink
                to="/"
                className="text-sky-50 text-lg lg:text-[1.5vw] items-center nav-hover-btn"
              >
                HOME
              </NavLink>
              <NavLink
                to="/collection"
                className="text-sky-50 text-lg lg:text-[1.5vw] items-center nav-hover-btn"
              >
                COLLECTION
              </NavLink>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative text-sky-50">
              <IoBagOutline size={24} />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 rounded-full text-xs">
                {getCartCount()}
              </p>
            </Link>

            <div className="group relative text-sky-50">
              <SignedOut>
                <SignInButton mode="modal" redirectUrl="/" />
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <RiCloseLine
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ) : (
                <RiMenu3Line
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
