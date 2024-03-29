import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  IReviewStatisticsResponse,
  IStatistics,
  StatisticsRank,
} from "interface/Statistics.interface";
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

const getReviewStatistics = async (racketId: string, rank: StatisticsRank) => {
  const { data } = await axios(`/statistics/${racketId}`, {
    params: {
      rank,
    },
  });
  return data;
};

export const useReviewStatistics = (rank: StatisticsRank) => {
  const router = useRouter();
  const racketId = Number.parseInt(router.query.racketId as string);

  return useQuery<IReviewStatisticsResponse, AxiosError, IStatistics>(
    queryKeys.statistics.single(racketId, rank),
    () => getReviewStatistics(racketId, rank),
    {
      suspense: true,
      enabled: Number.isNaN(racketId) === false,
      select: (data) => {
        const { criteria, genders, ranks } = data;

        const criteriaEntries = Object.entries(criteria) as Array<
          [keyof typeof criteria, (typeof criteria)[keyof typeof criteria]]
        >;

        const gendersEntries = Object.entries(genders) as Array<
          [keyof typeof genders, (typeof genders)[keyof typeof genders]]
        >;

        const ranksEntries = Object.entries(ranks) as Array<
          [keyof typeof ranks, (typeof ranks)[keyof typeof ranks]]
        >;

        const transformedCriteria = criteriaEntries.map(([key, value]) => ({
          name: statisticsPropertyMapper.criteria[key],
          value,
          filled: colorMaper.criteria[key],
        }));

        const transformedGenders = gendersEntries.map(([key, value]) => ({
          name: statisticsPropertyMapper.genders[key],
          value,
          filled: colorMaper.gender[key],
        }));

        const transformedRanks = ranksEntries.map(([key, value]) => ({
          name: statisticsPropertyMapper.ranks[key],
          value,
          filled: colorMaper.rank[key],
        }));

        return {
          criteria: transformedCriteria,
          genders: transformedGenders,
          ranks: transformedRanks,
        };
      },
    },
  );
};
