import { Dispatch, SetStateAction } from "react";

export interface CalendarProps {
  value: Date | undefined | null;
  handleChangeDate: Dispatch<SetStateAction<Date>>;
}
