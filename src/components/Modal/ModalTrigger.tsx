import {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { ModalContext } from ".";
import { modalTriggerCls } from "@consts/className";

interface ModalTriggerProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const ModalTrigger: FC<ModalTriggerProps> = ({ children, className }) => {
  const { onOpenModal } = useContext(ModalContext);

  const triggerCls = useMemo(() => {
    return className ? `${className} ${modalTriggerCls}` : modalTriggerCls;
  }, [className, modalTriggerCls]);

  if (children && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      onClick: onOpenModal,
    });
  }

  return (
    <button className={triggerCls} onClick={onOpenModal}>
      baseOpenBtn
    </button>
  );
};

export default ModalTrigger;
