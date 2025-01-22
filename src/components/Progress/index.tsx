import { progressBaseCls } from "@consts/className";
import { FC, useMemo, useRef } from "react";

interface ProgressProps {
  className?: string;
  stop: boolean;
}
const Progress: FC<ProgressProps> = ({ className }) => {
  const requestRef = useRef<number>(0);
  const animate = () => {
    requestRef.current = requestAnimationFrame(animate);
  };

  const progressCls = useMemo(() => {
    return className ? `${className} ${progressBaseCls}` : progressBaseCls;
  }, [className, progressBaseCls]);

  return (
    <>
      <div className={progressCls}>
        <div style={{}}></div>
      </div>
    </>
  );
};

export default Progress;
