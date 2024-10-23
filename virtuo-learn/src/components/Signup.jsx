import React from "react";
import picture from "../assets/picture.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-start">
        
        <div className="relative w-full md:w-1/2 h-64 md:h-full flex flex-col">
          <img src={picture} className="w-full h-full object-cover" alt="" />
        </div>

        <motion.div
          className="w-full md:w-1/2 h-auto flex flex-col p-8 md:p-28 justify-between"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-xl md:text-4xl  font-semibold mb-2">Signup</h3>
              <p className="text-sm md:text-base mb-2">Welcome to our online family! Enter your credentials</p>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-white py-2 md:py-4 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-white py-2 md:py-4 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-900 rounded-md py-3 md:py-4 text-center flex items-center justify-center">
              Signup
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-xs md:text-sm font-normal text-white">
              Have an account?<Link to="/login" className="font-semibold underline underline-offset-2 cursor-pointer"> Click here</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Signup;
