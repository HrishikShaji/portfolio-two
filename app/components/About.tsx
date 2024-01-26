"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { aboutContent } from "../lib/loopItems";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";
export const About = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = document.querySelectorAll(".about-box");
      gsap.fromTo(
        ".about-box",
        {
          scale: 0.75,
          transformOrigin: "top right",
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: ".about-box",
            start: "top 80%",
            end: "top 20%",
            scrub: 5,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="h-screen w-full ">
      <Loop
        boxName="about"
        number={5}
        boxes={aboutContent}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
