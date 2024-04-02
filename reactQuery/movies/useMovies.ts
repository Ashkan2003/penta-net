// import getMovies from "@/app/services/getMovies";
import { getMovies } from "@/app/services/getMovies";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type tmdpType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: "ja";
  original_name: string;
  overview: string;
  popularity: 298.204;
  poster_path: string;
  first_air_date: "2004-10-05";
  name: string;
  vote_average: 8.4;
  vote_count: 1717;
};
// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/search/tv",
//   //   params: {
//   //     query: "joan",
//   //     include_adult: "false",
//   //     language: "en-US",
//   //     page: "1",
//   //   },
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQyYTVjM2ZjMDU2Mzc3MDYxZjE5NTEzODY5M2QzOCIsInN1YiI6IjY2MDE4MmZhNzcwNzAwMDE3YzBmNjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5dJnztUQ_IFITVtIJxjlae6nTyUu9NVJV1ikveXJc",
//   },
// };

// async () => {
//   await axios
//     .get("https://api.themoviedb.org/3/search/tv", {
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQyYTVjM2ZjMDU2Mzc3MDYxZjE5NTEzODY5M2QzOCIsInN1YiI6IjY2MDE4MmZhNzcwNzAwMDE3YzBmNjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5dJnztUQ_IFITVtIJxjlae6nTyUu9NVJV1ikveXJc",
//       },
//       params: {
//         query: "joan",
//         include_adult: "false",
//         language: "en-US",
//         page: "1",
//       },
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// },


export const useMovies = () => {
  const {
    isLoading: isLoadingMovies,
    error,
    data,
  } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], // the queryKey is a unic key to identify the data in the cash
    
  });
  console.log(data, "sss");
  return { isLoadingMovies, error, data };
};
