import axios from "axios";

// api calls (http request)
export async function getNowPlayingMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "fa-IR", include_video: "true" },
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API,
    },
  };
  const data = await axios
    .request(options)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.error(err));

  return data;
}
