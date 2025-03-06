"use client";
import { useEffect, useState } from "react";
import MovieCard from "../components/reusable-components/MovieCard";
import { useUserMovieTVList } from "../react-query/userMovieTVList/useUserMovieTVList";
import { getMovieDetails } from "../services/movie/getMovieDetails";
import { getTVSeriesDetails } from "../services/tvSeries/getTVSeriesDetails";
import FullPageLoadingSpinner from "../components/reusable-components/FullPageLoadingSpinner";
import TVSeriesCard from "../components/reusable-components/TVSeriesCard";
import { userStoredListType } from "../types/userMovieTVListTypes";

export default function UserListPage() {
  // the userStoredList have both the movie and tvSeries -details. so
  const [userStoredList, setUserStoredList] = useState<userStoredListType[]>();

  // get userMovieTVList from react query
  const { isLoadingUserMovieTVList, userMovieTVList, status } =
    useUserMovieTVList();

  useEffect(() => {
    if (status == "error") return;

    const handleData = async () => {
      const list: userStoredListType[] =userMovieTVList ? await Promise.all(
        userMovieTVList!.map(async (media) => {
          if (media.mediaType === "movie") {
            return getMovieDetails(media.mediaTmdbId).then((res) => ({
              ...res,
              mediaType: media.mediaType,
            }));
          } else {
            return getTVSeriesDetails(media.mediaTmdbId).then((res) => ({
              ...res,
              mediaType: media.mediaType,
            }));
          }
        })
      ) : []
      setUserStoredList(list);
    };
    handleData();
  }, [isLoadingUserMovieTVList, userMovieTVList, status]);

  console.log(userStoredList);

  if (!userStoredList) {
    return <FullPageLoadingSpinner />;
  }

  return (
    <div className="py-9 px-3 ">
      <p className="text-white text-xl pb-5">ذخیره شده ها</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center   gap-y-5 gap-x-3 ">
        {userStoredList.map((media, index: number) =>
          media.mediaType === "movie" ? (
            <MovieCard key={index} movie={media} />
          ) : (
            <TVSeriesCard key={index} tvSeries={media} />
          )
        )}
      </div>
    </div>
  );
}
