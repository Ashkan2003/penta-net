import { getMovieVideos } from "@/app/services/movie/getMovieVideos";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const useUserMovieTVList = () => {
  const {
    isLoading: isLoadingUserMovieTVList,
    error,
    data: userMovieTVList,
  } = useQuery({
    queryFn: async () =>
      await axios.get("/api/userMovieTVListApi").then((res) => res.data),
    queryKey: ["userMovieTVList"], // the queryKey is a unic key to identify the data in the cash
  });

  return {
    userMovieTVList,
    isLoadingUserMovieTVList,
    error,
  };
};
