import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import CarouselItemList from "./CarouselItemList";
import CarouselItem from "./CarouselItem";
import CarouselNavigator from "./CarouselNavigator";
import CarouselIndicator from "./CarouselIndicator";
import { carouselBaseCls } from "@consts/className";

interface CarouselContextProps {
  children?: ReactNode;
  carouselIndex: number;
  setCarouselIndex: Dispatch<SetStateAction<number>>;
  itemLength: number;
}
export const CarouselContext = createContext<CarouselContextProps>({
  carouselIndex: 0,
  setCarouselIndex: () => {},
  itemLength: 0,
});

interface CarouselCompoundProps {
  ItemList: typeof CarouselItemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemLength: number;
}

const Carousel: FC<CarouselProps> & CarouselCompoundProps = ({
  children,
  className,
  itemLength,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const contextValue = {
    carouselIndex,
    setCarouselIndex,
    itemLength,
  };

  const carouselCls = className
    ? `${className} ${carouselBaseCls}`
    : carouselBaseCls;

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className={carouselCls}>{children}</div>
    </CarouselContext.Provider>
  );
};

export default Carousel;

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;
