import { useContext } from "react";
import { TabContext } from ".";
import { ReactNode } from "react";
import { tabsPannelBaseCls } from "../../consts/className";

interface TabPannelProps {
  children: ReactNode;
  index: number;
  className?: string;
}

const TabPannel = ({ index, children, className }: TabPannelProps) => {
  const tabsPannelCls = className
    ? `${tabsPannelBaseCls} ${className}`
    : tabsPannelBaseCls;
  const { selectTab } = useContext(TabContext);
  return selectTab === index ? (
    <div className={tabsPannelCls}>{children}</div>
  ) : null;
};

export default TabPannel;
