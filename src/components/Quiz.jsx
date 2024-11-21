import React, { useState } from "react";
import QuestionList from "./QuestionList";
import questions from "../data.json";
import Countdown from "./Countdown";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  const handleOptions = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 100);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8">
      {/* Back Button */}
      <Link to={"/"} className="py-4 flex items-center">
        <AiOutlineArrowLeft size={24} className="cursor-pointer text-white" />
      </Link>

      {/* Quiz Content */}
      {currentQuestionIndex < questions.length - 1 && timeLeft > 0 ? (
        <>
          {/* Header */}
          <div className="py-6 max-w-4xl mx-auto w-full flex items-center justify-between text-center sm:text-left">
            <h1 className="font-semibold text-lg sm:text-xl">
              Question {currentQuestionIndex + 1} / {questions.length}
            </h1>
            <Countdown timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </div>

          {/* Question and Options */}
          <div className="max-w-4xl mx-auto w-full">
            <QuestionList
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              currentAnswer={currentAnswer}
              handleOptions={handleOptions}
              handleNextQuestion={handleNextQuestion}
              currentQuestionIndex={currentQuestionIndex}
            />
          </div>
        </>
      ) : (
        // Quiz Completion Screen
        <div className="flex items-center flex-col justify-center py-10 gap-8 h-screen text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">Quiz Complete!</h1>
          <h2 className="text-xl sm:text-3xl font-semibold">
            Your final score is: {score}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
