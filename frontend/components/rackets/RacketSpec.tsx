import { Tbalance, Tshaft, Tweight } from "interface/Racket.interface";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { Tooltip } from "react-tooltip";
import deepFreeze from "utils/deepFreeze";

export interface RacketSpecProps {
  score: number;
  weight: Tweight[];
  balance: Tbalance;
  shaft: Tshaft;
}

const selectBoxCssConfig = deepFreeze({
  background: {
    selected: "bg-blue-200",
    notSelected: "bg-white",
  },
});

const isWeightSelected = (weight: Tweight[], target: Tweight) =>
  weight.includes(target)
    ? selectBoxCssConfig["background"]["selected"]
    : selectBoxCssConfig["background"]["notSelected"];

const isBalanceSelected = (balance: Tbalance, target: Tbalance) =>
  balance === target
    ? selectBoxCssConfig["background"]["selected"]
    : selectBoxCssConfig["background"]["notSelected"];

const isShaftSelected = (shaft: Tshaft, target: Tshaft) =>
  shaft === target
    ? selectBoxCssConfig["background"]["selected"]
    : selectBoxCssConfig["background"]["notSelected"];

const RacketSpec = ({ score, weight, balance, shaft }: RacketSpecProps) => {
  return (
    <section className="flex justify-between mx-auto max-md:flex max-md:flex-col max-md:items-center gap-y-4">
      <div className=" w-mb h-mb">
        <Image
          width={328}
          height={328}
          alt="racket"
          src="https://staging-mobae-image.s3.ap-northeast-2.amazonaws.com/racket.png"
          className="mx-auto "
        />
      </div>

      <div className="flex items-center justify-center w-mb h-mb">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-2xl font-bold">평균 별점</p>
          <Rating
            initialValue={score}
            readonly
            allowFraction
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
          />
          <p className="text-3xl font-bold">{score}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center w-mb h-mb gap-y-4">
        <p className="text-2xl font-bold">라켓 스펙</p>
        <Tooltip id="weight">
          <div className="flex flex-col" data-testid="weight tooltip">
            <span>U 앞에 붙은 숫자가 클수록 가벼운 라켓입니다.</span>
            <span>일반적으로 4U라켓을 사용합니다.</span>
          </div>
        </Tooltip>
        <div data-tooltip-id="weight" data-testid="weight container">
          <p className="text-xl font-bold ">무게</p>
          <div className="flex">
            <p
              data-testid="W3U"
              className={`flex-1 py-1 text-center ${isWeightSelected(
                weight,
                "W3U",
              )}`}
            >
              3U
            </p>
            <p
              data-testid="W4U"
              className={`flex-1 py-1 text-center ${isWeightSelected(
                weight,
                "W4U",
              )}`}
            >
              4U
            </p>
            <p
              data-testid="W5U"
              className={`flex-1 py-1 text-center ${isWeightSelected(
                weight,
                "W5U",
              )}`}
            >
              5U
            </p>
          </div>
        </div>

        <Tooltip id="balance">
          <div className="flex flex-col" data-testid="balance tooltip">
            <span>밸런스는 라켓의 중심점을 의미합니다.</span>
            <span>
              동일한 무게라도 밸런스에 따라 다른 느낌을 줄 수 있습니다.
            </span>
            <ul className="list-inside list-disc">
              <li>헤드 라이트 : 수비형</li>
              <li>이븐 밸런스 : 올라운드 형</li>
              <li>헤드 헤비 : 공격형</li>
            </ul>
          </div>
        </Tooltip>
        <div data-tooltip-id="balance" data-testid="balance container">
          <p className="text-xl font-bold">밸런스</p>
          <div className="flex">
            <p
              data-testid="HEAD_LIGHT"
              className={`flex-1 py-1 text-center ${isBalanceSelected(
                balance,
                "HEAD_LIGHT",
              )}`}
            >
              헤드 라이트
            </p>
            <p
              data-testid="EVEN"
              className={`flex-1 py-1 text-center  ${isBalanceSelected(
                balance,
                "EVEN",
              )}`}
            >
              이븐 밸런스
            </p>
            <p
              data-testid="HEAD_HEAVY"
              className={`flex-1 py-1 text-center ${isBalanceSelected(
                balance,
                "HEAD_HEAVY",
              )}`}
            >
              헤드 헤비
            </p>
          </div>
        </div>

        <Tooltip id="flexibility">
          <div className="flex flex-col" data-testid="flexibility tooltip">
            <span>유연성은 샤프트의 휘어짐의 정도를 의미합니다.</span>
            <ul className="list-inside list-disc">
              <li>유연한 라켓일수록 적은 힘으로 멀리 보낼 수 있습니다.</li>
              <li>단단한 라켓일수록 힘을 정확하게 전달할 수 있습니다.</li>
            </ul>
            <span>초보자 분들께는 부드러운 라켓사용을 추천드립니다.</span>
          </div>
        </Tooltip>
        <div data-tooltip-id="flexibility" data-testid="flexibility container">
          <p className="text-xl font-bold">탄성</p>
          <div className="flex">
            <p
              data-testid="FLEXIBLE"
              className={`flex-1 py-1 text-center  ${isShaftSelected(
                shaft,
                "FLEXIBLE",
              )}`}
            >
              부드러움
            </p>
            <p
              data-testid="MEDIUM"
              className={`flex-1 py-1 text-center ${isShaftSelected(
                shaft,
                "MEDIUM",
              )}`}
            >
              중간
            </p>
            <p
              data-testid="STIFF"
              className={`flex-1 py-1 text-center ${isShaftSelected(
                shaft,
                "STIFF",
              )}`}
            >
              단단함
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RacketSpec;
