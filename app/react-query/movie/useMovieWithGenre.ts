import getMoviesByGenre, { genreType } from "@/app/services/movie/getMoviesByGenre";
import { movieListType } from "@/app/types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useMoviesByGenre = (genre: genreType) => {
  const {
    isLoading: isLoadingMoviesByGenre,
    error,
    data: movieList,
  } = useQuery<movieListType[]>({
    queryFn: async () => await getMoviesByGenre(genre),
    queryKey: ["movieByGenre", genre], // the queryKey is a unic key to identify the data in the cash
  });
  return { isLoadingMoviesByGenre,movieList,error };
};
