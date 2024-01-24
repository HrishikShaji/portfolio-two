"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";
import { loopAnimation } from "../lib/utils";
import { HorizontalBar } from "./HorizontalBar";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,20%)" },
	{ color: "hsl(0,0%,30%)" },
	{ color: "hsl(0,0%,40%)" },
	{ color: "hsl(0,0%,50%)" },
	{ color: "hsl(0,0%,60%)" },
];

interface HeadingProps {
	origin: string;
	name: string;
	colors: BoxObj[];
}

export const Heading: React.FC<HeadingProps> = ({ origin, name, colors }) => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const boxes = document.querySelectorAll(`.${name}-heading-box`);
			boxes.forEach((element) => {
				gsap.fromTo(
					element,
					{
						scaleX: 0.75,
						transformOrigin: origin,
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
				boxName={`${name}-heading`}
				number={3}
				boxes={colors}
				paddingTop="20px"
				paddingBottom="20px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};