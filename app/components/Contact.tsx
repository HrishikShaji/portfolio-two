"use client";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

const boxes: BoxObj[] = [
  { flexDirection: "row", color: "hsl(0,0%,10%)", data: "Contact ME" },
  { color: "#fcee12", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: "#fcee12", flexDirection: "row" },
  { color: "hsl(0,0%,10%)", flexDirection: "row" },
  { color: "#fcee12", flexDirection: "row" },
];

export const Contact = () => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
    const boxes = document.querySelectorAll(".contact-box");
    const container = document.querySelector(".contact-container");
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.75,
          transformOrigin: "bottom",
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
          },
        },
      );
    });
  }, {});

  return (
    <div className="contact-container h-screen w-full ">
      <Loop
        boxName="contact"
        number={5}
        boxes={boxes}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
