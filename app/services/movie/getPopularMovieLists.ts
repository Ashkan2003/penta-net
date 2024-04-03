import axios from "axios";

export async function getPopularMovieLists() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQyYTVjM2ZjMDU2Mzc3MDYxZjE5NTEzODY5M2QzOCIsInN1YiI6IjY2MDE4MmZhNzcwNzAwMDE3YzBmNjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5dJnztUQ_IFITVtIJxjlae6nTyUu9NVJV1ikveXJc",
    },
  };

  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
