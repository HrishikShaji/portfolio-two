"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,10%)", data: <Skill /> },
	{ color: "hsl(0,0%,20%)" },
	{ color: "hsl(0,0%,30%)" },
	{ color: "hsl(0,0%,40%)" },
	{ color: "hsl(0,0%,50%)" },
	{ color: "hsl(0,0%,60%)" },
	{ color: "hsl(0,0%,70%)" },
	{ color: "hsl(0,0%,80%)" },
	{ color: "hsl(0,0%,90%)" },
];

export const Skills = () => {
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
				number={4}
				boxes={boxes}
				paddingTop="20px"
				paddingBottom="40px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};
