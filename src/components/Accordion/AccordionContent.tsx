import { accordionContentCls } from "@consts/className";
import { FC, ReactNode, useContext, useMemo } from "react";
import { AccordionContext } from ".";

interface contentProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

const AccordionContent: FC<contentProps> = ({ index, children, className }) => {
  const { openIndex } = useContext(AccordionContext);

  const isOpen = openIndex.includes(index as number);

  const cls = useMemo(() => {
    return className
      ? `${className} ${accordionContentCls}`
      : accordionContentCls;
  }, [className, accordionContentCls]);

  return (
    <div className={cls} style={{ display: isOpen ? "block" : "none" }}>
      {children}
    </div>
  );
};

export default AccordionContent;
