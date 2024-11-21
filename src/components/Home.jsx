import React from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold text-center px-4">
        It's Quiz Time
      </h1>
      
      {/* Button */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-20 px-4">
        <Link to="/quiz">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg text-sm sm:text-lg md:text-xl hover:bg-blue-700 transition">
            Let's Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
