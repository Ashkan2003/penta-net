import { getPopularMovieLists } from "@/app/services/movie/getPopularMovieLists";
import { useQuery } from "@tanstack/react-query";

export const useMovieLists = () => {
  const {
    isLoading: isLoadingMovieLists,
    error,
    data: movieLists,
  } = useQuery({
    queryFn: async () => await getPopularMovieLists(),
    queryKey: ["movieLists"], // the queryKey is a unic key to identify the data in the cash
  });
  console.log(movieLists, "ddd");
  return { isLoadingMovieLists, error, movieLists };
};
