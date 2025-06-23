import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.results?.length) return null;

  return (
    <div className="px-6 mb-8">
      <h2 className="text-lg md:text-2xl font-bold text-white mb-3">{title}</h2>

      <div className="flex overflow-x-scroll overflow-y-hidden space-x-4 custom-scrollbar pb-2">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
