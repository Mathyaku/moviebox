import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType, TvShowType } from "../../common/types";

export type Movie =
    | Omit<
          MovieType,
          | "overview"
          | "vote_average"
          | "release_date"
          | "runtime"
          | "genres"
          | "popularity"
      >
    | Omit<
          TvShowType,
          | "overview"
          | "vote_average"
          | "release_date"
          | "runtime"
          | "genres"
          | "popularity"
      >;

interface FavoriteState {
    movies: Movie[];
}

const initialState: FavoriteState = {
    movies: [],
};

const addFavoriteMovie = (
    state: FavoriteState,
    action: PayloadAction<Movie>
) => {
    const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
    );
    if (!existingMovie) {
        state.movies.push(action.payload);
    }
};

const removeFavoriteMovie = (
    state: FavoriteState,
    action: PayloadAction<number>
) => {
    const newFavoriteMovieList = state.movies.filter(
        (movie) => movie.id !== action.payload
    );
    state.movies = newFavoriteMovieList;
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavoriteMovie,
        removeFavoriteMovie,
    },
});

export const {
    addFavoriteMovie: addFavorite,
    removeFavoriteMovie: removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
