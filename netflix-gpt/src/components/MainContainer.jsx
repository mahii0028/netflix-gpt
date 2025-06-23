import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies || !movies.results?.length) return null;

  const mainMovie = movies.results[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full aspect-video">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
