import { ReactNode, useContext, useMemo } from "react";
import { TabContext } from ".";
import { tabsMenuBaseCls } from "../../consts/className";
interface TabMenuProps {
  children: ReactNode;
  index: number;
  className?: string;
}

const TabMenu = ({ index, children, className }: TabMenuProps) => {
  const { handleSelectTab } = useContext(TabContext);

  const handleClick = () => {
    handleSelectTab(index);
  };

  const isActive = useMemo(() => index === index, [index, index]);

  const tabMenuCls = className
    ? `${className} ${tabsMenuBaseCls} `
    : tabsMenuBaseCls;

  return (
    <div className={tabMenuCls} data-active={isActive}>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default TabMenu;
