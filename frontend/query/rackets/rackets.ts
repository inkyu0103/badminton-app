import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

const getRacketList = async (brand: any, page: any): Promise<any> => {
  const { data } = await axios.get(`/rackets/${brand}`, {
    params: {
      page,
    },
  });
  return data;
};

export const useRacketListQuery = () => {
  const router = useRouter();
  const {
    query: { brand = "yonex", page },
  } = router;

  return useQuery(
    queryKeys.rackets.list(brand, page),
    () => getRacketList(brand, page),
    { suspense: true, staleTime: 5 * 60 * 1000 },
  );
};
