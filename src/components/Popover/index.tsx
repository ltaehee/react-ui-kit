import { createContext, FC, ReactNode, useMemo, useRef, useState } from "react";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import { popoverBaseCls } from "@consts/className";

interface PopoverContextProps {
  handleClickTrigger: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
  position: string | undefined;
}

export const PopoverContext = createContext<PopoverContextProps>({
  handleClickTrigger: () => {},
  isOpen: false,
  setIsOpen: () => {},
  triggerRef: { current: null },
  position: "bottom-left",
});

interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverProps {
  children: ReactNode;
  className?: string;
  position?: string;
}

const Popover: FC<PopoverProps> & PopoverCompoundProps = ({
  children,
  className,
  position,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const PopoverCls = useMemo(() => {
    return className ? `${className} ${popoverBaseCls}` : popoverBaseCls;
  }, [className, popoverBaseCls]);

  const handleClickTrigger = () => {
    setIsOpen(!isOpen);
  };

  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = {
    handleClickTrigger,
    isOpen,
    setIsOpen,
    triggerRef,
    position,
  };

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className={PopoverCls}>{children}</div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
