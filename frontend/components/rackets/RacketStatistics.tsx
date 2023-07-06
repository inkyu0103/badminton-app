import HalfPieChart from "components/charts/HalfPieChart";
import SimpleBarChart from "components/charts/SimpleBarChart";
import {
  IRacketStatisticsProps,
  StatisticsRank,
} from "interface/Statistics.interface";
import { useReviewStatistics } from "query/reviews/statistics";
import React, { useState } from "react";

const RacketStatistics = () => {
  const [rank, setRank] = useState<StatisticsRank>("ALL");
  const { data: reviewStatistics } = useReviewStatistics(rank);
  const isEmpty = reviewStatistics?.genders.length === 0;

  const handleChangeRank = (value: StatisticsRank) => {
    setRank(value);
  };

  return (
    <RacketStatisticsView
      isEmpty={isEmpty}
      reviewStatistics={reviewStatistics}
      handleChangeRank={handleChangeRank}
    />
  );
};
export default RacketStatistics;

export const RacketStatisticsView = ({
  isEmpty = false,
  reviewStatistics,
  handleChangeRank,
}: IRacketStatisticsProps) => {
  return (
    <section className="mx-auto max-md:flex max-md:flex-col max-md:items-center">
      <div className="flex items-center gap-2">
        <p className="my-4 text-2xl font-bold">라켓 데이터</p>
        <select
          className="text-xl font-bold"
          onChange={(e) => handleChangeRank(e.target.value as StatisticsRank)}
        >
          <option value="ALL">전체</option>
          <option value="S">S조</option>
          <option value="A">A조</option>
          <option value="B">B조</option>
          <option value="C">C조</option>
          <option value="D">D조</option>
        </select>
      </div>

      {isEmpty ? (
        <div className="flex justify-center p-4">
          <p data-testid="empty statistics message" className="text-xl">
            조건에 맞는 통계 결과가 없습니다.
          </p>
        </div>
      ) : (
        <div className="md:flex md:justify-between">
          <HalfPieChart
            data={reviewStatistics?.genders}
            title="남녀 성별 비율"
          />
          <HalfPieChart data={reviewStatistics?.ranks} title="사용 급수 비율" />
          <SimpleBarChart
            data={reviewStatistics?.criteria}
            title="라켓 선택 이유"
          />
        </div>
      )}
    </section>
  );
};
