import { useMovieVideos } from "@/app/react-query/movie/useMovieVideos";
import { styled } from "@mui/material";
import React from "react";

interface Props {
  movieId: number;
}

const MovieVideoSection = ({ movieId }: Props) => {
  const { movieVideos, isLoadingMovieVideos } = useMovieVideos(movieId);

  if (isLoadingMovieVideos) return null;

  console.log(movieVideos);

  // get the Official Trailer from movie list
  const movieYoutubeVideo = movieVideos?.find((video: any) => {
    return video.name === "Official Trailer";
  });

  return (
    <iframe
      style={{
        display: "block",
        aspectRatio: "16 / 9",
        width: "100%",
      }}
      src={`https://www.youtube.com/embed/${movieYoutubeVideo.key}`}
    />
  );
};

export default MovieVideoSection;
