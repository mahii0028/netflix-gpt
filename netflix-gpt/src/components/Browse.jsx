import React from "react";
import Header from "./Header";
import { URL, API_OPTIONS } from "../util/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/slices/moviesSlice";
import useFetchTmdbData from "../util/useFetchTmdbData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchTmdbData(URL.nowPlayingMovies, addNowPlayingMovies, API_OPTIONS);
  useFetchTmdbData(URL.popularMovies, addPopularMovies, API_OPTIONS);
  useFetchTmdbData(URL.topRatedMovies, addTopRatedMovies, API_OPTIONS);
  useFetchTmdbData(URL.upComingMovies, addUpcomingMovies, API_OPTIONS);

  return (
    <div className="bg-black text-white">
      <Header />
      <MainContainer />
      <div className="relative z-10 -mt-32 md:-mt-48">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
