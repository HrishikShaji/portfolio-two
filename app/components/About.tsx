"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { loopAnimation } from "../lib/utils";
import { VerticalBar } from "./VerticalBar";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { data } from "../lib/data";
import { AboutDesc } from "./AboutDesc";
import { Content } from "./Content";
import { aboutContent } from "../lib/loopItems";

export const About = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
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
      window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);

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
