import api from "../services/api";

import { TvShowType } from "../common/types";

type PaginatedFetch = (page: number) => Promise<TvShowType[]>;

export const fetchPopularTvShows: PaginatedFetch = async (page = 1) => {
    const { data } = await api.get(
        `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};
