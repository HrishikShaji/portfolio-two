"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";
import { ProjectContainer } from "./ProjectContainer";
import { loopAnimation } from "../lib/utils";

const boxes: BoxObj[] = [
  { color: "hsl(0,0%,30%)", data: <ProjectContainer /> },
  { color: "hsl(0,0%,40%)" },
  { color: "hsl(0,0%,50%)" },
  { color: "hsl(0,0%,60%)" },
];

export const Projects = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    if (isMounted) {
      window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);

  return (
    <div className="h-full w-full ">
      <Loop
        number={3}
        boxes={boxes}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
