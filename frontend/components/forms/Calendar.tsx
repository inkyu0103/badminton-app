import { CalendarProps } from "interface/Calendar.interface";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ value, handleChangeDate }: CalendarProps) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="w-full py-2 text-sm rounded-md shadow-md cursor-pointer outline outline-1 outline-white hover:outline-blue-200 indent-2"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </div>
  ));

  CustomInput.displayName = "CustomInput";

  return (
    <DatePicker
      selected={value}
      onChange={handleChangeDate}
      customInput={<CustomInput />}
      dateFormat="yyyy년 MM월 dd일"
      locale={ko}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};
export default Calendar;
