import { accordionTriggerCls } from "@consts/className";
import { FC, ReactNode, useContext, useMemo } from "react";
import { AccordionContext } from ".";

interface triggerProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

const AccordionTrigger: FC<triggerProps> = ({ index, children, className }) => {
  const { toggleOpen } = useContext(AccordionContext);

  const cls = useMemo(() => {
    return className
      ? `${className} ${accordionTriggerCls}`
      : accordionTriggerCls;
  }, [className, accordionTriggerCls]);

  return (
    <div className={cls} onClick={() => toggleOpen(index as number)}>
      {children}
    </div>
  );
};

export default AccordionTrigger;
