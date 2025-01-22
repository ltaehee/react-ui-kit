import { FC, useMemo, useState } from "react";
import Popover from "@ui/Popover";
import Calendar from "@ui/Calendar";
import { datePickerBaseCls } from "@consts/className";

interface DatePickerProps {
  date: Date;
  onChangeDate: (newDate: Date) => void;
  className?: string;
}

const DatePicker: FC<DatePickerProps> = ({ date, onChangeDate, className }) => {
  const [pickDate, setPickDate] = useState<Date>(date);
  const handleChangeDate = (newDate: Date) => {
    setPickDate(newDate);
    onChangeDate(newDate);
  };

  const datePickerCls = useMemo(() => {
    return className ? `${className} ${datePickerBaseCls}` : datePickerBaseCls;
  }, [className, datePickerBaseCls]);
  return (
    <Popover position="bottom-left" className={datePickerCls}>
      <Popover.Trigger className="datepicker-trigger">
        {pickDate.toISOString().split("T")[0]}
      </Popover.Trigger>
      <Popover.Content className="datepicker-content">
        <Calendar onChange={handleChangeDate} value={date}>
          <Calendar.Current className="datepicker-calendar-current" />
          <Calendar.Navigator className="datepicker-calendar-navigator" />
          <Calendar.Body className="datepicker-calendar-body" />
        </Calendar>
      </Popover.Content>
    </Popover>
  );
};

export default DatePicker;
