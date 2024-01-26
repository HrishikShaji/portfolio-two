"use client";
import gsap from "gsap";
import { useRef } from "react";
import { Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { aboutContent } from "../lib/loopItems";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

export const About = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = document.querySelectorAll(".about-box");
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.75,
          transformOrigin: "top right",
        },
        {
          scale: 1,
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
    <div className="h-screen w-full ">
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
