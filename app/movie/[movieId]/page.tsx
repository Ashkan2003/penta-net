"use client";
import RoundedBtn from "@/app/components/reusable-components/RoundedBtn";
import { Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { useMovieDetails } from "@/app/react-query/movie/useMovieDetails";

interface Props {
  params: { movieId: string };
}
const MovieDetailsPage = ({ params }: Props) => {
  // fetch a single movieDetails with its id from tmdb-site. the params type is allways string so convert it to number
  const { movieDetails, isLoadingMovieDetails, error } = useMovieDetails(
    Number(params.movieId)
  );
  if (isLoadingMovieDetails)
    return (
      <div className="relative h-[50vh]">
        <CircularProgress className="!absolute" size={200} color="error" />
      </div>
    );
  const movieImdbRate = Math.round(movieDetails!.vote_average * 10) / 10;
  const movieReleaseDate = movieDetails!.release_date.slice(0, 4);
  const moviePopularityPercent = Math.round(movieDetails!.popularity)
    .toString()
    .slice(0, 2);

  return (
    <div className="bg-[#121212] h-[100vh]">
      <div className="relative overflow-hidden h-[350px] sm:h-[500px] md:h-[550px] ">
        <Image
          className=" absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
          // src="https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg"
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
          alt="poster"
          fill
          unoptimized
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#ffffff00] to-[#121212] " />
        <div className="absolute p-5 flex flex-col gap-6 text-white">
          {/* the film logo */}
          <Image src="/bleach-logo.png" width={200} height={50} alt="logo" />
          {/* the film title */}
          <p className="text-[20px]">{movieDetails?.title}</p>
          {/* the film info */}
          <div className="flex text-[14px] justify-between items-center w-[500px]">
            <span className="px-2 py-1 font-bold text-[12px]  rounded-2xl text-black   bg-gradient-to-b  from-[#f69067] to-[#f95a1b]">
              15+
            </span>
            <span className="font-bold pt-1">{movieReleaseDate}</span>
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
          <p className="w-[550px] text-[14px]">{movieDetails?.overview}</p>
          {/* film btns */}
          <div className="flex items-center">
            <Button
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
          {/* film actors and directors */}
          <div className="flex flex-col gap-1">
            <Typography fontSize={12} color="primary.light">
              ستارگان: Masakazu MoritaYuki MatsuokaHiroki YasumotoNoriaki
              Sugiyama
            </Typography>
            <Typography fontSize={12} color="primary.light">
              کارگردان: Tomohisa Taguchi
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
