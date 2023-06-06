import { useQuery } from "@tanstack/react-query";
import { RacketResponse } from "interface/Racket.interface";
import { IRacket } from "interface/Racket.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

const getRacketList = async (
  brand: string,
  page: number,
): Promise<RacketResponse> => {
  const { data } = await axios.get<RacketResponse>(`/rackets/${brand}`, {
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

const getRacket = async (racketId: number): Promise<IRacket> => {
  const { data } = await axios.get<IRacket>(`/rackets/${racketId}/detail`);
  return data;
};

export const useRacketQuery = () => {
  const router = useRouter();
  const racketId = Number.parseInt(router.query.racketId as string);

  return useQuery<IRacket, Error>(
    queryKeys.rackets.single(racketId),
    () => getRacket(racketId),
    {
      suspense: true,
      enabled: Number.isNaN(racketId) === false,
    },
  );
};
