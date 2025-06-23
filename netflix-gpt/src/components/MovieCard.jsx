import React from "react";
import { URL } from "../util/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-[160px] min-w-[150px] md:min-w-[180px] transition-transform transform hover:scale-105">
      <img
        src={`${URL.imageURL}${poster_path}`}
        alt="Movie Poster"
        className="w-full h-auto rounded-md shadow-md"
      />
    </div>
  );
};

export default MovieCard;
