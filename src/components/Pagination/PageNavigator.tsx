import { useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationNavigatorBaseCls } from "../../consts/className";

interface PageNavigatorProps {
  className?: string;
}

const PageNavigator = ({ className }: PageNavigatorProps) => {
  const { currentPage, onPageChange, totalPage } =
    useContext(PaginationContext);

  const changePage = (page: number) => {
    /* 이중으로 예외 처리 */
    if (page < 1 || page > totalPage || page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  /*  */
  const pageNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${paginationNavigatorBaseCls}`
      : paginationNavigatorBaseCls;
  }, [className, paginationNavigatorBaseCls]);

  return (
    <>
      <div className={pageNavigatorCls}>
        <button onClick={() => changePage(1)} disabled={currentPage === 1}>
          처음
        </button>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          다음
        </button>
        <button
          onClick={() => changePage(totalPage)}
          disabled={currentPage === totalPage}
        >
          마지막
        </button>
      </div>
    </>
  );
};

export default PageNavigator;
