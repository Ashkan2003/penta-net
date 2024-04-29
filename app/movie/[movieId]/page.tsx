"use client";
import RoundedBtn from "@/app/components/reusable-components/RoundedBtn";
import { Button, CircularProgress, styled, Typography } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { useMovieDetails } from "@/app/react-query/movie/useMovieDetails";
import FullPageLoading from "@/app/components/reusable-components/FullPageLoading";
import MovieImgs from "./MovieImgs";
import MovieLogo from "./MovieLogo";
import MovieVideo from "./MovieVideo";
import MovieChatRoom from "./MovieChatRoom";
import MovieGenres from "./MovieGenres";

interface Props {
  params: { movieId: string };
}

const MovieDetailsPage = ({ params }: Props) => {
  // fetch a single movieDetails with its id from tmdb-site. the params type is allways string so convert it to number
  const { movieDetails, isLoadingMovieDetails } = useMovieDetails(
    Number(params.movieId)
  );

  if (isLoadingMovieDetails) return <FullPageLoading />;

  const movieImdbRate = Math.round(movieDetails!.vote_average * 10) / 10;
  const movieReleaseDate = movieDetails!.release_date.slice(0, 4);
  const moviePopularityPercent = Math.round(movieDetails!.popularity)
    .toString()
    .slice(0, 2);

  console.log(movieDetails);

  return (
    <div className="bg-[#121212]">
      {/* movie info  */}
      <div className="relative overflow-hidden h-[480px] sm:h-[500px] md:h-[550px] ">
        {/* movie ing */}
        <Image
          className=" absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
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
            <MovieLogo movieId={Number(params.movieId)} />
          </div>
          {/* the film title */}
          <div>
            <p className="text-[25px]">{movieDetails?.title}</p>
            <div className="flex text-sm text-secondText gap-3">
              <span className="font-bold pt-1">
                {movieDetails?.runtime} دقیقه
              </span>
              <span>_</span>
              <span className="font-bold pt-1 ">{movieReleaseDate}</span>
            </div>
          </div>
          {/* the film info */}
          <div className="flex flex-wrap text-[14px] justify-between items-center w-full gap-5">
            <span className="px-2 py-1 font-bold text-[12px]  rounded-2xl text-black   bg-gradient-to-b  from-[#f69067] to-[#f95a1b]">
              15+
            </span>
            <div className="flex pt-1">
              <span className="font-bold pe-2">IMDB</span>
              <p>{movieImdbRate}</p>
            </div>
            <div>
              <FavoriteIcon />
              {moviePopularityPercent}%
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
          <p className="max-w-[500px] text-[14px] ">{movieDetails?.overview}</p>
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
              <RoundedBtn color="primary" Icon={AddRoundedIcon} />
              <RoundedBtn color="primary" Icon={ThumbUpAltRoundedIcon} />
              <RoundedBtn color="primary" Icon={ThumbDownRoundedIcon} />
            </div>
          </div>
          {/* film budge */}
          <div className="flex flex-col gap-1">
            <Typography fontSize={12} color="primary.light">
              انتشار : {movieDetails?.production_companies[0].name}{" "}
            </Typography>
            <Typography fontSize={12} color="primary.light">
              بودجه : {movieDetails?.budget}$
            </Typography>
          </div>
          {/* genres list */}
          <MovieGenres genres={movieDetails?.genres!} />
        </div>
      </div>
      {/* movie img and video */}
      <div className="flex flex-col w-full bg-gradient-to-b from-[#fff0] to-[#000000]  p-5 gap-5">
        <p>تصاویر و جزییات فیلم</p>
        {/* movie imgs */}
        <MovieImgs movieId={Number(params.movieId)} />
        {/* movie trailer video */}
        <MovieVideo movieId={Number(params.movieId)} />
      </div>
      {/* movie chat room */}
      <MovieChatRoom />
    </div>
  );
};

export default MovieDetailsPage;
