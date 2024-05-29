import axios from "axios";

// this is a http request for getting a list of movies or tvSeries based on the search-query
export async function getMultiSearchQuery(searchQuery: string) {
  if (!searchQuery) {
    return [];
  }

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/multi",
    params: {
      query: searchQuery,
      language: "en",
      sort_by: "vote_average.desc",
      include_video: "true",
    },
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

  // filter this array with these parameters =>
  // we want only the movie or tvSereis that they have a name and title (there .name or .title is not undefined)
  // we only want the movies and tvSeries so we dont want a media of type "person"
  const movieAndTVArray = data.filter((movieOrTV: any) => {
    return (
      (movieOrTV.name !== undefined || movieOrTV.title !== undefined) &&
      movieOrTV.media_type !== "person" &&
      movieOrTV.vote_average > 5
    );
  });

  return movieAndTVArray;
}
