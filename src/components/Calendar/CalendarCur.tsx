import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarCurrentBaseCls } from "@consts/className";

interface CalendarCurrentProps {
  className?: string;
}

const CalendarCurrent = ({ className }: CalendarCurrentProps) => {
  const { currentDate } = useContext(CalendarContext);

  const calendarCurrentCls = useMemo(() => {
    return className
      ? `${className} ${calendarCurrentBaseCls}`
      : calendarCurrentBaseCls;
  }, [className, calendarCurrentBaseCls]);
  return (
    <div className={calendarCurrentCls}>
      {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
    </div>
  );
};

export default CalendarCurrent;
