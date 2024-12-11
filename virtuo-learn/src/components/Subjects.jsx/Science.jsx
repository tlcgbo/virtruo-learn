import React from "react";
import { AiOutlineRead, AiOutlineCode, AiOutlineGlobal, AiOutlineExperiment } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Science() {
  return (
    <div className="min-h-screentext-serifs">

      <div className="text-center py-10">
      <AiOutlineExperiment className="text-blue-600 text-4xl mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Science
        </h1> 
      </div>
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-lg bg-blue-950 p-4">
          <h2 className="text-lg font-medium text-white">
            Choose a unit (3)
          </h2>
          <ul className="mt-4 text-white">
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Biology</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  5 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Chemistry</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  9 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Phsyics</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  3 lessons
                </span>
              </li>
          </ul>

          <div className="w-full flex items-center justify-center">
          <p className="text-xs md:text-sm font-normal text-white">
            You done?{" "}
            <Link
              to="/scienceQuiz"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Click here
            </Link>
          </p>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Science;
