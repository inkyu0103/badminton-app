export type formIdType = "control" | "power" | "weight";

type controlValue = "EASY" | "HARD";
type powerValue = "EASY" | "HARD";
type weightValue = "LIGHT" | "MEDIUM" | "HEAVY";

interface IControlOption {
  value: controlValue;
  display: string;
}

interface IPowerOption {
  value: powerValue;
  display: string;
}

interface IWeightOption {
  value: weightValue;
  display: string;
}

export interface ISelectList {
  control: IControlOption[];
  power: IPowerOption[];
  weight: IWeightOption[];
}

type ISelectListKey = keyof ISelectList;

export type ISelectListValue<K extends ISelectListKey> = ISelectList[K];

export interface ISelectBoxProps {
  display: string;
  isSelected?: boolean;
  handleSelectedBox: () => void;
}
