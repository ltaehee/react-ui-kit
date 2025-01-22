import { useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationButtonsBaseCls } from "@consts/className";

interface PageButtonsProps {
  className?: string;
}

const PageButtons = ({ className }: PageButtonsProps) => {
  const { currentPage, onPageChange, totalPage, pageBlockSize } =
    useContext(PaginationContext);

  const currentPages = useMemo(() => {
    const currentPageButton: number =
      Math.floor(totalPage / pageBlockSize) >
      Math.floor((currentPage - 1) / pageBlockSize)
        ? pageBlockSize
        : totalPage %
          pageBlockSize; /* 마지막 페이지에 버튼 갯수 pageBlockSize보다 작게 남았을때  */

    return new Array(currentPageButton)
      .fill(0) /* map이 돌아가기위한?? 0으로 배열을 미리 채워둠 */
      .map(
        (_, i) =>
          i +
          1 +
          Math.floor((currentPage - 1) / pageBlockSize) *
            pageBlockSize /* 1부터 나와야하니까 i + 1 */
      );
  }, [currentPage, totalPage, pageBlockSize]);

  const changePage = (page: number) => {
    if (page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  /*  */
  const pageButtonsCls = useMemo(() => {
    return className
      ? `${className} ${paginationButtonsBaseCls}`
      : paginationButtonsBaseCls;
  }, [className, paginationButtonsBaseCls]);
  return (
    <>
      <div className={pageButtonsCls}>
        {currentPages.map((page) => (
          <button
            onClick={() => changePage(page)}
            disabled={currentPage === page}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default PageButtons;
