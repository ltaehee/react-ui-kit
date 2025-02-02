import { FC, ReactNode } from "react";

interface ToastProps {
  children: ReactNode;
  className?: string;
}

const ToastDescription: FC<ToastProps> = () => {
  return <div>ToastDescription</div>;
};

export default ToastDescription;
