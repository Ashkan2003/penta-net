import defualtAxios from "@/app/utils/defualtAxios";
import axios from "axios";

export async function getInfiniteTVSeries(props: any) {
  //we get props from useInfiniteQuery-hook that react-query provided
  // pageParam is the number of page we want // with inf-scroll its value incrise
  const options = {
    method: "GET",
    url: "/tv/top_rated",
    params: { language: "fa-IR", page: props.pageParam },
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
