import axios from "axios";

export async function getTVSeriesVideos(tvSeriesId: number) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${tvSeriesId}/videos`,
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
