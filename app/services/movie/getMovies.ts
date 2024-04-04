import axios from "axios";

// api calls (http request)
export async function getMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: "Interstellar",
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API,
    },
  };

  const data = await axios
    .request(options)
    .then((res) => {
      return res.data.results[1];
    })
    .catch((err) => console.error(err));

  return data;
}
