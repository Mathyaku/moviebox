import { useQuery } from "react-query";

import api from "../services/api";

import { MovieType } from "../common/types";
import { fetchPopularTvShows } from "./useTvShowFetch";

type PaginatedFetch = (page: number) => Promise<MovieType[]>;

export const fetchPaginated: PaginatedFetch = async (page = 1) => {
    const { data } = await api.get(
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};

const usePaginatedFetch = (page: number) =>
    useQuery(
        ["movies", page],
        async () => {
            const [movies, tvShows] = await Promise.all([
                fetchPaginated(page),
                fetchPopularTvShows(page),
            ]);

            return [...movies, ...tvShows].sort(
                (a, b) => b.popularity - a.popularity
            );
        },
        {
            keepPreviousData: true,
        }
    );

export default usePaginatedFetch;
