import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./createAsyncThunk/movies.api";
import { searchMoviesByQuery } from "./createAsyncThunk/movies.api2";
import { fetchMovieById } from "./createAsyncThunk/movieDetail";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
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
  selectedMovie: Movie | null;
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: null,
  selectedMovie: null,
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
        state.error = action.error.message ?? "And then something went wrong";
      })
      .addCase(searchMoviesByQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        searchMoviesByQuery.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.movies = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(searchMoviesByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "And then something went wrong";
      })
      .addCase(
        fetchMovieById.fulfilled,
        (state, action: PayloadAction<Movie>) => {
          state.selectedMovie = action.payload;
        }
      );
  },
});

export default moviesSlice.reducer;
