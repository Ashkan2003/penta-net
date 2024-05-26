import { getTVSeriesVideos } from "@/app/services/tvSeries/getTVSeriesVideos";
import { useQuery } from "@tanstack/react-query";

export const useTVSeriesVideos = (tvSeriesId: number) => {
  const {
    isLoading: isLoadingTVSeriesVideos,
    error,
    data: tvSeriesVideos,
  } = useQuery({
    queryFn: async () => await getTVSeriesVideos(tvSeriesId),
    queryKey: ["tvSeriesVideo", tvSeriesId], // the queryKey is a unic key to identify the data in the cash
  });
  return { tvSeriesVideos, isLoadingTVSeriesVideos, error };
};
