import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import { RacketStatisticsView } from "components/rackets/RacketStatistics";
import { IStatistics } from "interface/Statistics.interface";

const emptyReviewStatistics: IStatistics = {
  criteria: [],
  genders: [],
  ranks: [],
};

describe("라켓 통계와 관련된 테스트를 수행합니다. ", () => {
  it("라켓 통계가 없는 경우, 사용자에게 통계 내용이 없다는 메시지를 렌더링합니다.", () => {
    const screen = render(
      <RacketStatisticsView
        isEmpty
        handleChangeRank={() => {}}
        reviewStatistics={emptyReviewStatistics}
      />,
    );
    expect(screen.getByTestId("empty statistics message")).toBeInTheDocument();
  });
});
