import { createContext, FC, ReactNode, useMemo } from "react";
import PageButtons from "./PageButtons";
import PageNavigator from "./PageNavigator";
import { paginationBaseCls } from "@consts/className";

interface PaginationCompoundProps {
  PageButtons: typeof PageButtons;
  Navigator: typeof PageNavigator;
}

interface PaginationContextProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  itemLength: number;
  itemPerPage: number;
  totalPage: number;
  pageBlockSize: number;
}

export const PaginationContext = createContext<PaginationContextProps>({
  currentPage: 1,
  onPageChange: () => {},
  itemLength: 0,
  itemPerPage: 10,
  totalPage: 1,
  pageBlockSize: 5,
});

interface PaginationProps {
  itemLength: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  children: ReactNode;
  itemPerPage: number;
  pageBlockSize: number;
  className?: string;
}

const Pagination: FC<PaginationProps> & PaginationCompoundProps = ({
  itemLength,
  currentPage,
  onPageChange,
  children,
  itemPerPage,
  pageBlockSize,
  className,
}) => {
  const totalPage = Math.ceil(itemLength / itemPerPage);

  const contextValue = {
    currentPage,
    onPageChange,
    itemLength,
    itemPerPage,
    totalPage,
    pageBlockSize,
  };

  const paginationCls = useMemo(() => {
    return className ? `${className} ${paginationBaseCls}` : paginationBaseCls;
  }, [className, paginationBaseCls]);

  return (
    <>
      <PaginationContext.Provider value={contextValue}>
        <div className={paginationCls}>{children}</div>
      </PaginationContext.Provider>
    </>
  );
};

Pagination.PageButtons = PageButtons;
Pagination.Navigator = PageNavigator;

export default Pagination;
