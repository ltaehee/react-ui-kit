import { FC, ReactNode, useMemo } from "react";
import Popover from "@ui/Popover";
import { selectContentCls } from "@consts/className";

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}

const SelectContent: FC<SelectContentProps> = ({ children, className }) => {
  const contentsCls = useMemo(() => {
    return className ? `${className} ${selectContentCls}` : selectContentCls;
  }, [className, selectContentCls]);

  return (
    <>
      <Popover.Content className={contentsCls}>{children}</Popover.Content>
    </>
  );
};

export default SelectContent;
