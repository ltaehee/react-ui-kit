import { createContext, FC, ReactNode, useMemo, useState } from "react";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";
import ModalBackdrop from "./ModalBackdrop";
import ModalClose from "./ModalClose";
import { modalBaseCls } from "@consts/className";

interface ModalCompoundProps {
  Trigger: typeof ModalTrigger;
  Content: typeof ModalContent;
  Backdrop: typeof ModalBackdrop;
  Close: typeof ModalClose;
}

interface ModalProps {
  children: ReactNode;
  className?: string;
  open: boolean;
  onCloseModal: () => void;
}

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOpenModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  onOpenModal: () => {},
});

const Modal: FC<ModalProps> & ModalCompoundProps = ({
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenModal = () => {
    setIsOpen(true);
  };

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalBaseCls}` : modalBaseCls;
  }, [className, modalBaseCls]);

  const contextValue = { isOpen, setIsOpen, onOpenModal };

  return (
    <ModalContext.Provider value={contextValue}>
      <div className={modalCls}>{children}</div>
    </ModalContext.Provider>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

export default Modal;
