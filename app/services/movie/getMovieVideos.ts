import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

export async function getMovieVideos(movieId: number) {
  const options = {
    method: "GET",
    url: `/movie/${movieId}/videos`,
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
