import React from "react";
import { motion } from "framer-motion";
import brush from "../assets/brush.png"
import calender from "../assets/calender.png"
import gear from "../assets/gear.png"

function About() {
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
          <div className="text-center ">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
              <span className="text-serifs font-bold">Why Virtuo</span>
              <span className="  font-serif  bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                {" "}
                Learn works
              </span>
            </h2>
          </div>

          
          <div className=" flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-4 mt-10 lg:mt-20 ml-10 mr-10 ">
        
            <div className="flex-1 p-6 rounded-lg ">

            <img src={calender} className="w-[200px]" alt="" />
              <h5 className="text-2xl mb-4">Flexible Learning Schedule</h5>

              
              <p className="text-[15px] ">
                Students can learn at their own pace, fitting education around
                their personal schedules, work, or family life. No fixed class
                times—students choose when to study, making it ideal for working
                professionals or those with busy lifestyles.
              </p>
            </div>

           
            <div className="flex-1 p-6 rounded-lg">
            <img src={brush} className="w-[140px]" alt="" />
              <h5 className="text-2xl mb-4">Access from Anywhere</h5>
              <p className="text-[15px] ">
                No geographical boundaries—students can access courses from
                anywhere in the world, as long as they have an internet
                connection. Offers global learning experiences without the need
                to relocate or commute.
              </p>
            </div>

           
            <div className="flex-1 p-6 rounded-lg ">
            <img src={gear} className="w-[140px]" alt="" />
              <h5 className="text-2xl mb-4">Personalized Learning Experience</h5>
              <p className="text-[15px] ">
                Virtuo Learn allows students to choose courses that match their
                individual goals and interests, instead of following a rigid
                curriculum. Students can revisit materials, repeat lessons, or
                skip ahead as needed, creating a truly customized learning
                experience.
              </p>
            </div>
          </div>

          <div className="text-center ">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
            <span className="text-serifs font-bold">School</span>
              <span className="  font-serif  bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                {" "}
                Vision
              </span>

              <div className="flex-1 p-6 rounded-lg ">
              <p className="text-xl p-10 font-light">
              <span className="text-blue-500 text-2xl font-serif">"</span>To empower learners worldwide by providing flexible, engaging, and high-quality education<br></br> accessible to everyone, anywhere. We envision a future where education transcends boundaries,<br></br> inspiring students to become critical thinkers, lifelong learners, and responsible global citizens. At Virtuo Learn,<br></br> we strive to foster curiosity, encourage innovation, and build a supportive online community that champions growth,<br></br> resilience, and the pursuit of knowledge.<span className="text-blue-500 text-xl font-serif">"</span>
              </p>
              </div>
              
            </h2>

            <div className="text-center mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            <span className="text-serifs font-bold">Core</span>
              <span className="font-serif bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                {" "} Values
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-10 mt-10 px-6 lg:px-20">
        
              <div className="w-64 p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
 
                <h5 className="text-xl font-semibold text-white mb-2">Excellence</h5>
                <p className="text-neutral-300">We commit to delivering top-quality education that fosters growth and development.</p>
              </div>


              <div className="w-64 p-6 text-center  rounded-lg shadow-md hover:shadow-lg transition-shadow">
        
                <h5 className="text-xl font-semibold text-white mb-2">Innovation</h5>
                <p className="text-neutral-300">We embrace creative solutions to make learning engaging and effective.</p>
              </div>

              <div className="w-64 p-6 text-center  rounded-lg shadow-md hover:shadow-lg transition-shadow">
   
                <h5 className="text-xl font-semibold text-white mb-2">Integrity</h5>
                <p className="text-neutral-300">We prioritize honesty, respect, and responsibility in all our actions.</p>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
