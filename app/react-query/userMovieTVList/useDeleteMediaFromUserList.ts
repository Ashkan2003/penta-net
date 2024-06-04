import { getMultiSearchQuery } from "@/app/services/multiSearch/getMultiSearchQuery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteMediaFromUserList = () => {
  const queryClient = useQueryClient();

  const { data, error, mutate, isPending } = useMutation({
    mutationFn: async ({
      mediaId,
      mediaType,
    }: {
      mediaId: number;
      mediaType: string;
    }) =>
      await axios.delete("/api/userMovieTVListApi", {
        data: {
          mediaTmdbId: mediaId,
          mediaType: mediaType,
        },
      }),
    onSuccess: (data) => {
      // the user is the data coming from the mutationFn(the data returned from the loginApi-function)
      queryClient.invalidateQueries({ queryKey: ["userMovieTVList"] });
    },
  });
  return { error, mutate, isPending };
};
