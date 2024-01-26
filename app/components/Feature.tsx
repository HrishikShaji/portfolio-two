"use client";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Content } from "./Content";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

interface FeatureProps {
  item: Record<string, any>;
}

export const Feature: React.FC<FeatureProps> = ({ item }) => {
  const featuresContent: BoxObj[] = [
    {
      color: "hsl(0,0%,10%)",
      data: (
        <Content
          from={{ scaleY: 1 }}
          to={{ scaleY: 0 }}
          color="red"
          origin="bottom"
          name={item.id}
        >
          <h1 className="text-white">{item.title}</h1>
        </Content>
      ),
      flexDirection: "row",
    },
    { color: "#2edbef", flexDirection: "row" },
    { color: "hsl(0,0%,10%)", flexDirection: "row" },
    { color: "#2edbef", flexDirection: "row" },
    { color: "hsl(0,0%,10%)", flexDirection: "row" },
  ];
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = document.querySelectorAll(".feature-box");
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
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
          },
        },
      );
    });
  }, {});

  return (
    <div className="h-full w-full ">
      <Loop
        boxName="feature"
        number={4}
        boxes={featuresContent}
        paddingTop="20px"
        paddingBottom="20px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
