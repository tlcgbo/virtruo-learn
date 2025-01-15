import React, { useState } from "react";
import { db, auth } from "../../firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function ScienceQuiz () {
    const questions = [
        {
          question: "How many groups are in the periodic table",
          options: ["18", "7", "30", "4"],
          correctAnswer: "18",
        },
        {
          question: "What is mitosis",
          options: ["A) process in which the world is becoming more interconnected",
            "B) movement of water molecules",
            "C) a type of cell division that results in two daughter cells", 
            "D) one type of element."],
          correctAnswer: "C) a type of cell division that results in two daughter cells",
        },
        {
          question: "What does DNA stand for",
          options: ["A) Denoxyide Alkaline", "B) Detricidic Acid", "C) Deoxyribonucleic Acid", "D) Delamyrionic Abase"],
          correctAnswer: "C) Deoxyribonucleic Acid",
        },
        {
          question: "What is the main gas that makes up the Earth's atmosphere?",
          options: ["A) Nitrogen", "B) Carbon Dioxide", "C) Hydrogen", "D) Oxygen"],
          correctAnswer: "A) Nitrogen",
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [score, setScore] = useState(0);
      const [quizComplete, setQuizComplete] = useState(false);
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    
      const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
        }
    
        setSelectedOption(null);
    
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setQuizComplete(true);
          registerResults();
        }
      };
    
      const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizComplete(false);
        setSelectedOption(null);
      };
    
      const registerResults = async () => {
          const user = auth.currentUser;
      
          if (user) {
            const mathCollectionRef = collection(db, "science");
            try {
              await addDoc(mathCollectionRef, {
                score,
                author: { name: user.displayName, id: user.uid },
                Timestamp: new Date(),
              });
              console.log("Results saved successfully");
            } catch (error) {
              console.error("Error saving results: ", error);
            }
          } else {
            console.error("No user signed in to save results");
          }
        };
      
    return(
        <>
              <div className="min-h-screen text-serifs text-gray-100 bg-gradient-to-b p-5">
      <div className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Science Quiz
        </h1>
        <p className="text-xl  font-bold bg-gradient-to-r text-white text-transparent bg-clip-text">
            Please pick the correct answer.
        </p>

        {!quizComplete ? (
          <div className="mt-10">
            <h2 className="text-2xl mb-6">{questions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`block w-full p-3 rounded-md text-left ${
                    selectedOption === option
                      ? "bg-blue-700 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-blue-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="mt-6 p-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-3xl font-bold">Quiz Complete!</h2>
            <p className="mt-4 text-xl">
              You scored {score} out of {questions.length}.
            </p>
            <button
              onClick={restartQuiz}
              className="mt-6 p-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md px-6 py-3"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
        </>
    )

}

export default ScienceQuiz;
  
