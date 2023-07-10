import "@testing-library/jest-dom/extend-expect";

import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RacketSpec, { RacketSpecProps } from "components/rackets/RacketSpec";

const testRacketSpec: RacketSpecProps = {
  balance: "HEAD_HEAVY",
  shaft: "FLEXIBLE",
  weight: ["W3U"],
  score: 5,
};

const selectedColorClassName = "bg-blue-200";

it('밸런스가 "HEAD_HEAVY"인 경우, 해당 항목에 bg-blue-200이 적용되어있는지 확인합니다.', () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);
  expect(screen.getByTestId(/HEAD_HEAVY/).getAttribute("class")).toContain(
    selectedColorClassName,
  );
});
it('샤프트 강도가 "FLEXIBLE"인 경우, 해당 항목에 bg-blue-200이 적용되어있는지 확인합니다.', () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);

  expect(screen.getByTestId(/FLEXIBLE/).getAttribute("class")).toContain(
    selectedColorClassName,
  );
});

it("무게가 W3U인 경우, 해당 항목에 bg-blue-200이 적용되어있는지 확인합니다.", () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);

  expect(screen.getByTestId(/W3U/).getAttribute("class")).toContain(
    selectedColorClassName,
  );
});

it("무게 항목에 마우스를 올리면, 무게와 관련된 툴팁이 나타나는지 확인합니다.", async () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);

  await act(
    async () =>
      await userEvent.hover(screen.getByTestId("weight container"), {
        delay: 500,
      }),
  );

  expect(screen.getByTestId("weight tooltip")).toBeInTheDocument();
});

it("밸런스 항목에 마우스를 올리면, 밸런스와 관련된 툴팁이 나타나는지 확인합니다.", async () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);

  await act(
    async () =>
      await userEvent.hover(screen.getByTestId("balance container"), {
        delay: 500,
      }),
  );
  expect(screen.getByTestId("balance tooltip")).toBeInTheDocument();
});

it("탄성 항목에 마우스를 올리면, 탄성과 관련된 툴팁이 나타나는지 확인합니다.", async () => {
  const screen = render(<RacketSpec {...testRacketSpec} />);

  await act(
    async () =>
      await userEvent.hover(screen.getByTestId("flexibility container"), {
        delay: 500,
      }),
  );
  expect(screen.getByTestId("flexibility tooltip")).toBeInTheDocument();
});
