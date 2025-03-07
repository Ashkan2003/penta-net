import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

// api calls (http request)
export async function getNowPlayingMovies() {
  const options = {
    method: "GET",
    url: "/movie/now_playing",
    params: { language: "fa-IR", include_video: "true" },
  };
  const data = await defualtAxios
    .request(options)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.error(err));

  return data;
}
