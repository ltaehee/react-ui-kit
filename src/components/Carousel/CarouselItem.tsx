import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselItemBaseCls } from "../../consts/className";

interface CarouselItemProps {
  index: number;
  className?: string;
}

const CarouselItem = ({ index, className }: CarouselItemProps) => {
  const carouselItemCls = className
    ? `${className} ${carouselItemBaseCls}`
    : carouselItemBaseCls;

  const { selectTab } = useContext(CarouselContext);

  return selectTab === index ? (
    <div className={carouselItemCls}>item{index + 1}</div>
  ) : null;
};

export default CarouselItem;
