import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptSearchReducer from "./slices/gptSearchSlice";
import configReducer from "./slices/configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    config: configReducer,
  },
});

export default store;
