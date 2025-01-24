import { accordionItemCls } from "@consts/className";
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";

interface itemProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const AccordionItem: FC<itemProps> = ({ index, children, className }) => {
  const cls = useMemo(() => {
    return className ? `${className} ${accordionItemCls}` : accordionItemCls;
  }, [className, accordionItemCls]);

  return (
    <div className={cls}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // 자식 엘리먼트가 index값을 사용할 수 있게 합
          return cloneElement(child as ReactElement, { index });
        }
        return child;
      })}
    </div>
  );
};

export default AccordionItem;
