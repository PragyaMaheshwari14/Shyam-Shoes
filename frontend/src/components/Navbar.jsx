import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ShopContext } from "../context/ShopContext";
import { RiUser3Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Destructuring ShopContext values for global state management
  const { getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  // Logout function clears the user's session
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  // Reference for the navigation container
  const navContainerRef = useRef(null);

  // Hook to get the current scroll position
  const { y: currentScrollY } = useWindowScroll();


  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Manage navbar visibility
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true); // Always show navbar at the top
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false); // Hide navbar when scrolling down
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Use GSAP for smooth animations
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
          {/* Left Section: Logo */}
            <Link to="/">
              <img src={logo} alt="logo" className="w-24 sm:w-32" />
            </Link>
          

          {/* Center Section: Navigation Links */}
          <div className={`absolute top-16 left-0 w-full bg-[#111111] flex flex-col items-center md:static md:flex-row md:bg-transparent md:w-auto md:flex rounded-lg ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}>
            <ul className="flex flex-col gap-4 md:flex-row md:gap-8 py-4 items-center ">
              <NavLink to="/" className="text-sky-50 text-lg lg:text-[1.5vw] items-center nav-hover-btn">
                HOME
              </NavLink>
              <NavLink to="/collection" className="text-sky-50 text-lg lg:text-[1.5vw] items-center nav-hover-btn">
                COLLECTION
              </NavLink>
            </ul>
          </div>

          {/* Right Section*/}
          <div className="flex items-center gap-4">
            <div className="group relative">
              <div
                onClick={() => (token ? null : navigate("/login"))}
                className="cursor-pointer text-sky-50"
              >
                <RiUser3Line size={24}/>
              </div>
              {token && (
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                    <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                  </div>
                </div>
              )}
            </div>
            {/* Cart Icon with Count */}
            <Link to="/cart" className="relative text-sky-50">
                <IoBagOutline size={24}/>
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 rounded-full text-xs">
                {getCartCount()}
              </p>
            </Link>

            {/* Hamburger Menu */}
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
