import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <>
      <nav className="font-link sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-4xl tracking-tight">Virtuo Learn</span>
            </div>
            <ul className="hidden lg:flex text-[20px] ml-14 space-x-12 items-center">
              <li>Home</li>
              <li>About</li>
              <li>Explore</li>
              <li>Login</li>
              <li>Signup</li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <button className="py-2 px-3 border rounded-md">
                    Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-3 rounded-md">
                    Create an account
                </button>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          </div>
          {mobileDrawerOpen && (
          <div className="fixed right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            <li>Home</li>
              <li>About</li>
              <li>Explore</li>
              <li>Login</li>
              <li>Signup</li>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;