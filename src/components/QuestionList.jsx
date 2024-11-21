import React from "react";
import img from "../assets/img.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const QuestionList = ({
  question,
  options,
  handleNextQuestion,
  handleOptions,
  currentAnswer,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 py-8">
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto border bg-white rounded-lg shadow-md p-6 sm:p-10">
        {/* Question and Options Section */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <h1 className="text-xl sm:text-3xl font-bold leading-snug h-auto text-black">
            {question}
          </h1>
          <div className="py-6">
            <ul className="space-y-4">
              {options.map((option, i) => (
                <li
                  key={i}
                  onClick={() => handleOptions(option)}
                  className={`list-none cursor-pointer ${
                    currentAnswer === option ? "bg-blue-500" : "bg-gray-300"
                  } text-white w-full px-6 py-3 text-base sm:text-lg rounded-md transition-all duration-300`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          {/* Next Question Button */}
          <button
            onClick={handleNextQuestion}
            disabled={!currentAnswer}
            className={`${
              currentAnswer
                ? "bg-blue-400 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            } inline-flex items-center justify-center text-white font-semibold gap-2 px-4 sm:px-6 py-3 rounded-md`}
          >
            <span className="uppercase text-sm sm:text-base">
              Next Question
            </span>
            <AiOutlineArrowRight />
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-[50%] md:flex hidden items-center justify-center">
          <img
            src={img}
            alt="Illustration related to the question"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
