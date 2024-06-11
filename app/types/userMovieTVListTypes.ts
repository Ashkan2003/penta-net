import { movieListType } from "./movieTypes";
import { tvSeriesListType } from "./tvSeriesTypes";

export type miniUserMovieTVListType = {
  mediaTmdbId: number;
  mediaType: "movie" | "tvSeries";
};

// in this type we extends from movieListType, tvSeriesListType and we add a type named "mediaType: string;"
export interface userStoredListType extends movieListType, tvSeriesListType {
  mediaType: string;
}
