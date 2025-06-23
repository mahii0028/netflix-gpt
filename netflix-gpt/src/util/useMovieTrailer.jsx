import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/slices/moviesSlice";
import { API_OPTIONS } from "./constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const mainVideo = data?.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = mainVideo.length ? mainVideo[0] : data.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
