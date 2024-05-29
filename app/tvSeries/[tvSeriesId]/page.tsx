"use client";
import RoundedBtn from "@/app/components/reusable-components/RoundedBtn";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Image from "next/image";

import FullPageLoadingSpinner from "@/app/components/reusable-components/FullPageLoadingSpinner";
import { useTVSeriesDetails } from "@/app/react-query/tvSeries/useTVSeriesDetails";
import TVSeriesImgs from "./TVSeriesImgs";
import TVSeriesLogo from "./TVSeriesLogo";
import GenresList from "@/app/components/reusable-components/GenresList";
import TVSeriesVideo from "./TVSeriesVideo";

interface Props {
  params: { tvSeriesId: string };
}

const TVSeriesDetailsPage = ({ params }: Props) => {
  // fetch a single tvSeriesDetails with its id from tmdb-site. the params type is allways string so convert it to number
  const { tvSeriesDetails, isLoadingTVSeriesDetails, error } =
    useTVSeriesDetails(Number(params.tvSeriesId));

  if (isLoadingTVSeriesDetails) return <FullPageLoadingSpinner />;

  const tvSeriesImdbRate = Math.round(tvSeriesDetails!.vote_average * 10) / 10;
  const tvSeriesReleaseDate = tvSeriesDetails!.first_air_date.slice(0, 4);
  const tvSeriesDes = tvSeriesDetails?.overview.slice(0, 200);
  const tvSeriesPopularityPercent = Math.round(tvSeriesDetails!.popularity)
    .toString()
    .slice(0, 2);
  return (
    <div className="bg-[#121212]">
      {/* movie info  */}
      <div className="relative overflow-hidden h-[700px] xs:h-[550px] sm:h-[550px] md:h-[550px] ">
        {/* movie ing */}
        <Image
          className=" absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
          src={`https://image.tmdb.org/t/p/original${tvSeriesDetails?.backdrop_path}`}
          alt="poster"
          fill
          priority
          unoptimized
        />
        {/* hover shadow style */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#ffffff00] to-[#121212] " />
        {/* movie info */}
        <div className="absolute p-5 flex flex-col gap-6 text-white">
          {/* the film logo */}
          <div className="flex justify-center sm:justify-start">
            <TVSeriesLogo tvSeriesId={Number(params.tvSeriesId)} />
          </div>
          {/* the film title */}
          <div>
            <p className="text-[25px]">{tvSeriesDetails?.name}</p>
            <div className="flex text-sm text-secondText gap-3">
              <span className="font-bold pt-1">
                {tvSeriesDetails.number_of_episodes} قسمت{" "}
              </span>
              <span>_</span>
              <span className="font-bold pt-1 ">{tvSeriesReleaseDate}</span>
            </div>
          </div>
          {/* the film info */}
          <div className="flex flex-wrap text-[14px] justify-between items-center w-full gap-5">
            <span className="px-2 py-1 font-bold text-[12px]  rounded-2xl text-black   bg-gradient-to-b  from-[#f69067] to-[#f95a1b]">
              15+
            </span>
            <div className="flex pt-1">
              <span className="font-bold pe-2">IMDB</span>
              <p>{tvSeriesImdbRate}</p>
            </div>
            <div>
              <FavoriteIcon />
              {tvSeriesPopularityPercent}%
            </div>
            <div>
              <KeyboardVoiceIcon />
              دوبله پنتانت
            </div>
            <div>
              <WysiwygRoundedIcon />
              زیرنویس
            </div>
          </div>
          {/* the film des */}
          <p className="max-w-[500px] text-[14px] ">{tvSeriesDes}...</p>
          {/* film btns */}
          <div className="flex items-center flex-wrap gap-5">
            <Button
              className="w-full xs:w-auto"
              size="large"
              color="info"
              variant="contained"
              startIcon={<PlayArrowRoundedIcon className="!text-[30px]" />}
            >
              خرید اشتراک
            </Button>
            <div className="flex justify-between w-40 ps-3">
              <Tooltip
                TransitionComponent={Zoom}
                title="افزودن به لیست من"
                arrow
              >
                <IconButton color="success">
                  <RoundedBtn color="primary" Icon={AddRoundedIcon} />
                </IconButton>
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="دوست داشتم" arrow>
                <IconButton color="success">
                  <RoundedBtn color="primary" Icon={ThumbUpAltRoundedIcon} />
                </IconButton>
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="دوست نداشتم" arrow>
                <IconButton color="success">
                  <RoundedBtn color="primary" Icon={ThumbDownRoundedIcon} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          {/* film budge */}
          <div className="flex flex-col gap-1">
            {tvSeriesDetails?.production_companies[0]?.name && (
              <Typography fontSize={12} color="primary.light">
                انتشار : {tvSeriesDetails?.production_companies[0]?.name}
              </Typography>
            )}
            <Typography fontSize={12} color="primary.light">
              وضعیت : {tvSeriesDetails.status}
            </Typography>
          </div>
          {/* genres list */}
          <GenresList genres={tvSeriesDetails?.genres!} />
        </div>
      </div>
      {/* movie img and video */}
      <div className="flex flex-col w-full bg-gradient-to-b from-[#fff0] to-[#000000]  p-5 pt-5 gap-5">
        <p>تصاویر و جزییات فیلم</p>
        {/* tvSeries imgs */}
        <TVSeriesImgs tvSeriesId={tvSeriesDetails.id} />
        {/* tvSeries  trailer video */}
        <TVSeriesVideo tvSeriesId={tvSeriesDetails.id} />
      </div>
      {/* movie chat room */}
      {/* <MovieChatRoom /> */}
    </div>
  );
};

export default TVSeriesDetailsPage;
