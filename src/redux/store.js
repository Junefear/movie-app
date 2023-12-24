import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import darkMode from "./darkMode"

export const store = configureStore({
    reducer: {
      movies: moviesReducer,
      darkMode: darkMode,
    },
  });