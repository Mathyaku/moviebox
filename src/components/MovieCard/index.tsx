import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

import { MovieType, TvShowType } from "../../common/types";

import {
    addFavorite,
    removeFavorite,
} from "../../store/reducers/favoriteSlice";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";

export type MovieCardData =
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

const isMovie = (movieData: MovieCardData): boolean =>
    Boolean("original_title" in movieData && movieData.original_title);

const isShow = (movieData: MovieCardData): boolean =>
    Boolean("original_name" in movieData && movieData.original_name);

const getMovieType = (movieData: MovieCardData): string => {
    if (isMovie(movieData)) {
        return "Movie";
    } else if (isShow(movieData)) {
        return "Tv Show";
    }

    return "";
};

export default function MovieCard(movieData: MovieCardData) {
    const { movies } = useAppSelector((state) => state.favorites);

    const [name, setName] = useState("");

    useEffect(() => {
        if ("original_title" in movieData && movieData.original_title) {
            setName(movieData.original_title);
        }

        if ("original_name" in movieData && movieData.original_name) {
            setName(movieData.original_name);
        }
    }, [movieData]);

    const dispatch = useAppDispatch();

    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const isFavoriteMovie = movies.find(
            (movie) => movie.id === movieData.id
        );
        return !!isFavoriteMovie;
    });

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movieData.id));
            setIsFavorite((prevState) => !prevState);
        } else {
            dispatch(addFavorite(movieData));
            setIsFavorite((prevState) => !prevState);
        }
    };

    return (
        <S.Container>
            <S.CardHeader>
                <S.Favorite aria-label="toggle favorite">
                    {isFavorite ? (
                        <AiFillStar size={24} onClick={toggleFavorite} />
                    ) : (
                        <AiOutlineStar size={24} onClick={toggleFavorite} />
                    )}
                </S.Favorite>
                <S.CardType>{getMovieType(movieData)}</S.CardType>
            </S.CardHeader>

            <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={name}
            />
            <div>
                <S.Link to={`/movie/${movieData.id}`}>{name}</S.Link>
            </div>
        </S.Container>
    );
}
