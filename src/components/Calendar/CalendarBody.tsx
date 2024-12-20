import { useContext, useEffect, useMemo, useState } from "react";
import { CalendarContext } from ".";
import { calendarBodyBaseCls } from "../../consts/className";

interface CalendarBodyProps {
  className?: string;
}

const CalendarBody = ({ className }: CalendarBodyProps) => {
  const { currentDate } = useContext(CalendarContext);
  const [calendarDays, setCalendarDays] = useState<Date[][]>([]);

  const calendarBodyCls = useMemo(() => {
    return className
      ? `${className} ${calendarBodyBaseCls}`
      : calendarBodyBaseCls;
  }, [className, calendarBodyBaseCls]);

  const buildCalendarDays = () => {
    /* 현재 달 시작 요일*/
    const curMonthStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    /* 현재 달 마지막 날짜*/
    const curMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    /* 이전 달 마지막 날짜*/
    const prevMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    /* 이전 달 날짜 */
    const prevMonthDays = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        prevMonthEndDate - (curMonthStartDate - 1 - i)
      );
    });

    /* 현재 달 날짜 */
    const curMonthDays = Array.from({ length: curMonthEndDate }, (_, i) => {
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
    });

    /* 다음 달 날짜 */
    const nextMonthDays = Array.from(
      { length: 35 - (prevMonthDays.length + curMonthDays.length) },
      (_, i) => {
        return new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          i + 1
        );
      }
    );

    /* 전체 달력 날짜 */
    const allDays = [...prevMonthDays, ...curMonthDays, ...nextMonthDays];

    /* 7일씩 나누기 */
    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeks.push(allDays.slice(i, i + 7));
    }

    setCalendarDays(weeks);
  };

  useEffect(() => {
    buildCalendarDays();
  }, [currentDate]);
  return (
    <>
      <div className={calendarBodyCls}>
        {calendarDays.map((week, i) => (
          <div key={i}>
            {week.map((day, j) => (
              <div key={j}>{day.getDate()}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarBody;
