import { FC, ReactNode, useContext, useMemo } from "react";
import { PopoverContext } from ".";
import { popoverTriggerBaseCls } from "@consts/className";

interface PopoverTriggerProps {
  className?: string;
  children: ReactNode;
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ className, children }) => {
  const { handleClickTrigger, triggerRef } = useContext(PopoverContext);

  const PopoverTriggerCls = useMemo(() => {
    return className
      ? `${className} ${popoverTriggerBaseCls}`
      : popoverTriggerBaseCls;
  }, [className, popoverTriggerBaseCls]);

  return (
    <>
      <div
        ref={triggerRef}
        className={PopoverTriggerCls}
        onClick={handleClickTrigger}
        style={{
          position: "relative",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PopoverTrigger;
