import { getMovieImgs } from "@/app/services/movie/getMovieImgs";
import { useQuery } from "@tanstack/react-query";

export const useMovieImgs = (movieId: number) => {
  const {
    isLoading: isLoadingMovieImgs,
    error: movieImgsError,
    data: movieImgs,
  } = useQuery({
    queryFn: async () => await getMovieImgs(movieId),
    queryKey: ["movieImgs", movieId], // the queryKey is a unic key to identify the data in the cash
  });
  // console.log(movieDetails, "ddd");
  return { movieImgs, isLoadingMovieImgs, movieImgsError };
};
