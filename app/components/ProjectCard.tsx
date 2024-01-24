"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";
import { loopAnimation } from "../lib/utils";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,10%)" },
	{ color: "#f03daf" },
	{ color: "hsl(0,0%,30%)" },
	{ color: "hsl(0,0%,40%)" },
	{ color: "hsl(0,0%,50%)" },
	{ color: "hsl(0,0%,60%)" },
	{ color: "hsl(0,0%,70%)" },
	{ color: "hsl(0,0%,80%)" },
	{ color: "hsl(0,0%,90%)" },
];

export const ProjectCard = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const boxes = document.querySelectorAll(".project-box");
			boxes.forEach((element) => {
				gsap.fromTo(
					element,
					{
						scaleX: 0.25,
						transformOrigin: "left",
					},
					{
						scaleX: 1,
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
		<div className="h-full w-full ">
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
