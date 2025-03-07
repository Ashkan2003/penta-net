import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

export type genreType =
  | "Action,28"
  | "Western,37"
  | "War,10752"
  | "Thriller,53"
  | "TV Movie,10770"
  | "Science Fiction,878"
  | "Romance,10749"
  | "Mystery,9648"
  | "Music,10402"
  | "Horror,27"
  | "History,36"
  | "Fantasy,14"
  | "Family,10751"
  | "Drama,18"
  | "Drama,18"
  | "Documentary,99"
  | "Crime,80"
  | "Comedy,35"
  | "Documentary,99"
  | "Animation,16"
  | "Adventure,12";

export async function getMoviesByGenre(genre: genreType) {
  const options = {
    method: "GET",
    url: "/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: genre.split(",").at(1),
    },
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

export default getMoviesByGenre;
