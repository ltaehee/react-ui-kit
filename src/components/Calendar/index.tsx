import { createContext, FC, ReactNode, useMemo, useState } from "react";
import CalendarCurrent from "./CalendarCur";
import CalendarNavigator from "./CalendarNav";
import CalendarBody from "./CalendarBody";
import { calendarBaseCls } from "../../consts/className";

interface CalendarCompoundProps {
  Body: typeof CalendarBody;
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
}

interface CalendarContextProps {
  currentDate: Date;
  handleClickPrev: () => void;
  handleClickNext: () => void;
}

export const CalendarContext = createContext<CalendarContextProps>({
  currentDate: new Date(),
  handleClickPrev: () => {},
  handleClickNext: () => {},
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
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  /* 네비게이트 버튼 함수 */
  const handleClickPrev = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };
  const handleClickNext = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  // currentDate가 변경될 때마다 부모 컴포넌트로 변경된 날짜 전달

  const calendarContextValue = {
    currentDate,
    handleClickPrev,
    handleClickNext,
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
