import { useQuery } from "@tanstack/react-query";
import { IReviewStatisticsResponse } from "interface/Statistics.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

const statisticsPropertyMapper = {
  criteria: {
    control: "컨트롤",
    power: "파워",
    weight: "무게",
  },
  ranks: {
    S: "S조",
    A: "A조",
    B: "B조",
    C: "C조",
    D: "D조",
  },
  genders: {
    MALE: "남성",
    FEMALE: "여성",
  },
} as const;

const colorMaper = {
  criteria: {
    control: "#FFBB28",
    power: "#00C49F",
    weight: "#F43F5E",
  },
  gender: {
    MALE: "#6366F1",
    FEMALE: "#F43F5E",
  },
  rank: {
    S: "#FF8042",
    A: "#FFBB28",
    B: "#00C49F",
    C: "#0088FE",
    D: "#F43F5E",
  },
};

const getReviewStatistics = async (racketId: number) => {
  const { data } = await axios(`/statistics/${racketId}`);
  return data;
};

export const useReviewStatistics = () => {
  const router = useRouter();
  const racketId = Number.parseInt(router.query.racketId);

  return useQuery<IReviewStatisticsResponse>(
    queryKeys.statistics.single(racketId),
    () => getReviewStatistics(racketId),
    {
      enabled: !!racketId,
      select: (data) => {
        const { criteria, genders, ranks } = data;

        const transformedCriteria = Object.entries(criteria).map(
          ([key, value]) => ({
            name: statisticsPropertyMapper.criteria[key],
            value,
            filled: colorMaper.criteria[key],
          }),
        );

        const transformedGender = Object.entries(genders).map(
          ([key, value]) => ({
            name: statisticsPropertyMapper.genders[key],
            value,
            filled: colorMaper.gender[key],
          }),
        );

        const transformedRank = Object.entries(ranks).map(([key, value]) => ({
          name: statisticsPropertyMapper.ranks[key],
          value,
          filled: colorMaper.rank[key],
        }));

        return {
          criteria: transformedCriteria,
          gender: transformedGender,
          rank: transformedRank,
        };
      },
    },
  );
};
