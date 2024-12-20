import { ReactNode } from "react";
import { tabsMenuListBaseCls } from "../../consts/className";

interface TabMenuListProps {
  children: ReactNode;
  className?: string;
}

const TabMenuList = ({ children, className }: TabMenuListProps) => {
  const tabsMenuListCls = className
    ? `${tabsMenuListBaseCls} ${className}`
    : tabsMenuListBaseCls;
  return (
    <>
      <div className={tabsMenuListCls}>{children}</div>
    </>
  );
};

export default TabMenuList;
