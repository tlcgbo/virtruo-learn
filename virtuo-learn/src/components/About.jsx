import React from "react";

function About() {
  return (
    <div className="font-link relative mt-20 border-b border-neutral-800 min-h-[800px]">
      
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          Why Virtuo
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            {" "}
            Learn works
          </span>
        </h2>
      </div>

    
      <div className="flex justify-between space-x-4 mt-10 lg:mt-20 ml-10">
       
        <div className="flex-1  p-6 rounded-lg">
          <h5 className="text-2xl mb-4">Flexible Learning Schedule</h5>
          <p className="text-xl text-white">
            Students can learn at their own pace, fitting education around their
            personal schedules, work, or family life. No fixed class times—
            students choose when to study, making it ideal for working
            professionals or those with busy lifestyles.
          </p>
        </div>

      
        <div className="flex-1  p-6 rounded-lg">
          <h5 className="text-2xl mb-4">Access from Anywhere</h5>
          <p className="text-xl text-white">
          No geographical boundaries—students can access courses from anywhere in the world, as long as they have an internet connection.
          Offers global learning experiences without the need to relocate or commute.
          </p>
        </div>

       
        <div className="flex-1  p-6 rounded-lg">
          <h5 className="text-2xl mb-4">Personalized Learning Experience</h5>
          <p className="text-xl text-white">
          Virtuo Learn allows students to choose courses that match their individual goals and interests, instead of following a rigid curriculum.
          Students can revisit materials, repeat lessons, or skip ahead as needed, creating a truly customized learning experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
