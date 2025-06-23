import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../util/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="absolute top-0 left-0 w-full aspect-video -z-10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&enablejsapi=1`}
        title="Netflix Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
