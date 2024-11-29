import React from "react";
import { AiOutlineRead, AiOutlineCode, AiOutlineGlobal, AiOutlineExperiment } from "react-icons/ai";

import { motion } from "framer-motion";

function English() {
  return (
    <div className="min-h-screentext-serifs">

      <div className="text-center py-10">
      <AiOutlineRead className="text-blue-600 text-4xl mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          English
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
            Choose a unit (5)
          </h2>
          <ul className="mt-4 text-white">
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Grammar</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  5 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Analysis</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  9 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Creative Writing</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  3 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Literature</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  1 lessons
                </span>
              </li>
              <li
                className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-blue-800 rounded transition"
              ><a href="">Oral</a>
                <span className="text-white font-medium"></span>
                <span className="text-gray-500 text-sm">
                  4 lessons
                </span>
              </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default English;
