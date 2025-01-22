import { FC, ReactNode, useContext, useMemo } from "react";
import { ModalContext } from ".";
import { createPortal } from "react-dom";
import { modalContentCls } from "@consts/className";

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

const ModalContent: FC<ModalContentProps> = ({ children, className }) => {
  const { isOpen } = useContext(ModalContext);

  const modalContentsCls = useMemo(() => {
    return className ? `${className} ${modalContentCls}` : modalContentCls;
  }, [className, modalContentCls]);

  return (
    <>
      {createPortal(
        isOpen && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "999",
            }}
            className={modalContentsCls}
          >
            {children}
          </div>
        ),
        document.body
      )}
    </>
  );
};

export default ModalContent;
