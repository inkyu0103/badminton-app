import Calendar from "components/forms/Calendar";
import { CalendarProps } from "interface/Calendar.interface";

export default {
  component: Calendar,
};

export const Default = (args: CalendarProps) => (
  <div className="w-mb">
    <Calendar {...args} />
  </div>
);

Default.args = {
  value: new Date(0),
  handleChangeDate: () => {},
};
