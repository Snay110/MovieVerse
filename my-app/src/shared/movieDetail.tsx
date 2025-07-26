import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Movie } from "@/entities/movieSlice";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovieById = createAsyncThunk<Movie, string>(
  "movies/fetchMovieById",
  async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    );
    return response.data;
  },
);
