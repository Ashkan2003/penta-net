import { getMovies } from "@/app/services/movie/getMovies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const {
    isLoading: isLoadingMovies,
    error,
    data,
  } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], // the queryKey is a unic key to identify the data in the cash
    
  });
  // console.log(data, "sss");
  return { isLoadingMovies, error, data };
};
