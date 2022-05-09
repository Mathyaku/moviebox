import { useHistory, useLocation } from "react-router-dom";
import useFetchMovieById from "../../hooks/useFetchMovieById";

import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

import { MovieBoxLogo } from "../../assets";

import * as S from "./styles";

export default function Movie() {
  const history = useHistory();

  const href = useLocation();
  const movieId = href.pathname.split("/")[2];

  const { data: movie, isLoading } = useFetchMovieById(movieId);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <>
      <S.Header>
        <FiArrowLeft size={24} onClick={() => history.goBack()} />
        <MovieBoxLogo />
      </S.Header>

      <S.Main>
        <S.BackdropPoster
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.original_title}
        />

        <S.Details>
          <S.MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.original_title}
          />

          <div>
            <h4>{movie?.original_title}</h4>
            <p>{movie?.overview}</p>

            <S.Rate>
              <AiFillStar size={24} />
              <span>{movie?.vote_average}</span>
            </S.Rate>

            <S.TechnicalDetails>
              <span>
                Type
                <strong>Movie</strong>
              </span>
              <span>
                Release Date
                <strong>{movie?.release_date}</strong>
              </span>
              <span>
                Run Time
                <strong>{movie?.runtime} mins</strong>
              </span>
              <span>
                Genres
                <strong>
                  {movie?.genres.map(({ name }) => name).join(", ")}
                </strong>
              </span>
            </S.TechnicalDetails>
          </div>
        </S.Details>
      </S.Main>
    </>
  );
}
