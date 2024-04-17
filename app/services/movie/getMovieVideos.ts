import axios from "axios";

export async function getMovieVideos(movieId: number) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API,
    },
  };

  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
