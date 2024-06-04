import { IconButton, Tooltip, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import RoundedBtn from "./RoundedBtn";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { Media } from "@prisma/client";
import { useUserMovieTVList } from "@/app/react-query/userMovieTVList/useUserMovieTVList";
import { useAddMediaFromUserList } from "@/app/react-query/userMovieTVList/useAddMediaToUserList";
import { useDeleteMediaFromUserList } from "@/app/react-query/userMovieTVList/useDeleteMediaFromUserList";

interface Props {
  movieId: number;
  //   userMovieTVList: Media[];
}

const AddToUserListBtn = ({ movieId }: Props) => {
  const { userMovieTVList, isLoadingUserMovieTVList } = useUserMovieTVList();
  const { mutate, isPending } = useAddMediaFromUserList();
  const { isPending: isPendingDelete, mutate: deleteMutate } =
    useDeleteMediaFromUserList();

  if (isLoadingUserMovieTVList) return null;
  if (isPendingDelete) return null;

  const matchedMedia: Media[] = userMovieTVList.find((media) => {
    return media.mediaTmdbId == movieId;
  });
  console.log(matchedMedia, "ldgh");
  const handleAddToUserMovieTVList = async () => {
    if (matchedMedia) {
      deleteMutate({ mediaId: movieId, mediaType: "movie" });
    } else {
      mutate({ mediaId: movieId, mediaType: "movie" });
    }
  };
  return (
    <Tooltip
      onClick={handleAddToUserMovieTVList}
      TransitionComponent={Zoom}
      title={matchedMedia ? "حذف از لیست من" : "افزودن به لیست من"}
      arrow
    >
      <IconButton disabled={isPending} color="success">
        {matchedMedia ? (
          <RoundedBtn color="primary" Icon={CheckCircleIcon} />
        ) : (
          <RoundedBtn color="primary" Icon={AddRoundedIcon} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default AddToUserListBtn;
