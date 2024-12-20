import { FC, ReactNode, useMemo } from "react";
import { PopoverContentBaseCls } from "../../consts/className";

interface PopoverContentProps {
  className?: string;
  children: ReactNode;
}

const PopoverContent: FC<PopoverContentProps> = ({ className, children }) => {
  const PopoverContentCls = useMemo(() => {
    return className
      ? `${className} ${PopoverContentBaseCls}`
      : PopoverContentBaseCls;
  }, [className, PopoverContentBaseCls]);
  return (
    <>
      <div className={PopoverContentCls}>{children}</div>
    </>
  );
};

export default PopoverContent;
