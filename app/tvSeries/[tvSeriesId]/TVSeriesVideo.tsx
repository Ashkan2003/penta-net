import { useTVSeriesVideos } from "@/app/react-query/tvSeries/useTVSeriesVideos";
import React from "react";

interface Props {
  tvSeriesId: number;
}

const TVSeriesVideo = ({ tvSeriesId }: Props) => {
  const { tvSeriesVideos, isLoadingTVSeriesVideos, error } =
    useTVSeriesVideos(tvSeriesId);

  if (isLoadingTVSeriesVideos) return null;
  // get the Official Trailer from tvSeries list
  let tvSeriesYoutubeVideo = tvSeriesVideos?.find((video: any) => {
    return video.name === "Official Trailer";
  });

  // if the tvSeries does not have a Official Trailer then get the first item of array
  if (!tvSeriesYoutubeVideo) {
    tvSeriesYoutubeVideo = tvSeriesVideos[0];
  }

  // if the tvSeries have a youtube video then render this,otherWise render null
  if (tvSeriesYoutubeVideo) {
    return (
      <div className="xl:w-[60%]">
        <iframe
          style={{
            display: "block",
            aspectRatio: "16 / 9",
            width: "100%",
            borderRadius: "1%",
          }}
          src={`https://www.youtube.com/embed/${tvSeriesYoutubeVideo.key}`}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default TVSeriesVideo;
