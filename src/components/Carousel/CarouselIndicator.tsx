import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselIndigatorBaseCls } from "@consts/className";

interface CarouselIndicatorProps {
  className?: string;
}

const CarouselIndicator = ({ className }: CarouselIndicatorProps) => {
  const carouselIndigatorCls = className
    ? `${className} ${carouselIndigatorBaseCls}`
    : carouselIndigatorBaseCls;

  const { setCarouselIndex, itemLength } = useContext(CarouselContext);

  return (
    <div className={carouselIndigatorCls}>
      {Array.from({ length: itemLength }).map((_, index) => (
        <button key={index} onClick={() => setCarouselIndex(index)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
