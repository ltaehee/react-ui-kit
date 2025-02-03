import { FC, ReactNode } from "react";

interface ToastTitleProps {
  className?: string;
  children: ReactNode;
}

const ToastTitle: FC<ToastTitleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ToastTitle;
