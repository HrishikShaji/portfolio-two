"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Loop } from "./Loop";
import { useMount } from "../hooks/useMount";

const colors = [
  "hsl(0,0%,10%)",
  "hsl(0,0%,20%)",
  "hsl(0,0%,30%)",
  "hsl(0,0%,40%)",
  "hsl(0,0%,50%)",
  "hsl(0,0%,60%)",
  "hsl(0,0%,70%)",
  "hsl(0,0%,80%)",
  "hsl(0,0%,90%)",
];

export const About = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    if (isMounted) {
      const animation = (event: MouseEvent) => {
        const boxes = document.querySelectorAll(".box");
        const xPos = (event.clientX / window.innerWidth) * 10;
        const yPos = (event.clientY / window.innerHeight) * 10;
        console.log(xPos, boxes);
        boxes.forEach((element) => {
          gsap.to(element, { x: xPos, y: yPos });
        });
      };

      window.addEventListener("mousemove", (event) => {
        animation(event);
      });
    }
  }, [isMounted]);

  return (
    <div className="h-screen w-full ">
      <Loop
        number={5}
        colors={colors}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="140px"
      />
    </div>
  );
};
