import { getMovies } from "@/app/services/movie/getMovies";
import { getNowPlayingMovies } from "@/app/services/movie/getNowPlayingMovies";
import { movieListType } from "@/app/types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useNowPlayingMovies = () => {
  const {
    isLoading: isLoadingNowPlayingMovies,
    error,
    data: nowPlayingMovies,
  } = useQuery<movieListType[]>({
    queryFn: async () => await getNowPlayingMovies(),
    queryKey: ["now-playing-movies"], // the queryKey is a unic key to identify the data in the cash
  });
  return { nowPlayingMovies, error, isLoadingNowPlayingMovies };
};
