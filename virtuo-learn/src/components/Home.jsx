import React from "react"

function Home() {
 

  return (
    <>
       <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
        Welcome to Virtuo Learn
        <br></br>
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for students
        </span>
      </h1>
      </div>
    </>
  )
}

export default Home