import { miniUserMovieTVListType } from "@/app/types/userMovieTVListTypes";
import { Media } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useAddMediaToUserList = () => {
  const queryClient = useQueryClient();

  const {
    data,
    error,
    status,
    mutate: addMediaToUserList,
    isPending: isPendingToAdd,
  } = useMutation({
    mutationFn: async ({ mediaTmdbId, mediaType }: miniUserMovieTVListType) =>
      await axios.post("/api/userMovieTVListApi", {
        mediaTmdbId: mediaTmdbId,
        mediaType: mediaType,
      }),
    onSuccess: (data) => {
      // the user is the data coming from the mutationFn(the data returned from the loginApi-function)
      queryClient.invalidateQueries({ queryKey: ["userMovieTVList"] });
      toast.success("به لیست اضافه شد.");
    },
  });
  return { addMediaToUserList, isPendingToAdd,status };
};
