import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      <div className="flex font-link flex-col items-center mt-6 lg:mt-20">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
        
          <div className="flex flex-col lg:flex-row items-center p-10">
     
            <div className="w-64 p-2 mr-6">
              <img src={image1} className="rounded-3xl w-full" alt="Learning has no boundaries" />
            </div>

            <div>
              <h1 className="text-4xl  sm:text-6xl lg:text-6xl text-left lg:text-left tracking-wide">
                "Learning
                <br />
                <span className="bg-gradient-to-r underline hover:decoration-blue-800 from-blue-500 to-blue-800 text-transparent bg-clip-text">
                  knows no boundaries"
                </span>
              </h1>
              <h2 className="text-right text-2xl mt-4">- Natalie Panek</h2>
            </div>
          </div>

          <p className="mt-10 text-xl text-center white max-w-4xl">
          At Virtuo Learn, we believe that learning should be an exciting adventure!
           Dive into our world of engaging courses that fit your schedule, spark your curiosity,
            and help you discover new passions—all from the comfort of your home! Join us and
             turn your dreams into reality, one fun lesson at a time!
          </p>

          <div className="pt-10 text-right">
            <Link className="" to="/login">
              <button className="py-2 text-2xl px-3 border rounded-md">Sign In</button>
            </Link>
            <Link className="p-10" to="/signup">
              <button className="bg-gradient-to-r text-2xl from-blue-600 to-blue-900 py-2 px-3 rounded-md">
                Create an account
              </button>
            </Link>
          </div>
          

        </motion.div>

      
       
      </div>
    </>
  );
}

export default Home;
