"use client";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Main } from "./Main";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

const boxes: BoxObj[] = [
  { color: "hsl(0,0%,10%)", data: <Main />, flexDirection: "row" },
  { color: "hsl(0,0%,20%)", flexDirection: "row" },
  { color: "hsl(0,0%,30%)", flexDirection: "row" },
];
export const Wrapper = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = document.querySelectorAll(".wrapper-bo");
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.75,
          transformOrigin: "center",
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2,
          },
        },
      );
    });
  }, {});

  return (
    <div className="h-full w-full ">
      <Loop
        boxName="wrapper"
        number={2}
        boxes={boxes}
        paddingTop="40px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
