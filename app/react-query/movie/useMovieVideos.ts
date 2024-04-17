import { getMovieVideos } from "@/app/services/movie/getMovieVideos";
import { movieDetailsType } from "@/app/types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useMovieVideos = (movieId: number) => {
  const {
    isLoading: isLoadingMovieVideos,
    error,
    data: movieVideos,
  } = useQuery({
    queryFn: async () => await getMovieVideos(movieId),
    queryKey: ["movieVideo", movieId], // the queryKey is a unic key to identify the data in the cash
  });
  // console.log(movieDetails, "ddd");
  return { movieVideos, isLoadingMovieVideos, error };
};
