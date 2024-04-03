"use client";
import React from "react";
import MovieCard from "../components/reusable-components/MovieCard";
import { useMovieLists } from "../react-query/movie/useMovieLists";

export default function Page() {
  const { error, isLoadingMovieLists, movieLists } = useMovieLists();

  if (isLoadingMovieLists) return null;

  console.log(movieLists);

  return (
    <div className="py-9 px-3 ">
      <p className="text-white text-xl pb-5">پرطرفدار</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center   gap-y-5 gap-x-3 ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
