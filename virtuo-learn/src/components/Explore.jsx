import React from "react";
import { Link } from "react-router-dom";
import { PiMathOperationsFill } from "react-icons/pi";
import { AiOutlineRead, AiOutlineCode, AiOutlineGlobal, AiOutlineExperiment } from "react-icons/ai";
import { motion } from "framer-motion";

function Explore() {
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
          <span className="text-serifs font-bold">Explore</span> <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Subjects</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-20">
        
          <div className="flex flex-col p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
            <PiMathOperationsFill className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Math</h3>
            <p className="text-lg text-neutral-300 mb-6">
              Number Sense & Operations, Fractions, Decimals, and Percents, Geometry, Measurement, Algebra Basics
            </p>
            <Link to="/math">
              <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                Get Started
              </button>
            </Link>
            
          </div>

          <div className="flex flex-col  p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
            <AiOutlineRead className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">English</h3>
            <p className="text-lg text-neutral-300 mb-6">
              Reading Comprehension, Literature, Grammar and Usage, Writing Skills, Vocabulary, Spelling, Listening and Speaking
            </p>
            <Link to="/english">
            <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
              Get Started
            </button>
            </Link>
            
          </div>

        
          <div className="flex flex-col  p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
            <AiOutlineExperiment className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Science</h3>
            <p className="text-lg text-neutral-300 mb-6">
              Scientific Method, Earth Science, Biology, Chemistry, Physics, Astronomy, Environmental Science
            </p>
            <Link to="/science">
            <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
              Get Started
            </button>
            </Link>
           
          </div>

       
          <div className="flex flex-col  p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
            <AiOutlineCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Computer Science</h3>
            <p className="text-lg text-neutral-300 mb-6">
              Intro to CS, Programming, Data Structures, Computer Architecture, Operating Systems, Databases, Web Development
            </p>
            <Link to="/computing">
            <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
              Get Started
            </button>
            </Link>
            
          </div>

        
          <div className="flex flex-col  p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
            <AiOutlineGlobal className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Languages</h3>
            <p className="text-lg text-neutral-300 mb-6">
              Language & Culture, Listening, Speaking, Reading, Vocabulary, Grammar, Writing, Conversational Practice
            </p>
            <Link to="/languages">
            <button className="bg-gradient-to-r from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
              Get Started
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Explore;
