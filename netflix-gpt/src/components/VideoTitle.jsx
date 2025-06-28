import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute top-0 left-0 flex items-center text-white bg-gradient-to-r from-black to-transparent px-4 md:px-10 z-20">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="hidden md:block text-sm md:text-lg text-gray-200 mb-5">
          {overview}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center bg-white text-black font-semibold px-4 py-2 rounded hover:bg-opacity-80 transition text-sm md:text-base">
            <FaPlay className="mr-2" /> Play
          </button>
          <button className="flex items-center bg-gray-700 bg-opacity-60 text-white px-4 py-2 rounded hover:bg-opacity-80 transition text-sm md:text-base">
            <AiOutlineInfoCircle className="mr-2 text-lg" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
