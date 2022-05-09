import { useQuery } from "react-query";

import { MovieType } from "../common/types";

import api from "../services/api";

type FetchMovieById = (movieId: string) => Promise<MovieType>;

const fetchMovie: FetchMovieById = async (movieId: string) => {
  const response = await api.get(
    `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return response.data;
};

const useFetchMovieById = (movieId: string) =>
  useQuery(["movies", movieId], () => fetchMovie(movieId));

export default useFetchMovieById;
