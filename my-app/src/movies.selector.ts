import type { RootState } from "./store";

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectIsLoading = (state: RootState) => state.movies.isLoading;
export const selectError = (state: RootState) => state.movies.error;
