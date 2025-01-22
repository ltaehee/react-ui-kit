import {
  Children,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./style.css";
import BreadcrumbSeparte from "./BreadcrumbSeparte";
import BreadcrumbItem from "./BreadcrumbItem";
import { breadcrumbBaseCls } from "@consts/className";

interface BreadcrumbCompoundProps {
  Item: typeof BreadcrumbItem;
}

interface BreadcrumbContextProps {
  addItemWidth: (width: number) => void;
}

export const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  addItemWidth: () => {},
});

interface BreadcrumbProps {
  children: ReactNode;
  width: string;
  className?: string;
}
const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompoundProps = ({
  children,
  width,
  className,
}) => {
  const breadcrumbCls = useMemo(() => {
    return className ? `${className} ${breadcrumbBaseCls}` : breadcrumbBaseCls;
  }, [className, breadcrumbBaseCls]);

  const [totalWidth, setTotalWidth] = useState(0);
  const [showEllipsis, setShowEllipsis] = useState(false);

  const addItemWidth = (width: number) => {
    setTotalWidth((prev) => prev + width);
  };

  const contextValue = {
    addItemWidth,
  };

  const containerWidth = parseInt(width);
  useEffect(() => {
    if (totalWidth > containerWidth) {
      setShowEllipsis(true);
    } else {
      setShowEllipsis(false);
    }

    // console.log("전체 width:", totalWidth);
  }, [totalWidth, containerWidth]);

  const breadChildren = Children.toArray(children);

  const breadChildrenUl = () => {
    if (showEllipsis) {
      return (
        <>
          <li>
            {breadChildren[0]}
            <BreadcrumbSeparte />
          </li>
          <li>...</li>
          <li>
            <BreadcrumbSeparte />
            {breadChildren[breadChildren.length - 1]}
          </li>
        </>
      );
    } else {
      return (
        <>
          {breadChildren.map((child, index) => (
            <li key={index}>
              {child}
              {index < breadChildren.length - 1 && <BreadcrumbSeparte />}
            </li>
          ))}
        </>
      );
    }
  };
  return (
    <BreadcrumbContext.Provider value={contextValue}>
      <ul className={breadcrumbCls} style={{ width }}>
        {breadChildrenUl()}
      </ul>
    </BreadcrumbContext.Provider>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
