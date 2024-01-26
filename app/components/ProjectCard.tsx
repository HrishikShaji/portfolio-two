"use client";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Content } from "./Content";
import Image from "next/image";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

interface ProjectCardProps {
  item: Record<string, any>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  const boxes: BoxObj[] = [
    {
      color: "hsl(0,0%,10%)",
      data: (
        <Content
          from={{ scaleY: 1 }}
          to={{ scaleY: 0 }}
          color="black"
          origin="top"
          name={item.id}
        >
          <Image
            src={item.img}
            alt="image"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </Content>
      ),
      flexDirection: "row",
    },
    { color: "#f03daf", flexDirection: "row" },
  ];
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });

  useGSAP(() => {
    const boxes = document.querySelectorAll(".project-box");
    const container = document.querySelector(".project-card");
    boxes.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.25,
          transformOrigin: "center",
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
    <div className="h-[300px] w-full project-card">
      <Loop
        boxName="project"
        number={1}
        boxes={boxes}
        paddingTop="20px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
