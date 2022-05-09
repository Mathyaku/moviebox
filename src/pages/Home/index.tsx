import { useEffect, useState } from "react";

import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard from "../../components/MovieCard";

import * as S from "./styles";
import useInfinityFetch from "../../hooks/useInfinityFetch";

export default function Home() {
    const fakeArr = Array.from(Array(20).keys());

    const [page, setPage] = useState<number>(1);

    const { data: movies, isLoading, fetchNextPage } = useInfinityFetch(page);

    useEffect(() => {
        fetchNextPage();
    }, [fetchNextPage, page]);

    return (
        <>
            <S.Header>
                <nav>
                    <MovieBoxLogo />
                    <S.Link to="/favorites">Favorites</S.Link>
                </nav>
            </S.Header>

            <S.PageTitle>Movies</S.PageTitle>

            <S.Main>
                <S.MovieList>
                    {isLoading
                        ? fakeArr.map((key) => {
                              return (
                                  <li key={key}>
                                      <Card />
                                  </li>
                              );
                          })
                        : movies?.pages?.map((page) => {
                              return page.map((data) => {
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
                              });
                          })}
                </S.MovieList>
                <S.Navigation>
                    <S.NavigationButton
                        onClick={() => setPage((page) => page + 1)}
                        disabled={false}
                    >
                        Load More
                    </S.NavigationButton>
                </S.Navigation>
            </S.Main>
        </>
    );
}
