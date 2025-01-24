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

  const { setCarouselIndex, itemLength } = useContext(CarouselContext);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= itemLength - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev <= 0 ? itemLength - 1 : prev - 1));
  };
  return (
    <div className={carouseNavigatorCls}>
      {children ? (
        children(handlePrev, handleNext)
      ) : (
        <>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </>
      )}
    </div>
  );
};

export default CarouselNavigator;
