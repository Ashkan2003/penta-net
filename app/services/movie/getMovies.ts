import axios from "axios";

// api calls (http request)
export async function getMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: "Dune",
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQyYTVjM2ZjMDU2Mzc3MDYxZjE5NTEzODY5M2QzOCIsInN1YiI6IjY2MDE4MmZhNzcwNzAwMDE3YzBmNjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5dJnztUQ_IFITVtIJxjlae6nTyUu9NVJV1ikveXJc",
    },
  };

  const data = await axios
    .request(options)
    .then((res) => {
      return res.data.results[2];
    })
    .catch((err) => console.error(err));

  return data;
}
