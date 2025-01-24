import { createContext, FC, ReactNode, useMemo, useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";
import { accordionBaseCls } from "@consts/className";

interface AccordionCompoundProps {
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
  Item: typeof AccordionItem;
}

interface AccordionContextProps {
  openIndex: number[];
  toggleOpen: (index: number) => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  openIndex: [],
  toggleOpen: () => {},
});

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

const Accordion: FC<AccordionProps> & AccordionCompoundProps = ({
  children,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);
  const toggleOpen = (index: number) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const cls = useMemo(() => {
    return className ? `${className} ${accordionBaseCls}` : accordionBaseCls;
  }, [className, accordionBaseCls]);

  const contextValue = { openIndex, toggleOpen };
  return (
    <>
      <AccordionContext.Provider value={contextValue}>
        <div className={cls}>{children}</div>
      </AccordionContext.Provider>
    </>
  );
};

Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;

export default Accordion;
