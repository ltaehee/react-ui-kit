import { FC, ReactNode, useContext, useMemo } from "react";
import { SelectContext } from ".";
import Popover from "@ui/Popover";
import { selectTriggerCls } from "@consts/className";

interface SelectTriggerProps {
  className?: string;
  children?: ReactNode;
}

const SelectTrigger: FC<SelectTriggerProps> = ({ children, className }) => {
  const { selectedValue } = useContext(SelectContext);
  const triggerCls = useMemo(() => {
    return className ? `${className} ${selectTriggerCls}` : selectTriggerCls;
  }, [className, selectTriggerCls]);

  return (
    <Popover.Trigger className={triggerCls}>
      {selectedValue.label || children || "선택해주세요"}
    </Popover.Trigger>
  );
};

export default SelectTrigger;
