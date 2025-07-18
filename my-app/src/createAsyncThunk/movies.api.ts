import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Movie } from "@/movieSlice";
const apiKey = import.meta.env.VITE_API_KEY;
export const fetchPopularMovies = createAsyncThunk<Movie[], string>(
  "movies/fetchPopularMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  }
);
