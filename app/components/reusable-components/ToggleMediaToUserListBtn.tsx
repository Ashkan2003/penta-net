"use client";
import { miniUserMovieTVListType } from "@/app/types/userMovieTVListTypes";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SyncIcon from "@mui/icons-material/Sync";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import RoundedBtn from "./RoundedBtn";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

// extend the props-types from miniUserMovieTVListType
interface Props extends miniUserMovieTVListType {}

export const ToggleMediaToUserListBtn = ({ mediaType, mediaTmdbId }: Props) => {
  // get the current-user // if the user doesnt signed in we cant store the media in db
  const { isLoaded, isSignedIn } = useUser();

  // get the  list of userMovieTVList
  // const { userMovieTVList, isLoadingUserMovieTVList } = useUserMovieTVList();

  // get add-mutation from react-query
  // const { addMediaToUserList, isPendingToAdd, status } =
  //   useAddMediaToUserList();

  // get delete-mutation from react-query
  // const { deleteMediaFromUserList, isPendingToDelete } =
  //   useDeleteMediaFromUserList();
  // if is loading the userMovieTVList render a syncIcon
  // if (isLoadingUserMovieTVList || !isLoaded || status == "pending")
  //   return (
  //     <Tooltip TransitionComponent={Zoom} title="loading" arrow>
  //       <IconButton color="success">
  //         <RoundedBtn color="primary" Icon={SyncIcon} />
  //       </IconButton>
  //     </Tooltip>
  //   );

  // const matchedMedia = userMovieTVList?.find((media: Media) => {
  //   return media.mediaTmdbId == mediaTmdbId;
  // });

  // the toggle-btn(add or delete) functionality
  // const handleToggleToUserMovieTVList = async () => {
  //   if (!isSignedIn) {
  //     toast.error("لطفا برای اضافه کردن به لیست وارد حساب کاربری خود شوید.");
  //     return null;
  //   }

  //   // if the metchedMedia is true so the media is in db so if user toggle then delete the media
  //   if (matchedMedia) {
  //     deleteMediaFromUserList({
  //       mediaType: mediaType,
  //       mediaTmdbId: mediaTmdbId,
  //     });
  //   } else {
  //     // if the metchedMedia is false so the media is not in db so if user toggle then add the media
  //     addMediaToUserList({
  //       mediaType: mediaType,
  //       mediaTmdbId: mediaTmdbId,
  //     });
  //   }
  // };

  return (
    <Tooltip
      // onClick={handleToggleToUserMovieTVList}
      TransitionComponent={Zoom}
      title={"افزودن به لیست من"}
      arrow
    >
      <IconButton
        // disabled={isPendingToAdd || isPendingToDelete}
        color="success"
      >
        {/* <RoundedBtn color="primary" Icon={CheckCircleIcon} /> */}

        <RoundedBtn color="primary" Icon={AddRoundedIcon} />
      </IconButton>
    </Tooltip>
  );
};
