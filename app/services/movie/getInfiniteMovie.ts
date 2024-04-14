import axios from "axios";

export async function getInfiniteMovie(props: any) {
  //we get props from useInfiniteQuery-hook that react-query provided
  // pageParam is the number of page we want // with inf-scroll its value incrise 
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: props.pageParam },
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
