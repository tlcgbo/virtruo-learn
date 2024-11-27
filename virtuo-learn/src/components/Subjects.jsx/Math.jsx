import React from "react";
import { motion } from "framer-motion";

function Math() {
  return (
    <>
      <div className="text-serifs relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="mt-10 lg:mt-20">
           
            <div className="text-center">
              <h2 className="text-4xl font-serif sm:text-5xl lg:text-6xl tracking-wide  bg-gradient-to-r from-blue-600 to-blue-800">
                Math
              </h2>
            </div>

            <div className="p-6 rounded-lg w-80 mx-auto mt-10 text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200 bg-black">
              <p className="text-center text-lg text-neutral-300">
                Number Sense & Operations, Fractions, Decimals, and Percents,
                Geometry, Measurement, Algebra Basics
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Math;
