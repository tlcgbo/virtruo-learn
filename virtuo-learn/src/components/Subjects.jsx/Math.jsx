import React from "react";
import { motion } from "framer-motion";

function Math() {
  return (
    <>
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
            <h2 className="text-4xl font-serif sm:text-5xl lg:text-6xl tracking-wide">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Math
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-20 max-w-4xl mx-auto px-4">
            <div className=" p-8 rounded-lg shadow-lg w-full text-center">
              <h3 className="text-3xl font-semibold mb-4 text-white">Math Overview</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Mathematics is a field of study that discovers and organizes methods, theories, and theorems developed and proved for the needs of empirical sciences and mathematics itself. Its main areas include number theory (the study of numbers), algebra (formulas and structures), geometry (shapes and spaces), analysis (continuous changes), and set theory, which underpins all mathematics.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Math;
