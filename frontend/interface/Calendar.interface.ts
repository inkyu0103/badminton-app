export interface CalendarProps {
  value: Date | undefined | null;
  handleChangeDate: (date: Date | null) => {};
}
