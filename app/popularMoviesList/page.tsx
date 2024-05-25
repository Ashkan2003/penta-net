"use client";
import React, { useEffect } from "react";
import MovieCard from "../components/reusable-components/MovieCard";
import { useInfiniteMovie } from "../react-query/movie/useInfiniteMovie";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";
import { movieListType } from "../types/movieTypes";

// this component has the inf-scroll functionality
// to provid inf-scroll we need=>
//1 react-qeury useInfiniteQuery-hook and => to get the inf-data and incrice the fetching pageNumber
//2 react-intersection-observer => we need this to know when the user reches the element we want we can use a element like div at the button of the list so when the user reches to it is value get true so we send a signal to react-inf-query to fetch the next page

export default function PopularMoviesListPage() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteMovie();
 
  // we get this from react-intersection-observer
  const { ref, inView } = useInView();

  useEffect(() => {
    // if the user reaches(see) the  div that we provided in button of the list and the list has nextPage so fetch nextPage from the list
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <CircularProgress color="error" size={50} />
      </div>
    );
  }

  if (status === "error") {
    return <p>error...{error?.message}</p>;
  }

  // combine the arrays to 1 array
  const movieList = data?.pages.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue],
    []
  );
  return (
    <div className="py-9 px-3 ">
      <p className="text-white text-xl pb-5">پرطرفدار</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center   gap-y-5 gap-x-3 ">
        {movieList.map((movie: movieListType, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      {/* we provided a div so when the user reches(see) this elemet the ref-functionality send a signal and the inVeiw value gets true so we fire the fetchNextPage(); so nextPage of list will fetch from the sercer */}
      <div ref={ref} className="flex items-center justify-center">
        <CircularProgress color="error" size={50} />
      </div>
    </div>
  );
}
