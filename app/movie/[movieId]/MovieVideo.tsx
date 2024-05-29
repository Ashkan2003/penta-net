import { useMovieVideos } from "@/app/react-query/movie/useMovieVideos";
import React from "react";

interface Props {
  movieId: number;
}

const MovieVideo = ({ movieId }: Props) => {
  const { movieVideos, isLoadingMovieVideos } = useMovieVideos(movieId);

  if (isLoadingMovieVideos) return null;

  // get the Official Trailer from movie list
  let movieYoutubeVideo = movieVideos?.find((video: any) => {
    return video.name === "Official Trailer";
  });

  // if the movie does not have a Official Trailer then get the first item of array
  if (!movieYoutubeVideo) {
    movieYoutubeVideo = movieVideos[0];
  }
  // if the movie have a youtube video then render this,otherWise render null
  if (movieYoutubeVideo) {
    return (
      <div className="xl:w-[60%]">
        <iframe
          style={{
            display: "block",
            aspectRatio: "16 / 9",
            width: "100%",
            borderRadius: "1%",
          }}
          src={`https://www.youtube.com/embed/${movieYoutubeVideo.key}`}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default MovieVideo;
