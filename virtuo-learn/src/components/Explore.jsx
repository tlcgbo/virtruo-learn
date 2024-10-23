import React from "react";
import { Link } from "react-router-dom";
import { PiMathOperationsFill } from "react-icons/pi";

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
     
            <div  className="flex flex-col bg-blue-950 p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-blue-950 font-bold mb-4 text-white">Math</h3>
              <p className="text-lg bg-blue-950 text-neutral-300 mb-6"></p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-blue-950 p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-blue-950 font-bold mb-4 text-white">English</h3>
              <p className="text-lg bg-blue-950 text-neutral-300 mb-6"></p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-blue-950 p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-blue-950 font-bold mb-4 text-white">Science</h3>
              <p className="text-lg bg-blue-950 text-neutral-300 mb-6"></p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-blue-950 p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-blue-950 font-bold mb-4 text-white">Computer Science</h3>
              <p className="text-lg bg-blue-950 text-neutral-300 mb-6"></p>
          
                <button className="bg-gradient-to-r bg-slate-500 from-blue-600 to-blue-900 py-2 px-4 rounded-md text-white">
                  Get Started
                </button>
           
            </div>

            <div  className="flex flex-col bg-blue-950 p-6 rounded-lg w-80 h-auto text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl bg-blue-950 font-bold mb-4 text-white">Languages</h3>
              <p className="text-lg bg-blue-950 text-neutral-300 mb-6"></p>
          
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
