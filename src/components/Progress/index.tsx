import { progressBaseCls } from "@consts/className";
import { FC, useEffect, useMemo, useRef } from "react";

interface ProgressProps {
  className?: string;
  stop: boolean;
}
const Progress: FC<ProgressProps> = ({ stop, className }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const currentProgress = useRef(0);

  const animate = () => {
    currentProgress.current += 0.25;
    if (progressRef.current) {
      progressRef.current.style.width = `${currentProgress.current}%`;
    }
    requestRef.current = requestAnimationFrame(animate);
    if (progressRef.current && currentProgress.current >= 100) {
      progressRef.current.style.display = `none`;
      cancelAnimationFrame(requestRef.current);
    }
  };

  const stopAnimate = () => {
    if (progressRef.current) {
      progressRef.current.style.width = `100%`;
      progressRef.current.style.transition = `0.1s`;
      progressRef.current.addEventListener("transitionend", () => {
        if (progressRef.current) {
          progressRef.current.style.display = `none`;
        }
      });
    }
  };

  /*  */
  useEffect(() => {
    if (!stop) {
      animate();
    } else {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
      stopAnimate();
    }
  }, [stop]);

  const progressCls = useMemo(() => {
    return className ? `${className} ${progressBaseCls}` : progressBaseCls;
  }, [className, progressBaseCls]);

  return (
    <>
      <div
        className={progressCls}
        style={{
          height: "30px",
          background: "blue",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        ref={progressRef}
      ></div>
    </>
  );
};

export default Progress;
