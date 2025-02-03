import { ReactNode, useEffect, useRef } from "react";
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
  const toastRoot = useRef<ReactDOM.Root>();
  const timerId = useRef<NodeJS.Timeout>();

  const toast = ({ title, description, className = "toaster" }: ToastProps) => {
    const toastCls = className ? `${className} ${toastBaseCls}` : toastBaseCls;
    if (toastRoot.current) {
      toastRoot.current.unmount();
    }
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    toastRoot.current = ReactDOM.createRoot(
      document.getElementById("ui-toaster")!
    );
    toastRoot.current.render(
      <div className={toastCls}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose
          onClose={() => {
            if (toastRoot.current) {
              toastRoot.current.unmount();
            }
            if (timerId.current) {
              clearTimeout(timerId.current);
            }
          }}
        />
      </div>
    );
    timerId.current = setTimeout(() => {
      if (toastRoot.current) {
        toastRoot.current.unmount();
      }
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    }, 10000);
  };

  /* 클린업 함수 */
  useEffect(() => {
    return () => {
      if (toastRoot.current) {
        toastRoot.current.unmount();
      }
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);
  return { toast };
};

export const Toaster = () => {
  return <div id={"ui-toaster"} />;
};
