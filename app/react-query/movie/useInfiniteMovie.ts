import { getInfiniteMovie } from "@/app/services/movie/getInfiniteMovie";
import { useInfiniteQuery } from "@tanstack/react-query";

// with useInfiniteQuery that react-query provides we can provide infinite scroll
export function useInfiniteMovie() {
  const {
    data, // the data from server that has the number of cureent page and the data itself
    status,
    error,
    fetchNextPage, // this is a method // when we use this its fires getNextPageParam and fetch the nextpage
    isFetchingNextPage,
    hasNextPage, // if the list has a nextpage this will be true
  } = useInfiniteQuery({
    initialPageParam: 1, // the first page of list to render
    queryKey: ["inf-movies"],
    queryFn: getInfiniteMovie,
    getNextPageParam: (lastPage, allPages) => {
      // is the lasPage has length(exist) then return nextPage othewise retunr undfind
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  return {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
}
