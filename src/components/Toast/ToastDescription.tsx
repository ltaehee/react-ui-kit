import { FC, ReactNode } from "react";

interface ToastDescriptionProps {
  className?: string;
  children: ReactNode;
}

const ToastDescription: FC<ToastDescriptionProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ToastDescription;
