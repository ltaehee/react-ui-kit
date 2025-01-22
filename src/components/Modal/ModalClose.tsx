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
import { modalCloseCls } from "@consts/className";

interface ModalCloseProps {
  children: ReactNode;
  className?: string;
}
const ModalClose: FC<ModalCloseProps> = ({ children, className }) => {
  const { setIsOpen } = useContext(ModalContext);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const closeCls = useMemo(() => {
    return className ? `${className} ${modalCloseCls}` : modalCloseCls;
  }, [className, modalCloseCls]);

  if (children && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      onClick: handleCloseModal,
    });
  }

  return (
    <button className={closeCls} onClick={handleCloseModal}>
      baseCloseBtn
    </button>
  );
};

export default ModalClose;
