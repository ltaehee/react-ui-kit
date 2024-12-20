import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarNavigatorBaseCls } from "../../consts/className";

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
      <button onClick={handleClickPrev}>이전</button>
      <button onClick={handleClickNext}>다음</button>
    </div>
  );
};

export default CalendarNavigator;
