import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;
export  const fetchPopularMovies = createAsyncThunk<Movie[],string>(
  "movies/fetchAsync",
  async (query:string) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query=${query}`);
    return response.data.results;
  }
);

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MovieState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchPopularMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.movies = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "And then something went wrong";
      });
  },
});

export default moviesSlice.reducer;
