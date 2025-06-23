import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute top-0 left-0 flex items-center text-white bg-gradient-to-r from-black px-6 md:px-10">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="hidden md:block text-sm md:text-base max-w-xl mb-5 text-gray-200">
          {overview}
        </p>

        <div className="flex space-x-3">
          <button className="flex items-center bg-white text-black font-semibold px-5 py-2 rounded hover:bg-opacity-80 transition">
            <FaPlay className="mr-2" />
            Play
          </button>
          <button className="flex items-center bg-gray-700 bg-opacity-60 text-white px-5 py-2 rounded hover:bg-opacity-80 transition">
            <AiOutlineInfoCircle className="mr-2 text-xl" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
