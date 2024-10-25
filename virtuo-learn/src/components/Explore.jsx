import React from "react";
import { Link } from "react-router-dom";
import { PiMathOperationsFill } from "react-icons/pi";
import math from "../assets/math.jpg"

function Explore() {


  return (
    <>
      <div className="mt-10 lg:mt-20">
        <div className="text-center">
          <h2 className="text-4xl font-serif sm:text-5xl lg:text-6xl tracking-wide">
            Explore <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Subjects</span>
          </h2>
         
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-20">
     
            <div  className="flex flex-col bg-black p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-black font-bold mb-4 text-white">Math</h3>
              <p className="text-lg bg-black text-neutral-300 mb-6">Number Sense & Operations
Fractions, Decimals, and Percents
Geometry
Measurement
Algebra Basics</p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-black p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-black font-bold mb-4 text-white">English</h3>
              <p className="text-lg bg-black text-neutral-300 mb-6">Reading Comprehension
Literature
Grammar and Usage
Writing Skills
Vocabulary Development
Spelling and Punctuation
Listening and Speaking</p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-black p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-black font-bold mb-4 text-white">Science</h3>
              <p className="text-lg bg-black text-neutral-300 mb-6">Scientific Method & Inquiry
Earth Science
Biology
Chemistry
Physics
Astronomy
Ecology & Environmental Science</p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-black p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-black font-bold mb-4 text-white">Computer Science</h3>
              <p className="text-lg bg-black text-neutral-300 mb-6">Introduction to Computer Science
Programming Fundamentals
Data Structures and Algorithms
Computer Architecture
Operating Systems
Databases
Web Development</p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-black p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-black font-bold mb-4 text-white">Languages</h3>
              <p className="text-lg bg-black text-neutral-300 mb-6">Introduction to Language and Culture
Listening and Comprehension
Speaking and Pronunciation
Reading and Vocabulary Development
Grammar and Syntax
Writing and Composition
Conversational Practice</p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            

        </div>
      </div>
    </>
  );
}

export default Explore;
