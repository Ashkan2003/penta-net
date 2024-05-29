import { useMovieImgs } from "@/app/react-query/movie/useMovieImgs";
import Image from "next/image";
import React from "react";

interface Props {
  movieId: number;
}

const MovieLogo = ({ movieId }: Props) => {
  const { movieImgs, isLoadingMovieImgs } = useMovieImgs(movieId);

  if (isLoadingMovieImgs) return <div className="h-[52px]"></div>;

  // get movie-logo file patch from the imgs array
  const movieLogoFilePatch = movieImgs.logos[0]?.file_path;

  if (movieLogoFilePatch) {
    return (
      <Image
        src={`https://image.tmdb.org/t/p/original/${movieLogoFilePatch}`}
        unoptimized
        width={200}
        height={50}
        alt="logo"
      />
    );
  } else {
    return null;
  }
};

export default MovieLogo;
