import React, { useState } from "react";
import { Link } from "react-router-dom";
import virtuolearn from "../assets/logo1.png"
import logo from "../assets/start.png"
import { Menu, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

function Navbar({handleSignOut, isAuth}) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b  border-neutral-700/80">
        <div className=" container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <ul className="hidden lg:flex text-serifs font-semibold text-[18px] p-10 space-x-12 text-left">
              <Link to="/">
                <li className="hover:text-orange-600  mb-2">Home</li>
              </Link>

              <Link to="/about">
                <li className="hover:text-orange-600 mb-2">About</li>
              </Link>

          

            </ul>
            <div className="flex items-center mr-28">
              <Link to="/">
            
                <img src={logo} className="w-48" alt="" />
                
              </Link>
            </div>
            <div className="hidden lg:flex justify-center space-x-12 items-center">


              {
                !isAuth ? (
                  <>
                    <Link to="/login">
                      <button className="py-2 px-3 border rounded-md">Sign In</button>
                    </Link>
                    <Link to="/signup">
                      <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-3 rounded-md">
                        Create an account
                      </button>
                    </Link>
                  </>

                ) : (
                  <>
                    <ul className="hidden lg:flex text-serifs font-semibold text-[18px] p-10 space-x-12 text-left">
                      <Link to="/explore">
                        <li className="hover:text-orange-600 mb-2">Explore</li>
                      </Link>
                    </ul>

                    <button onClick={handleSignOut} className="py-2 px-3 border rounded-md">Sign Out</button>
                  </>
                )
              }


            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                <Link to="/">
                  <li className="hover:text-orange-600 mb-2">Home</li>
                </Link>

                <Link to="/about">
                  <li className="hover:text-orange-600 mb-2">About</li>
                </Link>

                

                <Link to="/explore">
                  <li className="hover:text-orange-600 mb-2">Explore</li>
                </Link>
                <Link to="/login">
                  <li className="hover:text-orange-600 mb-2">Login</li>
                </Link>
                <Link to="/signup">
                  <li className="hover:text-orange-600 mb-2h">Signup</li>
                </Link>
              </ul>
              <div className="flex space-x-6">
               
                <Link to="/login">
                  <button className="py-2 px-3 text-[10px] border rounded-md">Sign In</button>
                </Link>

                <Link to="/signup">
                  <button className="py-2 px-3 text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900">
                    Create an account
                  </button>
                </Link>

               
               
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
