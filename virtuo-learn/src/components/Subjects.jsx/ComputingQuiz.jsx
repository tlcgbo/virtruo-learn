import React, { useState } from "react";
import { db, auth } from "../../firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function ComputingQuiz () {
    const questions = [
        {
          question: "What does CPU stand for?",
          options: ["A)Central Processing Unit", "B) Computer Personal Unit", "C) Central Programming Unit", "D) Control Processing Unit"],
          correctAnswer: "A) Central Processing Unit",
        },
        {
          question: "What does HTML stand for?",
          options: ["A) HyperText Markup Language",
            "B) HighText Markup Language",
            "C) Hyperlink Text Management Language", 
            "D) High Transfer Machine Learning"],
          correctAnswer: "A) HyperText Markup Language",
        },
        {
          question: "What is the binary representation of the decimal number 10?",
          options: ["A) 1000", "B) 1010", "C) 1100", "D) 1001"],
          correctAnswer: "B) 1010",
        },
        {
          question: " Which of these is an example of a NoSQL database?",
          options: ["A) MySQL", "B) PostgreSQL", "C) MongoDB", "D) Oracle"],
          correctAnswer: "C) MongoDB",
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
            const mathCollectionRef = collection(db, "math");
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
          Computing Quiz
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

export default ComputingQuiz;
  
