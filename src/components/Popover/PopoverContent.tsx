import {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PopoverContext } from ".";
import { createPortal } from "react-dom";
import { popoverContentBaseCls } from "@consts/className";

interface PopoverContentProps {
  className?: string;
  children: ReactNode;
}

const PopoverContent: FC<PopoverContentProps> = ({ className, children }) => {
  const { isOpen, setIsOpen, triggerRef, position } =
    useContext(PopoverContext);

  const [resizePosition, setResizePosition] = useState({ top: 0, left: 0 });

  const contentPosition = () => {
    if (triggerRef.current) {
      const triggerPosition = triggerRef.current.getBoundingClientRect();
      switch (position) {
        case "bottom-left":
          return {
            top: triggerPosition.top + triggerPosition.height,
            left: triggerPosition.left,
          };
        case "bottom-center":
          return {
            top: triggerPosition.top + triggerPosition.height,
            left: triggerPosition.left + triggerPosition.width / 2,
          };
        case "bottom-right":
          return {
            top: triggerPosition.top + triggerPosition.height,
            left: triggerPosition.left + triggerPosition.width,
          };

        default:
          return {
            top: triggerPosition.top + triggerPosition.height,
            left: triggerPosition.left,
          };
      }
    }
    return { top: 0, left: 0 };
  }; /* usecallback 처리 해야함*/

  const handleResize = () => {
    setResizePosition(contentPosition);
  };

  /* 팝오버 외부영역 클릭시 닫히게 */
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const popoverContent = contentRef.current;
    const popoverTrigger = triggerRef.current;
    if (
      popoverTrigger &&
      !popoverTrigger.contains(e.target as Node) &&
      popoverContent &&
      !popoverContent.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    setResizePosition(contentPosition);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const PopoverContentCls = useMemo(() => {
    return className
      ? `${className} ${popoverContentBaseCls}`
      : popoverContentBaseCls;
  }, [className, popoverContentBaseCls]);

  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div
              ref={contentRef}
              className={PopoverContentCls}
              style={{
                position: "absolute",
                top: `${resizePosition.top}px`,
                left: `${resizePosition.left}px`,
              }}
            >
              {children}
            </div>
          )}
        </>,
        document.body
      )}
    </>
  );
};

export default PopoverContent;
