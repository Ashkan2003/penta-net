import { getMovieImgs } from "@/app/services/movie/getMovieImgs";
import { getTVSeriesImgs } from "@/app/services/tvSeries/getTVSeriesImgs";
import { useQuery } from "@tanstack/react-query";

export const useTVSeriesImgs = (tvSeriesId: number) => {
  const {
    isLoading: isLoadingTVSeriesImgs,
    error,
    data: tvSeriesImgs,
  } = useQuery({
    queryFn: async () => await getTVSeriesImgs(tvSeriesId),
    queryKey: ["tvSeriesImgs", tvSeriesId], // the queryKey is a unic key to identify the data in the cash
  });
  return { tvSeriesImgs, isLoadingTVSeriesImgs, error };
};
