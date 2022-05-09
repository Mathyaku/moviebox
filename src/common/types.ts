type BaseMovieType = {
    id: number;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: number;
    runtime: number;
    genres: Array<{ id: number; name: string }>;
    popularity: number;
};

export interface MovieType extends BaseMovieType {
    original_title: string;
}

export interface TvShowType extends BaseMovieType {
    original_name: string;
}
