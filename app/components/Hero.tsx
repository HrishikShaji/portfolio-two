"use client";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

const boxes: BoxObj[] = [
  { flexDirection: "row", color: "hsl(0,0%,10%)", data: "Hi, I'm HRISHIK" },
  { color: "#ed0404", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: "#ed0404", flexDirection: "row" },
];

export const Hero = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = document.querySelectorAll(".hero-box");
    const container = document.querySelector(".hero-container");
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scaleY: 0.25,
          transformOrigin: "bottom",
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "top 20%",
            scrub: 2,
          },
        },
      );
    });
  }, {});
  return (
    <div className="h-[500px] w-full hero-container ">
      <Loop
        boxName="hero"
        number={3}
        boxes={boxes}
        paddingTop="40px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
