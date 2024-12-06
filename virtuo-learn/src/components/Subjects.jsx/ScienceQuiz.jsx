import React from "react";
import { useState } from "react";

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
          correctAnswer: "3",
        },
        {
          question: "What is 7 × 6?",
          options: ["42", "36", "48", "49"],
          correctAnswer: "42",
        },
        {
          question: "What is the square root of 81?",
          options: ["7", "8", "9", "10"],
          correctAnswer: "9",
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
        }
      };
    
      const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizComplete(false);
        setSelectedOption(null);
      };
    
    return(
        <>
              <div className="min-h-screen text-serifs text-gray-100 bg-gradient-to-b p-5">
      <div className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Science Quiz
        </h1>
        <p className="text-xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r text-white text-transparent bg-clip-text">
            Please pick the correct answer.
        </p>

        {!quizComplete ? (
          <div className="mt-8">
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
  
