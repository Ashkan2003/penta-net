import { getMovieDetails } from "@/app/services/movie/getMovieDetails";
import { getTVSeriesDetails } from "@/app/services/tvSeries/getTVSeriesDetails";
import { movieDetailsType, movieListType } from "@/app/types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useTVSeriesDetails = (tvSeriesId: number) => {
  const {
    isLoading: isLoadingTVSeriesDetails,
    error,
    data: tvSeriesDetails,
  } = useQuery({
    queryFn: async () => await getTVSeriesDetails(tvSeriesId),
    queryKey: ["tvSeriesDetails", tvSeriesId], // the queryKey is a unic key to identify the data in the cash
  });
  return { tvSeriesDetails, isLoadingTVSeriesDetails, error };
};
