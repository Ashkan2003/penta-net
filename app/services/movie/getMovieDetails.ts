import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

export async function getMovieDetails(movieId: number) {
  const options = {
    method: "GET",
    url: `/movie/${movieId}`,
    params: { language: "fa-IR" },
  };

  const data = await defualtAxios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
