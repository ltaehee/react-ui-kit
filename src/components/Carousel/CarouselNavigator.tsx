import { ReactNode, useContext } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorBaseCls } from "@consts/className";

interface CarouselNavigatorProps {
  className?: string;
  children?: (prev: () => void, next: () => void) => ReactNode;
}

const CarouselNavigator = ({ className, children }: CarouselNavigatorProps) => {
  const carouseNavigatorCls = className
    ? `${className} ${carouselNavigatorBaseCls}`
    : carouselNavigatorBaseCls;

  const { setSelectTab, itemLength } = useContext(CarouselContext);

  const handleNext = () => {
    setSelectTab((prev) => (prev >= itemLength - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectTab((prev) => (prev <= 0 ? itemLength - 1 : prev - 1));
  };
  return (
    <div className={carouseNavigatorCls}>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default CarouselNavigator;
