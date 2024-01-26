"use client";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

interface HeadingProps {
  origin: string;
  name: string;
  colors: BoxObj[];
}

export const Heading: React.FC<HeadingProps> = ({ origin, name, colors }) => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = document.querySelectorAll(`.${name}-heading-box`);
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scaleX: 0.75,
          transformOrigin: origin,
        },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
          },
        },
      );
    });
  }, {});

  return (
    <div className="h-full w-full ">
      <Loop
        boxName={`${name}-heading`}
        number={3}
        boxes={colors}
        paddingTop="20px"
        paddingBottom="20px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
