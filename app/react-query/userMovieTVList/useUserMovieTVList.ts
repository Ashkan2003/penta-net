import { Media } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserMovieTVList = () => {
  const {
    isLoading: isLoadingUserMovieTVList,
    error,
    status,
    data: userMovieTVList,
  } = useQuery<Media[]>({
    queryFn: async () =>
      await axios.get("/api/userMovieTVListApi").then((res) => res.data),
    queryKey: ["userMovieTVList"], // the queryKey is a unic key to identify the data in the cash
  });

  return {
    userMovieTVList,
    isLoadingUserMovieTVList,
    error,
    status
  };
};
