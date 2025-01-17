import React, { useEffect, useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";

const English = ({ isAuth }) => {
  const [englishLists, setEnglishList] = useState([]);
  const englishCollectionRef = collection(db, "english");

  useEffect(() => {
    const getEnglish = async () => {
      try {
        const data = await getDocs(englishCollectionRef);
        setEnglishList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching English data:", error);
      }
    };
    getEnglish();
  }, []);

  const deleteEnglish = async (id) => {
    try {
      const englishDoc = doc(db, "english", id);
      await deleteDoc(englishDoc);
      setEnglishList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting English document:", error);
    }
  };

  return (
    <div className="min-h-screen text-serifs">
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
          <h2 className="text-lg font-medium text-white">Choose a unit (5)</h2>
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
          <div className="w-full flex items-center justify-center">
            <p className="text-xs md:text-sm font-normal text-white">
              You done?{" "}
              <Link
                to="/englishQuiz"
                className="font-semibold underline underline-offset-2 cursor-pointer"
              >
                Click here
              </Link>
            </p>
          </div>

          <div className="w-full min-h-[calc(100vh - 80px)] h-auto flex flex-col items-center py-[12px]">
            {englishLists.length === 0 ? (
              <p className="text-white">No results available.</p>
            ) : (
              englishLists.map((english) => (
                <div
                  key={english.id}
                  className="w-[65vw] h-auto max-h-[600px] shadow-2xl m-[20px] p-[20px] bg-blue-900 text-white"
                >
                  <div>
                    {isAuth &&
                      english.author?.id === auth.currentUser?.uid && (
                        <button
                          onClick={() => deleteEnglish(english.id)}
                        >
                          🗑️
                        </button>
                      )}
                  </div>
                  <div className="h-[60%] max-h-[400px] w-[100%] overflow-hidden overflow-y-auto scroll-smooth">
                    <h1>Results: {english.score || "No score available"}</h1>
                    <h3>@{english.author?.name || "Unknown"}</h3>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default English;
