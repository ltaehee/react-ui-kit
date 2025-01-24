import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselItemBaseCls } from "@consts/className";

interface CarouselItemProps {
  index: number;
  className?: string;
}

const CarouselItem = ({ index, className }: CarouselItemProps) => {
  const carouselItemCls = className
    ? `${className} ${carouselItemBaseCls}`
    : carouselItemBaseCls;

  const { carouselIndex } = useContext(CarouselContext);

  return carouselIndex === index ? (
    <div className={carouselItemCls}>item{index + 1}</div>
  ) : null;
};

export default CarouselItem;
