import { FC, ReactNode, useMemo } from "react";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import { PopoverBaseCls } from "../../consts/className";

interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverProps {
  children: ReactNode;
  className?: string;
}

const Popover: FC<PopoverProps> & PopoverCompoundProps = ({
  children,
  className,
}) => {
  const PopoverCls = useMemo(() => {
    return className ? `${className} ${PopoverBaseCls}` : PopoverBaseCls;
  }, [className, PopoverBaseCls]);

  return <div className={PopoverCls}>{children}</div>;
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
