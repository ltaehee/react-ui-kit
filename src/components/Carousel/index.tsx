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
  selectTab: number;
  setSelectTab: Dispatch<SetStateAction<number>>;
  itemLength: number;
}
export const CarouselContext = createContext<CarouselContextProps>({
  selectTab: 1,
  setSelectTab: () => {},
  children: null,
  itemLength: 1,
});

interface CarouselCompoundProps {
  ItemList: typeof CarouselItemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}

interface CarouselProps {
  children?: ReactNode;
  itemLength: number;
  className?: string;
}

/* const Carousel = ({ children, itemLength }: CarouselProps) => {
  const [selectTab, setSelectTab] = useState(1);
  const contextValue = { selectTab, setSelectTab, itemLength };
  return (
    <CarouselContext.Provider value={contextValue}>
      <div>{children}</div>
    </CarouselContext.Provider>
  );
}; */

const Carousel: FC<CarouselProps> & CarouselCompoundProps = ({
  children,
  itemLength,
  className,
}) => {
  const [selectTab, setSelectTab] = useState(1);
  const contextValue = { selectTab, setSelectTab, itemLength };

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
