import axios from "axios";

export async function getMultiSearchQuery(query: string) {
  if (query == "") {
    return [];
  }

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/multi",
    params: { query: query, language: "en" },
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

  // filter throug does values that there name is undfind
  const movieAndTVArray = data.filter((item: any) => {
    return item.name !== undefined || item.title !== undefined;
  });

  return movieAndTVArray;
}
