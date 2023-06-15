import { useQuery } from "@tanstack/react-query";
import  Axios from "axios";

export const useGetCat = () => {
  const {data, refetch, isLoading: isCatLoading, error} = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
  });

  const refetchData = () => {
    alert("data refetched");
    refetch();
  }

  if(error) return <h1>an error has occured</h1>

  return {data, refetchData};
}
