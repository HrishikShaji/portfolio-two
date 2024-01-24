import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export type BoxObj = {
  color: string;
  data?: any;
  flexDirection?: string;
};

interface LoopProps {
  number: number;
  boxes: BoxObj[];
  paddingTop: string;
  paddingBottom: string;
  paddingRight: string;
  paddingLeft: string;
}
export const Loop: React.FC<LoopProps> = ({
  number,
  boxes,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
}) => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const boxes = document.querySelectorAll(".animate-box");
      boxes.forEach((element) => {
        gsap.fromTo(
          element,
          {
            scale: 0.75,
          },
          {
            scale: 1,
            transformOrigin: "center",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 2,
              markers: true,
            },
          },
        );
      });
    }
  }, [isMounted]);
  return (
    <div
      className="box animate-box relative w-full h-full rounded-xl flex"
      style={{
        backgroundColor: boxes[number].color,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        flexDirection: boxes[number]?.flexDirection
          ? boxes[number].flexDirection
          : "row",
        gap: "20px",
      }}
    >
      {number > 0 ? (
        <Loop
          boxes={boxes}
          number={number - 1}
          paddingTop={paddingTop}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingBottom={paddingBottom}
        />
      ) : null}
      {boxes[number].data ? boxes[number].data : null}
    </div>
  );
};
