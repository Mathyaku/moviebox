import { useHistory } from "react-router-dom";

import { useAppSelector } from "../../hooks/useStore";

import { MovieBoxLogo } from "../../assets";
import { FiArrowLeft } from "react-icons/fi";

import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

export default function Favorites() {
    const { movies } = useAppSelector((state) => state.favorites);

    const history = useHistory();

    return (
        <>
            <S.Header>
                <FiArrowLeft size={24} onClick={() => history.goBack()} />
                <MovieBoxLogo />
            </S.Header>

            <S.PageTitle>Favorites</S.PageTitle>

            <S.Main>
                <S.MovieList>
                    {movies.map((data) => {
                        return (
                            <li key={data.id}>
                                <MovieCard
                                    id={data.id}
                                    original_title={
                                        "original_title" in data
                                            ? data.original_title
                                            : ""
                                    }
                                    original_name={
                                        "original_name" in data
                                            ? data.original_name
                                            : ""
                                    }
                                    poster_path={data.poster_path}
                                />
                            </li>
                        );
                    })}
                </S.MovieList>
            </S.Main>
        </>
    );
}
