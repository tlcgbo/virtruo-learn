import React, {useEffect, useState} from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase.config";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import { Link } from "react-router-dom";
import About from "./About";
import Explore from "./Explore";


const Home = ({ isAuth }) => {

    const [resultLists, setResultLists] = useState([])

    const resultCollectionRef = collection(db, "math", "science", "computing")

    useEffect(() => {
      const getResults = async () => {
        const data = await getDocs(resultCollectionRef)
        setResultLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      }
      getResults();
    }, [])

    const deleteResults = async (id) => {
      const resultDoc = doc(db, "math", "science", "english", "computing", id)
      await deleteDoc(resultDoc)
    }
  return (
    <>
      <div className="flex  flex-col items-center mt-6 lg:mt-20">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >

          <div className="flex flex-col lg:flex-row items-center p-5">
         
            <div className="p-2 mr-6">
              <img
                src={image1}
                className="rounded-3xl w-64"
                alt="Learning has no boundaries"
              />
            </div>

      
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif text-left tracking-wide">
                "Learning
                <br />
                <span className=" text-blue-700  bg-clip-text">
                  knows no boundaries"
                </span>
              </h1>
              <h2 className="text-right text-2xl mt-4">- Natalie Panek</h2>
            </div>
          </div>

      
          <p className="mt-10 text-[15px] text-center white max-w-4xl px-4 sm:px-10">
            At Virtuo Learn, we believe that learning should be an exciting adventure!<br></br> Dive into our world of engaging courses that fit your schedule, spark your curiosity,<br></br> and help you discover new passions—all from the comfort of your home! Join us and<br></br> turn your dreams into reality, one fun lesson at a time!
          </p>

          <div className="pt-10 flex flex-col sm:flex-row justify-center items-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-10">
            <Link to="/login">
              <button className="py-2 text-[15px] px-3 border rounded-md">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r text-white text-[15px] from-blue-600 to-blue-900 py-2 px-3 rounded-md">
                Create an account
              </button>
            </Link>
          </div>
        </motion.div>

          <About />

          <div className="text-center mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide">
                <span className="font-serif bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  {" "} Testimonials
                </span>
              </h2>

              {/* <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif text-left tracking-wide">
                "Learning
                <br />
                <span className="bg-gradient-to-r underline decoration-wavy decoration-orange-600 from-blue-500 to-blue-800 text-transparent bg-clip-text">
                  knows no boundaries"
                </span>
              </h1>
              <h2 className="text-right text-2xl mt-4">- Natalie Panek</h2> */}

              <div>
                <p className="font-light text-[20px] p-5">“I used to dread math, but Virtuo Learn breaks things down so well. I can go over<br></br> the videos 
                and notes as much as I want without feeling rushed. Now I’m<br></br> actually starting to like math!”</p>
                <p>-Jenny, 16</p>
              </div>

              <div className="">
                <p className="font-light text-[20px] p-5">“Virtuo Learn has been amazing because I can fit it around my schedule.<br></br> I play sports, so sometimes it’s hard to keep up with school, but now I can do lessons<br></br> whenever I have time.”
                </p>
                <p>-Nathan, 14</p>
              </div>

              <div>
                <p className="font-light text-[20px] p-5">“With Virtuo Learn, I can pause, replay, and go back whenever I need to. I used to be afraid of<br></br> asking ‘dumb questions’ in class, but now I can go over stuff until I fully get it.
                   I feel a lot more confident in<br></br> my classes now.”</p>
                <p>-Matt, 17</p>
              </div>

              <div>
                <p className="font-light text-[20px] p-5">“Before, I’d get bored so fast, but Virtuo Learn’s lessons are actually interesting. The videos are cool,
                   and I like that I can<br></br> learn on my phone or laptop. It doesn’t feel like ‘school’ in a good way.”</p>
                <p>-Lily, 15</p>
              </div>
              

              <div className="w-[100%]  min-h-[calc(100vh - 80px)] h-auto flex flex-col items-center py-[120px]">
                {resultLists.map((result) => {
                  return(
                    <div key={result.id} className='w-[65vw] h-[auto] max-h-[600px] shadow-2xl  m-[20px] p-[20px] bg-blue-900 text-white'>

                      <div className="">
                        {isAuth && result.author.id === auth.currentUser.uid && <button onClick={() => {deleteResults(result.id)} }> &#128465; </button>}
                      </div>

                      <div className='h-[60%] max-h-[400px] w-[100%] overflow-hidden overflow-y-auto scroll-smooth'>
                        <h1>Score: {result}</h1>
                        <h3>@result.author?.name</h3>
                      </div>
                    </div>
                  );
                })}
              </div>


          </div>
          
      </div>
    </>
  );
}

export default Home;
