import { useInfiniteQuery } from "react-query";
import { fetchPaginated } from "./usePaginatedFetch";
import { fetchPopularTvShows } from "./useTvShowFetch";

const useInfinityFetch = (page: number) =>
    useInfiniteQuery(
        "allShows",
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
            getNextPageParam: () => {
                return page + 1;
            },
            keepPreviousData: false,
        }
    );

export default useInfinityFetch;
