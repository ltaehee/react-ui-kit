import { FC, ReactNode } from "react";

interface ToastProps {
  className?: string;
  onClose: () => void;
  children?: ReactNode;
}
const ToastClose: FC<ToastProps> = ({ onClose, children }) => {
  return <div onClick={onClose}>{children}</div>;
};

export default ToastClose;
