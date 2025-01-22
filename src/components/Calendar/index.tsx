import { createContext, FC, ReactNode, useMemo, useState } from "react";
import CalendarCurrent from "./CalendarCur";
import CalendarNavigator from "./CalendarNav";
import CalendarBody from "./CalendarBody";
import { calendarBaseCls } from "@consts/className";

interface CalendarCompoundProps {
  Body: typeof CalendarBody;
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
}

interface CalendarContextProps {
  currentDate: Date;
  handleClickPrev: () => void;
  handleClickNext: () => void;
  handleChangeDate: (selectedDate: Date) => void;
}

export const CalendarContext = createContext<CalendarContextProps>({
  currentDate: new Date(),
  handleClickPrev: () => {},
  handleClickNext: () => {},
  handleChangeDate: () => {},
});

interface CalendarProps {
  children?: ReactNode;
  className?: string;
  onChange: (newDate: Date) => void;
  value: Date;
}
const Calendar: FC<CalendarProps> & CalendarCompoundProps = ({
  children,
  className,
  onChange,
  value,
}) => {
  const [currentDate, setCurrentDate] = useState(value);

  /* 네비게이트 버튼 함수 */
  const handleClickPrev = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
    onChange(prevMonth);
  };
  const handleClickNext = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
    onChange(nextMonth);
  };

  const handleChangeDate = (selectedDate: Date) => {
    setCurrentDate(selectedDate);
    onChange(selectedDate);
  };

  const calendarContextValue = {
    currentDate,
    handleClickPrev,
    handleClickNext,
    handleChangeDate,
  };

  const calendarCls = useMemo(() => {
    return className ? `${className} ${calendarBaseCls}` : calendarBaseCls;
  }, [className, calendarBaseCls]);

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <div className={calendarCls}>{children}</div>
    </CalendarContext.Provider>
  );
};

export default Calendar;

Calendar.Body = CalendarBody;
Calendar.Current = CalendarCurrent;
Calendar.Navigator = CalendarNavigator;
