import { ReactNode, useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";
import ToastTitle from "./ToastTitle";
import ToastDescription from "./ToastDescription";
import ToastClose from "./ToastClose";
import { toastBaseCls } from "@consts/className";

interface ToastProps {
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

export const useToast = () => {
  const toastRoot = useRef<ReactDOM.Root>(null);
  const timerId = useRef<NodeJS.Timeout>(null);
  const toast = ({ title, description, className }: ToastProps) => {
    /* const toastCls = useMemo(() => {
      return className ? `${className} ${toastBaseCls}` : toastBaseCls;
    }, [className, toastBaseCls]); */

    if (toastRoot.current) {
      toastRoot.current.unmount();
    }
    /*  */

    toastRoot.current = ReactDOM.createRoot(
      document.getElementById("ui-toaster")!
    );
    toastRoot.current.render(
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose onClose={() => toastRoot.current.unmount()} />
      </div>
    );
    /* 클린업함수 */
    timerId.current = setTimeout(() => {
      if (toastRoot.current) {
        toastRoot.current.unmount();
      }
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    }, 3000);
  };
  // clearTimeout;
  return { toast };
};

export const Toaster = () => {
  return <div id={"ui-toaster"} />;
};
