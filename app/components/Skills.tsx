"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { loopAnimation } from "../lib/utils";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Heading } from "./Heading";
import { skillsHeadingColors } from "../lib/loopItems";
import { Content } from "./Content";
import { data } from "../lib/data";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

const boxes: BoxObj[] = [
  {
    color: "hsl(0,0%,10%)",
    data: (
      <Content
        color="black"
        name="skill"
        origin="right"
        from={{ scaleX: 1 }}
        to={{ scaleX: 0 }}
      >
        <div className="h-full w-full flex items-end ">
          <div className="h-[80%] w-full grid grid-cols-4 place-items-center gap-5">
            {data.skills.data.map((item, i) => (
              <h1 key={i} className="text-white">
                {item}
              </h1>
            ))}
          </div>
        </div>
      </Content>
    ),
    flexDirection: "row",
  },
  { color: "#0ce161", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: " #0ce161", flexDirection: "row" },
  {
    color: "hsl(0,0%,10%)",
    data: (
      <div className="absolute w-[900px] top-0 right-0">
        <Heading colors={skillsHeadingColors} name="skills" origin="right" />
      </div>
    ),
    flexDirection: "row",
  },
];

export const Skills = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
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
  }, {});

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
