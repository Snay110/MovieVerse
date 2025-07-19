import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Movie } from "@/entities/movieSlice";
const apiKey = import.meta.env.VITE_API_KEY;
export const searchMoviesByQuery = createAsyncThunk<
  Movie[],
  string,
  { rejectValue: string }
>("movies/searchByQuery", async (query: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  return response.data.results;
});
