import { FC, useContext, useEffect, useRef } from "react";
import { BreadcrumbContext } from ".";

interface BreadcrumbSeparteProps {}

const BreadcrumbSeparte: FC<BreadcrumbSeparteProps> = () => {
  const separateRef = useRef<HTMLDivElement | null>(null);
  const { addItemWidth } = useContext(BreadcrumbContext);

  useEffect(() => {
    if (separateRef.current) {
      const separateWidth = separateRef.current.getBoundingClientRect().width;
      addItemWidth(separateWidth);
    }
  }, []);

  return (
    <>
      <span ref={separateRef}>&gt;</span>
    </>
  );
};

export default BreadcrumbSeparte;
