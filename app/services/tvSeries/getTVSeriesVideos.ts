import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

export async function getTVSeriesVideos(tvSeriesId: number) {
  const options = {
    method: "GET",
    url: `/tv/${tvSeriesId}/videos`,
    params: { language: "en-US" },
  };

  const data = await defualtAxios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
