import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "@/shared/movies.api";
import { searchMoviesByQuery } from "@/shared/movies.api2";
import { fetchMovieById } from "@/shared/movieDetail";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieVideo } from "@/shared/fetchMovieVideo";

export interface Movie {
  videoUrl: string;
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MovieState {
  videoUrl: string | null;
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  selectedMovie: Movie | null;
}

const initialState: MovieState = {
  videoUrl: "",
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
      )
      .addCase(fetchMovieVideo.fulfilled, (state, action) => {
        state.videoUrl = `https://www.youtube.com/embed/${action.payload}`;
      })
      .addCase(fetchMovieVideo.rejected, (state) => {
        state.videoUrl = null;
      });
  },
});

export default moviesSlice.reducer;
