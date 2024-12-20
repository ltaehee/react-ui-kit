import { FC, ReactNode, useMemo } from "react";
import { PopoverTriggerBaseCls } from "../../consts/className";

interface PopoverTriggerProps {
  className?: string;
  children: ReactNode;
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ className, children }) => {
  const PopoverTriggerCls = useMemo(() => {
    return className
      ? `${className} ${PopoverTriggerBaseCls}`
      : PopoverTriggerBaseCls;
  }, [className, PopoverTriggerBaseCls]);

  return (
    <>
      <div className={PopoverTriggerCls}>{children}</div>
    </>
  );
};

export default PopoverTrigger;
