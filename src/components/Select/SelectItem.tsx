import { FC, ReactNode, useContext, useMemo } from "react";
import { SelectContext } from ".";
import { selectItemCls } from "@consts/className";

interface SelectItemProps {
  children: ReactNode;
  className?: string;
  value: string;
}

const SelectItem: FC<SelectItemProps> = ({ children, className, value }) => {
  const { handleChangeValue } = useContext(SelectContext);

  const handleClickItem = () => {
    handleChangeValue({ value, label: children });
  };

  const cls = useMemo(() => {
    return className ? `${className} ${selectItemCls}` : selectItemCls;
  }, [className, selectItemCls]);

  return (
    <>
      <div className={cls} onClick={handleClickItem}>
        {children}
      </div>
    </>
  );
};

export default SelectItem;
