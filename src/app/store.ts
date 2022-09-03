import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import ticketsReducer from "./ticketsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tickets: ticketsReducer,
  },
});
