import { getMultiSearchQuery } from "@/app/services/multiSearch/getMultiSearchQuery";
import { miniUserMovieTVListType } from "@/app/types/userMovieTVListTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useDeleteMediaFromUserList = () => {
  const queryClient = useQueryClient();

  const {
    data,
    error,
    mutate: deleteMediaFromUserList,
    isPending: isPendingToDelete,
  } = useMutation({
    mutationFn: async ({ mediaTmdbId, mediaType }: miniUserMovieTVListType) =>
      await axios.delete("/api/userMovieTVListApi", {
        data: {
          mediaTmdbId: mediaTmdbId,
          mediaType: mediaType,
        },
      }),
    onSuccess: (data) => {
      // the user is the data coming from the mutationFn(the data returned from the loginApi-function)
      queryClient.invalidateQueries({ queryKey: ["userMovieTVList"] });
      toast.success("از لیست حذف شد.");
    },
  });
  return { isPendingToDelete, deleteMediaFromUserList };
};
