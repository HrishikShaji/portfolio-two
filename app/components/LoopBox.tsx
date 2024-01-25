"use client";

import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { loopAnimation } from "../lib/utils";

const boxes: BoxObj[] = [
  { color: "hsl(0,0%,10%)", data: "About ME", flexDirection: "row" },
  { color: "#d042f8", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: "#d042f8", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: "#d042f8", flexDirection: "row" },
];

interface LoopBoxProps {
  name: string;
}

export const LoopBox: React.FC<LoopBoxProps> = ({ name }) => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const boxes = document.querySelectorAll(`.${name}-loop-box`);
      boxes.forEach((element) => {
        gsap.fromTo(
          element,
          {
            scale: 1,
            transformOrigin: "center",
          },
          {
            scale: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 20%",
              scrub: 2,
            },
          },
        );
      });
      window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);
  return (
    <div className="absolute h-[300px] w-[300px]  top-0 left-[300px]">
      <Loop
        boxName={`${name}-loop`}
        number={5}
        boxes={boxes}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
