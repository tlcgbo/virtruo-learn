import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      <div className="flex  flex-col items-center mt-6 lg:mt-20">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >

          <div className="flex flex-col lg:flex-row items-center p-5">
         
            <div className="p-2 mr-6">
              <img
                src={image1}
                className="rounded-3xl w-64"
                alt="Learning has no boundaries"
              />
            </div>

      
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif text-left tracking-wide">
                "Learning
                <br />
                <span className="bg-gradient-to-r underline decoration-wavy decoration-orange-600 from-blue-500 to-blue-800 text-transparent bg-clip-text">
                  knows no boundaries"
                </span>
              </h1>
              <h2 className="text-right text-2xl mt-4">- Natalie Panek</h2>
            </div>
          </div>

      
          <p className="mt-10 text-[15px] text-center white max-w-4xl px-4 sm:px-10">
            At Virtuo Learn, we believe that learning should be an exciting adventure!<br></br> Dive into our world of engaging courses that fit your schedule, spark your curiosity,<br></br> and help you discover new passions—all from the comfort of your home! Join us and<br></br> turn your dreams into reality, one fun lesson at a time!
          </p>

          <div className="pt-10 flex flex-col sm:flex-row justify-center items-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-10">
            <Link to="/login">
              <button className="py-2 text-[15px] px-3 border rounded-md">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r text-white text-[15px] from-blue-600 to-blue-900 py-2 px-3 rounded-md">
                Create an account
              </button>
            </Link>
          </div>
        </motion.div>

          <About />
    
      </div>
    </>
  );
}

export default Home;
