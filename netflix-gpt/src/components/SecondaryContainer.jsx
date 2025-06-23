import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  if (!movies) return null;

  return (
    <div className="bg-black mt-[-4rem] relative z-10 pb-10">
      {movies.nowPlayingMovies?.results?.length > 0 && (
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      )}

      {movies.popularMovies?.results?.length > 0 && (
        <MovieList title="Popular" movies={movies.popularMovies} />
      )}

      {movies.topRatedMovies?.results?.length > 0 && (
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      )}

      {movies.upcomingMovies?.results?.length > 0 && (
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
