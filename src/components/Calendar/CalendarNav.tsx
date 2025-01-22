import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarNavigatorBaseCls } from "@consts/className";

interface CalendarNavigatorProps {
  className?: string;
}

const CalendarNavigator = ({ className }: CalendarNavigatorProps) => {
  const calendarNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${calendarNavigatorBaseCls}`
      : calendarNavigatorBaseCls;
  }, [className, calendarNavigatorBaseCls]);

  const { handleClickPrev, handleClickNext } = useContext(CalendarContext);

  return (
    <div className={calendarNavigatorCls}>
      <div onClick={handleClickPrev}>이전</div>
      <div onClick={handleClickNext}>다음</div>
    </div>
  );
};

export default CalendarNavigator;
