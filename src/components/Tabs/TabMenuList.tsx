import { tabsMenuListBaseCls } from "@consts/className";
import { ReactNode } from "react";

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
