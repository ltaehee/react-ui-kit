import { FC } from "react";

interface ToastProps {
  className?: string;
  onClose: () => void;
}
const ToastClose: FC<ToastProps> = ({ onClose }) => {
  return <div onClick={onClose}>닫기</div>;
};

export default ToastClose;
