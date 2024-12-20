import { createContext, FC, ReactNode, useState } from "react";
import TabMenu from "./TabMenu";
import TabMenuList from "./TabMenuList";
import TabPannel from "./TabPannel";
import { tabsBaseCls } from "../../consts/className";

/* export interface BaseProps {
  index: number;
  children: ReactNode;
} */

interface TabContextProps {
  children?: ReactNode;
  selectTab: number;
  handleSelectTab: (value: number) => void;
}
export const TabContext = createContext<TabContextProps>({
  selectTab: 1,
  handleSelectTab: () => {},
  children: null,
});

interface TabsCompoundProps {
  Menu: typeof TabMenu;
  MenuList: typeof TabMenuList;
  Pannel: typeof TabPannel;
}
interface TabsProps {
  children?: ReactNode;
  className?: string;
  onChangeTab: (index: number) => void;
}

const Tabs: FC<TabsProps> & TabsCompoundProps = ({
  children,
  className,
  onChangeTab,
}) => {
  const [selectTab, setSelectTab] = useState<number>(1);

  const handleSelectTab = (value: number) => {
    setSelectTab(value);
    if (onChangeTab) {
      onChangeTab(value);
    }
  };
  /* const handleSelectTab = (index: number) => {
    if (selectTab === index) return;
    setSelectTab(index);
    if (onChangeTab) {
      onChangeTab(index);
    }
  }; */
  const contextValue: TabContextProps = {
    selectTab,
    handleSelectTab,
  };

  // props으로 className 넘겨주면 해당 className이랑 붙여서(한칸 띄어서) 사용
  // 안념겨주면, 원래 기존에 있던 BaseCls 사용;
  const tabsCls = className ? `${className} ${tabsBaseCls}` : tabsBaseCls;

  return (
    <TabContext.Provider value={contextValue}>
      <div className={tabsCls}>{children}</div>
    </TabContext.Provider>
  );
};
export default Tabs;

Tabs.Menu = TabMenu;
Tabs.MenuList = TabMenuList;
Tabs.Pannel = TabPannel;
