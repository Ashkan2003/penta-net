import { getMovieDetails } from "@/app/services/movie/getMovieDetails";
import { movieDetailsType, movieListType } from "@/app/types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetails = (movieId: number) => {
  const {
    isLoading: isLoadingMovieDetails,
    error,
    data: movieDetails,
  } = useQuery<movieDetailsType>({
    queryFn: async () => await getMovieDetails(movieId),
    queryKey: ["movieDetails",movieId], // the queryKey is a unic key to identify the data in the cash
  });
  console.log(movieDetails, "ddd");
  return { movieDetails, isLoadingMovieDetails, error };
};
