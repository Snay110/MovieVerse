import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsync = createAsyncThunk<Movie[]>(
  "movies/fetchAsync",
  async () => {
    const response = await axios.get("https://api.example.com/movies");
    return response.data.results;
  }
);

interface Movie {
  id: string;
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

е;
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
      .addCase(fetchAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchAsync.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.movies = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || " A дальше что-то пошло не так";
      });
  },
});

export default moviesSlice.reducer;
