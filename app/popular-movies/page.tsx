"use client";
import React from "react";
import MovieCard from "../components/reusable-components/MovieCard";
import { useMovieLists } from "../react-query/movie/useMovieLists";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

export default function Page() {
  const { error, isLoadingMovieLists, movieLists } = useMovieLists();

  if (isLoadingMovieLists) return <CircularProgress size={100} color="info" />;
  if (error) toast.error("لطفا اتصال اینترنتی خود را چک کنید.")
  console.log(error);

  return (
    <div className="py-9 px-3 ">
      <p className="text-white text-xl pb-5">پرطرفدار</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center   gap-y-5 gap-x-3 ">
        {movieLists?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
