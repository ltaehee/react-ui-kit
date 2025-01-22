import { createContext, FC, ReactNode, useState } from "react";
import SelectTrigger from "./SelectTrigger";
import SelectContent from "./SelectContent";
import SelectItem from "./SelectItem";
import Popover from "@ui/Popover";

const defaultSelectedItemValue: SelectedItemValue = { value: "", label: "" };

type SelectedItemValue = {
  value: string;
  label: ReactNode;
};

interface SelectCompoundProps {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
}

interface SelectContextProps {
  selectedValue: SelectedItemValue;
  handleChangeValue: (selectedValue: SelectedItemValue) => void;
}

export const SelectContext = createContext<SelectContextProps>({
  selectedValue: defaultSelectedItemValue,
  handleChangeValue: () => {},
});

interface SelectProps {
  children: ReactNode;
  onChange: (selectedValue: string) => void;
  className?: string;
  value: string;
}

const Select: FC<SelectProps> & SelectCompoundProps = ({
  children,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<SelectedItemValue>(
    defaultSelectedItemValue
  );

  const handleChangeValue = (selectedItem: SelectedItemValue) => {
    setSelectedValue(selectedItem);
    onChange(selectedItem.value);
  };

  /* const cls = useMemo(() => {
    return className ? `${className} ${selectBaseCls}` : selectBaseCls;
  }, [className, selectBaseCls]); */

  const contextValue = { selectedValue, handleChangeValue };
  return (
    <>
      <SelectContext.Provider value={contextValue}>
        <Popover position="bottom-left">{children}</Popover>
      </SelectContext.Provider>
    </>
  );
};

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;

export default Select;
