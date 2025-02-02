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
    progressRef.current.style.width = `${currentProgress.current}%`;
    requestRef.current = requestAnimationFrame(animate);
    if (currentProgress.current >= 100) {
      progressRef.current.style.display = `none`;
      cancelAnimationFrame(requestRef.current);
    }
  };
  const stopAnimate = () => {
    progressRef.current.style.width = `100%`;
    progressRef.current.style.transition = `0.1s`;
    progressRef.current.addEventListener("transitionend", () => {
      progressRef.current.style.display = `none`;
    });
  };

  /*  */
  useEffect(() => {
    if (!stop) {
      animate();
    } else {
      cancelAnimationFrame(requestRef.current);
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

/* requestAnimationFrame 사용 이유 */
// 1.배터리 및 성능 최적화 => setTimeout 또는 setInterval은 고정된 타이머 주기를 사용하므로 불필요한 작업과 배터리 소모가 발생할 수 있다.
// 2.부드러운 애니메이션 구현 => 일반적으로 애니메이션은 1초에 60프레임(60FPS) 정도가 이상적이며, requestAnimationFrame 은 이 프레임 레이트를 고려해 최적화합니다.
