import { getMultiSearchQuery } from "@/app/services/multiSearch/getMultiSearchQuery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMultiSearchQuery = () => {
  const queryClient = useQueryClient();

  const {
    isPaused,
    isPending,
    data: multiSearchData,
    error,
    mutate,
  } = useMutation({
    mutationFn: (query: string) => getMultiSearchQuery(query),
    onSuccess: (data) => {
      // the user is the data coming from the mutationFn(the data returned from the loginApi-function)
      queryClient.setQueryData(["multiSearchQueryData"], data); //whit setQueryData-function we menualy set a data into the react-query-catch// so when ever this data bing downloaded from api it gets from the catch so the loading process will decrice// store the user.user-data into the react-query-catch by the key of "user"   // this is a optional-thing to do for increseing the performance of the loading the page when the user is loging-in.
    },
  });
  return { isPending, multiSearchData, error, mutate };
  //   const {
  //     isLoading: isLoadingMultiSearch,
  //     error,
  //     data: multiSearchData,
  //   } = useQuery({

  //     queryFn: async () => await getMultiSearchQuery(query),
  //     queryKey: ["MultiSearch"], // the queryKey is a unic key to identify the data in the cash

  //   });
  //   return { multiSearchData, isLoadingMultiSearch, error };
};
