import { FC, ReactNode } from "react";

interface ToastProps {
  children: ReactNode;
  className?: string;
}

const ToastTitle: FC<ToastProps> = ({ children }) => {
  return <div>ToastTitle</div>;
};

export default ToastTitle;
