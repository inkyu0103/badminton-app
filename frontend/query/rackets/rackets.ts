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

const getRacket = async (racketId: number): Promise<any> => {
  const { data } = await axios.get(`/rackets/${racketId}/detail`);
  return data;
};

export const useRacketQuery = () => {
  const router = useRouter();
  const racketId = Number.parseInt(router.query.racketId as string);

  return useQuery(
    queryKeys.rackets.single(racketId),
    () => getRacket(racketId),
    {
      suspense: true,
      enabled: Number.isNaN(racketId) === false,
    },
  );
};
