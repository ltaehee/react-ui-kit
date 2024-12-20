import { FC, ReactNode, useContext, useEffect, useMemo, useRef } from "react";
import { breadcrumbItemBaseCls } from "../../consts/className";
import { BreadcrumbContext } from ".";

interface BreadcrumbItemProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  href,
  children,
  className,
}) => {
  const breadcrumbItemCls = useMemo(() => {
    return className
      ? `${className} ${breadcrumbItemBaseCls}`
      : breadcrumbItemBaseCls;
  }, [className, breadcrumbItemBaseCls]);

  const itemRef = useRef<HTMLDivElement | null>(null);
  const { addItemWidth } = useContext(BreadcrumbContext);

  useEffect(() => {
    if (itemRef.current) {
      const itemWidth = itemRef.current.getBoundingClientRect().width;
      addItemWidth(itemWidth);
    }

    // console.log({ itemWidth });
  }, []);

  return (
    <>
      <div className={breadcrumbItemCls} ref={itemRef}>
        <a href={href}>{children}</a>
      </div>
    </>
  );
};

export default BreadcrumbItem;
