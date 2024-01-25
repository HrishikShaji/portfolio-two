"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { loopAnimation } from "../lib/utils";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Heading } from "./Heading";
import { skillsHeadingColors } from "../lib/loopItems";

const boxes: BoxObj[] = [
  { color: "hsl(0,0%,10%)" },
  { color: "#0ce161" },
  { color: "hsl(0,0%,10%)" },
  { color: " #0ce161" },
  {
    color: "hsl(0,0%,10%)",
    data: (
      <div className="absolute w-[900px] top-0 right-0">
        <Heading colors={skillsHeadingColors} name="skills" origin="right" />
      </div>
    ),
  },
];

export const Skills = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const boxes = document.querySelectorAll(".skills-box");
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
      window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);

  return (
    <div className="h-screen w-full ">
      <Loop
        boxName="skills"
        number={4}
        boxes={boxes}
        paddingTop="20px"
        paddingBottom="20px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
