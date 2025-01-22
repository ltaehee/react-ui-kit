import { carouselItemListBaseCls } from "@consts/className";
import { ReactNode } from "react";

interface CarouselItemListProps {
  children?: ReactNode;
  className?: string;
}

const CarouselItemList = ({ children, className }: CarouselItemListProps) => {
  const carouselItemListCls = className
    ? `${className} ${carouselItemListBaseCls}`
    : carouselItemListBaseCls;
  return (
    <>
      <div className={carouselItemListCls}>{children}</div>
    </>
  );
};

export default CarouselItemList;
