import { FC, useContext, useMemo } from "react";
import { ModalContext } from ".";
import { createPortal } from "react-dom";
import { modalBackdropCls } from "@consts/className";

interface ModalBackdropProps {
  className?: string;
}

const ModalBackdrop: FC<ModalBackdropProps> = ({ className }) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const backdropCls = useMemo(() => {
    return className ? `${className} ${modalBackdropCls}` : modalBackdropCls;
  }, [className, modalBackdropCls]);

  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.3)",
                zIndex: 100,
              }}
              onClick={handleCloseModal}
              className={backdropCls}
            ></div>
          )}
        </>,
        document.body
      )}
    </>
  );
};

export default ModalBackdrop;
